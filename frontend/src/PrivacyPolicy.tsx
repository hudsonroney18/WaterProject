import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-3">
          This Privacy Policy describes how we collect, use, process, and
          disclose your information, including personal information, in
          conjunction with your access to and use of our application.
        </p>
        <p className="mb-3">
          When you use our services, you trust us with your information. We are
          committed to keeping that trust. This starts with helping you
          understand our privacy practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Collect
        </h2>
        <p className="mb-3">
          We collect various types of information, including:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Information you provide to us directly</li>
          <li className="mb-2">
            Information we automatically collect from your use of the app
          </li>
          <li className="mb-2">Information we collect from third parties</li>
        </ul>
        <p className="mb-3">
          This may include personal information such as name, email, device
          information, and usage data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Use Your Information
        </h2>
        <p className="mb-3">
          We use the information we collect for purposes including:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">
            Providing, improving, and developing our services
          </li>
          <li className="mb-2">Communicating with you</li>
          <li className="mb-2">Ensuring security and preventing fraud</li>
          <li className="mb-2">Analyzing usage patterns and trends</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Sharing and Disclosure
        </h2>
        <p className="mb-3">We may share your information with:</p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">
            Service providers helping us provide services
          </li>
          <li className="mb-2">Law enforcement when required by law</li>
          <li className="mb-2">Other parties with your consent</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-3">
          Depending on your location, you may have rights regarding your
          personal data, including:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Access to your personal information</li>
          <li className="mb-2">Correction of inaccurate data</li>
          <li className="mb-2">Deletion of your data</li>
          <li className="mb-2">Objection to processing</li>
          <li className="mb-2">Data portability</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
        <p className="mb-3">
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized or unlawful
          processing, accidental loss, destruction, or damage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
        <p className="mb-3">
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
        <p className="mb-3">
          Our services are not directed to individuals under the age of 13. We
          do not knowingly collect personal information from children under 13.
          If we become aware that a child under 13 has provided us with personal
          information, we will take steps to delete such information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          9. Changes to This Policy
        </h2>
        <p className="mb-3">
          We may modify this Privacy Policy from time to time. If we make
          material changes to this policy, we will notify you by updating the
          date of this Privacy Policy and providing additional notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-3">
          If you have any questions about this Privacy Policy or our practices,
          please contact us at: [Your Contact Information]
        </p>
      </section>

      <div className="text-sm text-gray-600 mt-10">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
