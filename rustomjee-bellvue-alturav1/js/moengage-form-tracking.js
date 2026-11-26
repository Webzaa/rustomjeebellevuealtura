/* Rustomjee - MoEngage form progress tracking (lead_form_started / lead_form_abandoned)
 * Requires /js/moengage-datalayer.js to be loaded first.
 * Pushes only field NAMES and COUNTS, never what the visitor typed.
 *
 * Adapted for the Villa Altura React (Vite) site:
 *  - matches forms with a [name="mobile"] OR [name="phone"] field
 *  - forms are rendered by React after load, so they are picked up with a
 *    MutationObserver instead of a one-time scan
 *  - the booking popup is a native <dialog>, so its "close" event is used
 *  - "submitted" is reported explicitly by the form code through
 *    window.rustomjeeFormSubmitted(formId), only after the API confirms the lead
 *  - a hash route change (e.g. to #oops) with a started, unsubmitted form counts
 *    as abandoned
 */
(function () {
  'use strict';

  // Fields that are not visitor input.
  var IGNORE_NAMES = [
    'honeypot', 'formname', 'countryname', 'session_id',
    'subject', 'comments', 'CountryCode', 'consentbox',
    'consent', 'country_code'
  ];

  // Mobile: seconds the started form can stay out of view before it counts as abandoned
  var SCROLL_AWAY_SECONDS = 8;

  // Touch devices (phones and tablets)
  var IS_TOUCH = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);

  // formId -> { markSubmitted: fn } for the forms currently on the page
  var registry = {};

  function isTracked(el) {
    if (!el || !el.name) { return false; }
    if (el.type === 'hidden' || el.type === 'submit' || el.type === 'button') { return false; }
    return IGNORE_NAMES.indexOf(el.name) === -1;
  }

  function trackedFields(form) {
    var out = [];
    var els = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < els.length; i++) {
      if (isTracked(els[i])) { out.push(els[i]); }
    }
    return out;
  }

  function hasValue(el) {
    if (el.type === 'checkbox' || el.type === 'radio') { return el.checked; }
    return String(el.value || '').trim() !== '';
  }

  function init(form, index) {
    var formId = form.getAttribute('data-form-id') || form.id || form.getAttribute('name') || ('form_' + (index + 1));

    // Read at the moment an event fires, not once at load.
    function getFormName() {
      var nameField = form.querySelector('input[name="formname"]');
      if (nameField && nameField.value) { return nameField.value; }
      return form.getAttribute('data-form-name') || '';
    }

    var startedAt = 0;
    var started = false;
    var submitted = false;
    var lastField = '';
    var scrollTimer = null;
    var observer = null;

    function countCompleted() {
      var n = 0;
      var fields = trackedFields(form);
      for (var i = 0; i < fields.length; i++) {
        if (hasValue(fields[i])) { n++; }
      }
      return n;
    }

    // A field counts as completed when the visitor leaves it with a value
    form.addEventListener('change', function (e) {
      var el = e.target;
      if (!isTracked(el) || !hasValue(el)) { return; }

      lastField = el.name;

      if (!started) {
        started = true;
        startedAt = Date.now();
        rustomjeePushLeadFormStarted({
          formId: formId,
          formName: getFormName(),
          fieldsCompleted: countCompleted(),
          lastFieldName: lastField
        });
      }
    }, true);

    function abandon() {
      if (!started || submitted) { return; }
      rustomjeePushLeadFormAbandoned({
        formId: formId,
        formName: getFormName(),
        fieldsCompleted: countCompleted(),
        lastFieldName: lastField,
        secondsElapsed: (Date.now() - startedAt) / 1000
      });
    }

    registry[formId] = {
      markSubmitted: function () {
        submitted = true;
        if (scrollTimer) { clearTimeout(scrollTimer); scrollTimer = null; }
      }
    };

    // 1. Visitor leaves the page
    window.addEventListener('pagehide', abandon);

    // 2. Hash route change inside the single page app (e.g. to #oops)
    window.addEventListener('hashchange', abandon);

    // 3. Visitor closes the popup (native <dialog>) containing the form
    var dialog = form.closest ? form.closest('dialog') : null;
    if (dialog) {
      dialog.addEventListener('close', abandon);
    }

    // 4. Mobile only: page hidden (app switch, screen lock, tab switch)
    if (IS_TOUCH) {
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') { abandon(); }
      });
    }

    // 5. Mobile only, forms in the page body: scrolled away from the form
    if (IS_TOUCH && !dialog && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(function (entries) {
        var visible = entries[0].isIntersecting;

        if (visible) {
          if (scrollTimer) { clearTimeout(scrollTimer); scrollTimer = null; }
          return;
        }

        if (started && !submitted && !scrollTimer) {
          scrollTimer = setTimeout(function () {
            scrollTimer = null;
            abandon();
          }, SCROLL_AWAY_SECONDS * 1000);
        }
      }, { threshold: 0 });

      observer.observe(form);
    }
  }

  var seen = typeof WeakSet === 'function' ? new WeakSet() : null;
  var counter = 0;

  function setup() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      var f = forms[i];
      // Only forms that look like the enquiry form (have a mobile / phone field)
      if (!f.querySelector('[name="mobile"], [name="phone"]')) { continue; }
      if (seen) {
        if (seen.has(f)) { continue; }
        seen.add(f);
      } else {
        if (f.__rjTracked) { continue; }
        f.__rjTracked = true;
      }
      init(f, counter++);
    }
  }

  // Called by the site's form code once the API has confirmed the lead.
  window.rustomjeeFormSubmitted = function (formId) {
    if (formId && registry[formId]) {
      registry[formId].markSubmitted();
      return;
    }
    // No id given: mark every tracked form on the page as submitted
    for (var k in registry) {
      if (Object.prototype.hasOwnProperty.call(registry, k)) { registry[k].markSubmitted(); }
    }
  };

  function start() {
    setup();
    // React renders (and re-renders) forms after load; watch for new ones.
    if ('MutationObserver' in window) {
      var pending = false;
      new MutationObserver(function () {
        if (pending) { return; }
        pending = true;
        setTimeout(function () { pending = false; setup(); }, 150);
      }).observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
