/**
 * MoEngage dataLayer helpers (spec: moengage-datalayer.js v8.0).
 * The globals below come from /js/moengage-datalayer.js, loaded in index.html.
 * Everything is wrapped so tracking can never break a lead submission.
 */

// Project slug as used by Rustomjee. CONFIRM this value with Webzaa / Realatte.
const PROJECT_SLUG = 'rustomjee-belle-vue';

export function trackLeadSubmitted({ countryCode, mobile, name, email, formName, formLocation, formId, leadId }) {
  try {
    if (typeof window === 'undefined') return;

    if (typeof window.rustomjeePushLeadSubmitted === 'function') {
      window.rustomjeePushLeadSubmitted({
        phone: window.rustomjeeToDialFormat(countryCode, mobile),
        email: email || '',
        name: name || '',
        enquiryType: '',
        location: '',
        project: PROJECT_SLUG,
        formName: formName || '',
        formLocation: formLocation || '',
        leadId: leadId == null ? '' : String(leadId),
      });
    }

    // Tell the form-progress tracker this form was really submitted,
    // so it is not reported as abandoned.
    if (typeof window.rustomjeeFormSubmitted === 'function') {
      window.rustomjeeFormSubmitted(formId);
    }
  } catch (err) {
    console.warn('MoEngage tracking error:', err);
  }
}
