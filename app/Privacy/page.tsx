import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Privacy = () => {
  return (
    <>

    <Header/>
      <section className='mt-40 mx-11 mb-7 text-black'>
    <h2 className='text-6xl'>Privacy Policy</h2>
    <p className='mt-2 text-xl'>
        At <strong>MensXP</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website. By using our services, you agree to the collection and use of information in accordance with this policy.
    </p>

    <h3 className='text-3xl font-bold mt-2'>1. Information We Collect</h3>
    <p className='text-xl'>
        We collect both personally identifiable information (PII) and non-personally identifiable information (Non-PII) to enhance your experience. The types of data we collect include:
    </p>
    <ul className='text-xl'>
        <li>Name, email address, phone number, and contact details.</li>
        <li>Account credentials such as usernames and passwords.</li>
        <li>Browsing behavior, IP address, device information, and location data.</li>
        <li>Transaction history and payment details (if applicable).</li>
    </ul>

    <h3 className='text-3xl font-bold mt-2'>2. How We Use Your Information</h3>
    <p className='text-xl'>
        The information we collect is used to:
    </p>
    <ul className='text-xl'>
        <li>Provide, maintain, and improve our services.</li>
        <li>Personalize your experience and recommend relevant content.</li>
        <li>Communicate with you, including sending promotional materials.</li>
        <li>Ensure security and prevent fraudulent activities.</li>
        <li>Analyze website traffic and optimize performance.</li>
    </ul>

    <h3 className='text-3xl font-bold mt-2'>3. Sharing and Disclosure of Information</h3>
    <p className='text-xl'>
        We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
    </p>
    <ul className='text-xl'>
        <li>Trusted third-party service providers for analytics, payment processing, and advertising.</li>
        <li>Law enforcement or regulatory authorities when required by law.</li>
        <li>Business partners in case of mergers, acquisitions, or restructuring.</li>
    </ul>

    <h3 className='text-3xl font-bold mt-2'>4. Data Security</h3>
    <p className='text-xl'>
        We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we encourage users to take precautions while sharing personal information online.
    </p>

    <h3 className='text-xl'> className='text-3xl font-bold mt-2'5. Your Rights and Choices</h3>
    <p className='text-xl'>
        You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time. To exercise these rights, please contact our support team.
    </p>

    <h3 className='text-3xl font-bold mt-2'>6. Cookies and Tracking Technologies</h3>
    <p className='text-xl'>
        Our website uses cookies and similar tracking technologies to enhance user experience. You can manage cookie preferences through your browser settings.
    </p>

    <h3 className='text-3xl font-bold mt-2'>7. Changes to This Privacy Policy</h3>
    <p className='text-xl'>
        We may update this Privacy Policy periodically to reflect changes in our practices. We encourage you to review this page regularly for updates.
    </p>

    <h3 className='text-3xl font-bold mt-2'>8. Contact Us</h3>
    <p className='text-xl'>
        If you have any questions about this Privacy Policy or your personal data, please contact us at:
    </p>
    <p className='text-xl'>
        Email: <a href="mailto:support@mensxp.com">support@mensxp.com</a><br/>
        Address: MensXP, Times Internet Limited, India
    </p>

    <p className='text-xl'>
        For more details, please read our full <a href="https://www.mensxp.com/privacy-policy.html">Privacy Policy</a>.
    </p>
</section>

<Footer/>
    </>
  )
}

export default Privacy
