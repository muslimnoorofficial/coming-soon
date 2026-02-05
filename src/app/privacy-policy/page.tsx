"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="
        flex flex-col overflow-hidden
        min-h-screen px-6 py-10
        bg-gray-50 dark:bg-gray-900
        relative items-center justify-start
      "
    >
      {/* Heading */}
      <h1
        className="
          mb-4 text-3xl font-extrabold text-gray-900
          dark:text-white sm:text-4xl
          text-center
        "
      >
        Privacy Policy
      </h1>
      <p
        className="
          max-w-3xl mx-auto mb-8 text-center
          text-gray-600 dark:text-gray-400
        "
      >
        Effective Date: February 5, 2026
      </p>

      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
        <p>
          Muslim Noor and the Islamic Society of Norman (ISN) value your privacy.
          This Privacy Policy explains how we collect, use, and protect information
          when you use our mobile app and website.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Email Address:</strong> When you subscribe to launch notifications,
            we collect your email to notify you when the app launches. We do not share
            your email with third parties.
          </li>
          <li>
            <strong>Location Data:</strong> Our app may request your location to calculate
            accurate prayer times and Qibla direction. Location is used only within the app
            and is not shared externally.
          </li>
          <li>
            <strong>Push Notifications:</strong> Used for prayer reminders, event alerts,
            and announcements. You can turn off notifications at any time in device settings.
          </li>
          <li>
            <strong>Payment Information (Future Donations):</strong> Payments are processed
            through Stripe on a secure external webpage. We do not store credit card information
            within the app.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">2. How We Use Your Information</h2>
        <p>
          We use the information to notify you about app launch, updates, community events,
          provide accurate prayer times and Qibla direction, communicate important announcements,
          and process donations securely via Stripe (external site).
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or rent your personal information. We only share your data
          with service providers that help operate the app (e.g., push notifications, email, Stripe),
          strictly for the purposes described above.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Data Security</h2>
        <p>
          We take reasonable precautions to protect your information. Access is limited to authorized personnel only.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Children’s Privacy</h2>
        <p>
          Our app is suitable for all ages. We do not knowingly collect personal information
          from children under 13. If we discover such data, we will delete it promptly.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Your Choices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Email Notifications: You can unsubscribe at any time.</li>
          <li>Location: You can disable location access in device settings.</li>
          <li>Push Notifications: You can turn off notifications in device settings.</li>
          <li>Donations: You may choose not to donate or use Stripe external payments.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
        </p>

        <h2 className="text-xl font-semibold mt-4">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email: <a href="mailto:contact@muslimnoor.com" className="text-emerald-600 hover:underline">contact@muslimnoor.com</a></li>
          <li>Phone: +1 405‑981‑8292</li>
          <li>Website: <Link href="https://muslimnoor.com" className="text-emerald-600 hover:underline">https://muslimnoor.com</Link></li>
        </ul>
      </div>

      {/* Footer */}
      <p
        className="
          text-sm text-center text-gray-500
          absolute bottom-6 dark:text-gray-400
        "
      >
        &copy; {currentYear} Muslim Noor. All rights reserved.
      </p>
    </div>
  );
}
