import { useEffect } from 'react';
import Header from './Header.jsx';
import { trackGtmPageView } from '../utils/gtm.js';

export default function TermsConditions({ onBook }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    trackGtmPageView('terms');
  }, []);

  return (
    <div className="legal-page">
      <Header onBook={onBook} backButton />
      <main className="legal-content">
        <div className="legal-container">
          <h1>TERMS &amp; CONDITIONS</h1>
          <p>
            We request you to familiarize yourself with the terms and conditions set out below before navigating further or viewing our website:
          </p>
          <p>
            This website i.e. <a href="https://www.rustomjee.com" target="_blank" rel="noopener noreferrer">www.rustomjee.com</a> (&ldquo;Website&rdquo;) is the corporate website owned and operated by Keystone Realtors Private Limited and its group companies (that is, its affiliates, subsidiaries, ultimate holding company, associate companies, joint ventures) (&ldquo;Rustomjee Group&rdquo;).
          </p>
          <p>
            By proceeding to view this Website and/or part thereof and/or any linked sites and/or any specific project related detail as disclosed on this Website for any purpose and in any manner including general browsing, response / feedback, availing of services or downloading content it is presumed that you have read, understood and have agreed to abide by and be governed by these terms and conditions read along with any other terms and conditions governing the use of this Website, which shall constitute an entire binding agreement between you and the Rustomjee Group. These terms and conditions may be varied / revised from time to time and the varied / revised terms and conditions will be deemed to apply at the relevant time in respect of your use of this Website.
          </p>
          <p>
            If you do not agree to be governed by this terms and conditions, you are requested not to use this Website.
          </p>
          <p>
            This Website is meant to provide you with all preliminary and basic information in respect of Rustomjee Group and its projects, and we therefore request you to refrain from misusing and/or tampering with the Website in any manner including but not limited to the introduction of viruses, trojans, etc., as the same will subject you to necessary action under applicable laws and regulations.
          </p>
          <p>
            This Website makes available information / material on Rustomjee Group, its projects developed / being developed and connected information which are exclusively in the nature of general information and should not be construed as advice (including technical and/or legal advice) in any manner. The Website may contain technical data like layout plans, site plans, plot size, apartment / flat size, project status and completion dates etc. as also pictures / photographs (including actual / stock / standard photography or rendered images) of various projects developed and constructed or in the process of being developed and constructed by Rustomjee Group. All such information is provided for general guidance and information only, without warranties, guarantees, undertaking or term as to the condition, quality, state of readiness or fitness of any kind, either expressed or implied as to its completeness, accuracy, reliability, suitability or availability.
          </p>
          <p>
            All plans, specifications, designs, elevations, features, amenities, facilities and services mentioned in this website are indicative of the kind of development proposed and/or being undertaken for the respective projects and its finality is subject to the approval of the respective authorities. Rustomjee Group reserves the right to change any and/or all of information, materials, images, project details visible on the website without any obligation to notify you or any other past, present or prospective user of the Website. Although Rustomjee Group makes reasonable efforts to update the information and content on the Website, it may be noted that some information and content may be out of date at any given time, and Rustomjee Group is under no obligation to update it.
          </p>
          <p>
            Rustomjee Group may seek expression of interest from users of the Website in respect of one or more of its projects. An expression of interest by a user of the Website in any of the projects of Rustomjee Group does not constitute an offer for sale by Rustomjee Group of the product nor does it constitute a transaction by Rustomjee Group with the user. Rustomjee Group are not obliged to offer any of their products for sale pursuant to any expression of interest by any user of the Website. Nothing contained in the Website shall constitute a transaction between you and Rustomjee Group unless specifically stated to that effect.
          </p>
          <p>
            Accessing / visiting this Website does not constitute an offer and/or contract of any type between the Rustomjee Group and the viewer / recipient. None of our representatives or employees or consultants or agents or any person claiming through or under us has any authority to make or give any representation or warranty of any nature whatsoever in relation to any property. None of the information, materials or details mentioned on our website shall be regarded or taken as legal, technical or financial advice and a thorough diligence of the same may be undertaken by you in that regard, if you so desire and deem fit.
          </p>
          <p>
            All transactions shall be subject to the terms and conditions of the agreement to be entered into between Rustomjee Group and the intending party.
          </p>
          <p>
            Your reliance on the Website or any information contained in the Website is entirely at your own responsibility and risk and Rustomjee Group assumes no responsibility and shall not in any way be liable in this regard.
          </p>
          <p>
            Rustomjee Group does not make any assurance or guarantee that the Website will operate continuously or be error free. Though we have taken all the requisite care and precaution to make your experience of navigating and browsing our Website an enjoyable and secure experience, we do not guarantee or warrant that the Website or any link to the Website will be free from viruses and other destructive agents and will not be liable for any interference or damage to your computer system in connection with your use of the Website and any link to the Website. You must take your own precautions to ensure that your computer and its operating system has the necessary technical specifications and safeguards for use of the website.
          </p>
          <p>
            You shall use the Website only for lawful purposes and in accordance with the Website terms and conditions. You shall be completely and solely responsible and liable for any charges, taxes, duties, fees and any other charges that arise in connection with your use of the Website. You shall not in any manner interfere with the software or any other technical aspect of the Website or use the Website in any manner that could disrupt, damage, disable, or adversely affect any server of Rustomjee Group or any networks or operating systems connected to the server of Rustomjee Group. You shall also not use the Website in a manner that interferes with or impedes the use of the Website by other users. You shall not attempt to gain access to the Website through unethical and/or illegal means including hacking. You shall not attempt to alter the contents of the Website in any manner or post or attempt to post any abusive or defamatory content on the Website.
          </p>
          <p>
            The Website, the information, the content and software therein are made available to you on an &ldquo;as is&rdquo; basis by Rustomjee Group without any warranty, express or implied, of any kind including but not limited to and Rustomjee Group shall under no circumstance and in no event be responsible or liable for any loss or damage (direct, indirect, special, consequential, incidental or otherwise, whether by way of loss of profits or loss of business opportunity, business interruption or loss of information or data or programs), arising in any manner whatsoever whether in contract, law, tort, or any other basis, that you may suffer out of your use of the Website and/or your reliance on the Website and/or any information therein.
          </p>
          <p>
            The Website may contain links to other websites (&ldquo;Linked Websites&rdquo;). These links are provided only for convenience and information. Rustomjee Group has no control over the content or the availability of Linked Websites and has not reviewed the information on the Linked Websites. Rustomjee Group shall not be responsible or liable for any aspect of the Linked Websites including the content therein.
          </p>
          <p>
            The rights in terms of all the intellectual property on our Website is held by us either as the owner or as a licensee. On visiting and browsing this Website, you have deemed to have acknowledged and accepted that all of the copyright, database rights and any other intellectual property rights which subsist in the design, layout, processes, functions, data and content of this Website belong to the Rustomjee Group or our licensors, information providers or contributors, as the case may be and we reserve all our rights in that regard. No part of this Website, its contents or any of its underlying software and databases can be shared with any third party, reverse engineered, reverse assembled without our prior written consent.
          </p>
          <p>
            The contents, graphics, images, information and material as disclosed or depicted on this Website are the exclusive property of the Rustomjee Group. No person shall use, copy, reproduce, imitate, publish, display, modify, create derivative works or database, transmit, exploit, sell or distribute the same in whole or in part. Facility, if any to print any article or portion of text material from the website through computer / electronic device does not tantamount to prior written consent and will be strongly dealt with.
          </p>
          <p>
            The Website is solely for your personal non-commercial use and you must ensure that your use of the Website is exclusively for this purpose. Rustomjee Group only grants you a non-exclusive, non- transferable, limited right to use the Website. You shall not claim any other right in respect of the Website.
          </p>
          <p>
            Further using the contents, information, details and materials disclosed on this Website for the purposes of any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text is not permitted.
          </p>
          <p>
            Our Privacy Policy which sets out the terms on which we process any personal data we collect from you or that you provide to us. By using our website, you consent to such processing and you warrant that all data provided by you is accurate.
          </p>
          <p>
            If you breach any of the terms and conditions contained in this Website, we reserve the right to terminate your right to use the Website forthwith without any notice to you. The provisions of these terms and conditions shall survive any such termination. You shall also be liable to indemnify Rustomjee Group, its subsidiaries, affiliates, associates, directors, officers, agents and employees and defend and hold them harmless from any claim or demand or action arising out of any such breach by you. In case Rustomjee Group fails to act with respect to a breach by you or any other party or uses, such failure shall not constitute a waiver nor shall it preclude us from exercising its right to act in respect of subsequent breaches.
          </p>
          <p>
            If any of the terms and conditions contained in this Website are illegal or not enforceable, the same shall not affect the legality or enforceability of the remaining terms and conditions.
          </p>
          <p>
            Please note that this Website is the only official website of Rustomjee Group. You are cautioned and advised to only visit the Website and not to rely upon any information / data contained on any other unauthorized / unofficial websites which may appear to be similar to this Website, including any sites containing Rustomjee Group&rsquo;s logo / brand name.
          </p>
          <p>
            You are further advised to check / ensure that you are dealing with our official &ldquo;RERA Registered&rdquo; real estate agent(s) only.
          </p>
          <p>
            Before making a decision to purchase, the users are requested to independently, either directly or through their legal / technical / financial consultants, thoroughly verify all details / documents pertaining to the respective project as available on <a href="http://maharera.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer">http://maharera.mahaonline.gov.in/</a>.
          </p>
          <p>
            In no event Rustomjee Group shall be liable for any direct, indirect, incidental and/or consequential claims, loss and/or damage whatsoever arising out of the use of the information on the Website.
          </p>
          <p>
            The Website terms and conditions shall be governed by the laws of India and the courts in Mumbai shall have exclusive jurisdiction in respect of any matter or dispute arising out of or in respect of the website terms and condition.
          </p>
        </div>
      </main>
    </div>
  );
}
