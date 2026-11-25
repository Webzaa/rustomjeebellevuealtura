import { useEffect } from 'react';
import Header from './Header.jsx';
import { trackGtmPageView } from '../utils/gtm.js';

export default function PrivacyPolicy({ onBook }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    trackGtmPageView('privacy');
  }, []);

  return (
    <div className="legal-page">
      <Header onBook={onBook} backButton />
      <main className="legal-content">
        <div className="legal-container">
          <h1>PRIVACY POLICY</h1>
          <p>
            Rustomjee (that is, our subsidiaries, affiliates, associate companies, joint ventures, our ultimate holding company and its subsidiaries) (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) are committed to protecting and respecting your privacy. This privacy policy (together with our terms of use and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting <a href="https://www.rustomjee.com" target="_blank" rel="noopener noreferrer">www.rustomjee.com</a> or any other of our websites/mobile applications (&quot;Sites&quot;) to which this privacy policy applies or otherwise, you are accepting and consenting to the practices described in this privacy policy.
          </p>

          <h2>WE MAY COLLECT AND PROCESS THE FOLLOWING DATA ABOUT YOU:</h2>
          <p>
            <strong>Information you give us.</strong> You may give us information about you by filling in forms on our sites, or by submitting your CV, or by corresponding with us by phone, e-mail or otherwise or, by you interacting with any of our business partners, suppliers or sub-contractors (including estate agents, sales agents and our professional advisors) engaged on our behalf. This includes information you provide when you register to use our sites, subscribe to our service, email us, arrange property viewings with us, request brochures from us, complete an enquiry form, provide your CV and when you report a problem with our sites. The information you give us may include your name, address, e-mail address, phone number and any other information relevant to your enquiry or request for information or services which we may request and you may choose to provide to us from time to time.
          </p>
          <p>
            <strong>Information we collect about you.</strong> We may automatically collect: technical information, including the IP address, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform; and information about your visit, including the full URL clickstream to, through and from our sites; materials you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information, and methods used to browse away from the page and any phone number used to call our customer service number.
          </p>
          <p>
            <strong>Information we receive from other sources.</strong> We may receive information about you if you use our sites or the other services we provide. In this case we will have informed you when we collected that data that it may be shared internally and combined with data collected on our sites. We also work closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies) and may receive information about you from them.
          </p>

          <h2>HOW WE USE COLLECTED DATA</h2>
          <p>
            We may collect and use your data including but not limited for the following purposes:
          </p>
          <ul>
            <li>to carry out our obligations (if any) arising from any contracts entered into between you and us and to provide you with the information and services that you request from us relating to the projects, properties, ventures or opportunities detailed on our Sites or otherwise notified to you;</li>
            <li>to provide you with information about our other project(s), schemes (if any) and offerings (if any) that are similar to those that you have already purchased or enquired about;</li>
            <li>to provide you, or permit selected third parties to provide you, with information about our other project(s), schemes (if any) and offerings (if any) we feel may interest you;</li>
            <li>to administer our Sites and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;</li>
            <li>to improve our Sites to ensure that content is presented in the most effective manner for you and for your computer;</li>
            <li>to allow you, when required, to participate in interactive features of our service; as part of our efforts to keep our Sites safe and secure;</li>
            <li>to measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you;</li>
            <li>to make suggestions and recommendations to you and other users of our Sites about goods or services that may interest you or them;</li>
            <li>for complying with legal obligations (if any);</li>
            <li>for helping us respond to your customer service requests and support needs more efficiently.</li>
          </ul>
          <p>
            If you are an existing customer, we will only contact you by e-mail, SMS, telephone or your preferred method of contact if different, with information about our other project(s), schemes (if any) and offerings (if any) similar to those which were the subject of a previous sale or negotiations of a sale to you;
          </p>
          <p>
            If you are a new customer, and where we permit third parties to use your data, we (or they) will contact you by e-mail, SMS, telephone or your preferred method of contact if different only if you have consented to this;
          </p>

          <h2>DISCLOSURE OF YOUR INFORMATION</h2>
          <p>
            We may share your personal information with any member of Rustomjee.
          </p>
          <p>
            We may also share your information with selected third parties including, where applicable: (i) business partners, suppliers and sub-contractors (including, but not limited to, estate agents, sales agents and our professional advisors) for the performance of any contract or any potential contract we may enter into with them or you, or in relation to any ancillary requirements; (ii) advertisers and advertising networks that require the data to select and serve relevant adverts to you and others; (iii) analytics and search engine providers that assist us in the improvement and optimisation of our Sites; (iv) to third party/ies in the event we sell or buy any business or assets; (v) if Rustomjee or substantially all of its assets are acquired by a third party, your personal data will be one of the transferred assets; (vi) if we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property, or safety of Rustomjee, our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction; and (vii) as otherwise disclosed or permitted by law.
          </p>
          <p>
            We may share your non sales related information such as cookies, email address, phone number etc, to third parties. But we do not share your sales related information such as PAN Card No, credit/debit card details, preference details with the third parties.
          </p>

          <h2>WHERE WE STORE YOUR PERSONAL DATA</h2>
          <p>
            The data that we collect from you may be transferred, stored and processed by staff who work for us or for one of our suppliers or one of our group companies. Such staff may be engaged in, among other things, the fulfilment of your order or enquiry and the provision of support services. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely.
          </p>
          <p>
            We take reasonable steps to ensure that appropriate technical and organisational measures are in place to guard against any unauthorised or unlawful processing of personal data and accidental loss or destruction of, or damage to, personal data. The transmission of information via the internet and/or through any other channel/s is not completely secure and we cannot guarantee the security of your data transmitted to our sites and any transmission is at your own risk.
          </p>

          <h2>COOKIES</h2>
          <p>
            Our Sites may use cookies to distinguish you from other users of our Sites. This helps us to provide you with a good experience when you browse our Sites and also allows us to improve our Sites. By continuing to browse our Sites, you are agreeing to our use of cookies.
          </p>
          <p>
            Please note that third parties may also use cookies, over which we have no control.
          </p>

          <h2>THIRD-PARTY WEBSITES</h2>
          <p>
            Our Sites may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the privacy practices or the content of such third-party websites. We are also not liable for any loss or damage that may occur to you on account of these third-party websites. We encourage the users to read the privacy policies of all such websites on visiting the same.
          </p>

          <h2>RETENTION AND DISPOSAL OF DATA</h2>
          <p>
            We keep the data we collect about you on our systems or with third parties for as long as it is required for the purposes set out in this privacy policy and for legal or regulatory reasons. By submitting your personal data, you agree to this transfer, storing or processing. We shall take reasonable steps to delete or permanently de-identify data that is no longer needed.
          </p>

          <h2>CHANGES TO OUR PRIVACY POLICY</h2>
          <p>
            We reserve the right to update or revise this privacy policy at any time without prior notice. Any changes will be effective immediately upon posting the updated privacy policy on our website. It is your responsibility to review this privacy policy periodically for any changes. Your continued use of the services following any changes to this privacy policy will be deemed to be your acceptance of those changes.
          </p>
        </div>
      </main>
    </div>
  );
}
