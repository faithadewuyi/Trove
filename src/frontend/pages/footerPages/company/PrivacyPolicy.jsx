import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-section py-12 px-40 bg-gray-100 font-mon flex flex-col items-center space-y-12">
      <div className="privacy-policy">
        <h1 className="privacy-heading text-3xl font-bold">Privacy Policy for LUXE TROVE</h1>
        <p className="effect-date mt-4 text-lg">Effective Date: 24th June, 2024</p>
      </div>
      <div className="policy1">
        <div className="intro">
          <h3 className="text-2xl font-semibold">Introduction</h3>
        </div>
        <div className="intro-text mt-4">
          <p className="text-lg">
            Welcome to LUXE TROVE! We value your privacy and are committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            use our mobile application and website (collectively, the "Service"). Please read this policy
            carefully to understand our views and practices regarding your personal data and how we will treat it.
          </p>
        </div>
      </div>
      <div className="info-we-collect w-full flex flex-col items-start space-y-12">
        <div className="heading-container">
          <h1 className="text-2xl font-bold">Information We Collect</h1>
          <p className="info1 mt-4 text-lg">We collect several types of information to provide and improve our Service to you:</p>
        </div>
        <div className="sub-heading w-full flex flex-col items-start space-y-12">
          <div>
            <h3 className="text-2xl font-semibold">Personal Data</h3>
            <p className="mt-4 text-lg">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:</p>
            <ul className="list mt-10 pl-8 list-disc leading-8">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Payment information</li>
              <li>Profile picture</li>
              <li>Social media profile links</li>
            </ul>
          </div>
          <div className="usage-container">
            <h3 className="text-2xl font-semibold">Usage Data</h3>
            <p className="usage-text mt-4 text-lg">We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your device's Internet Protocol (IP) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>
          </div>
          <div className="usage-container">
            <h3 className="text-2xl font-semibold">Tracking & Cookies Data</h3>
            <p className="usage-text mt-4 text-lg">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
          </div>
          <div className="usage-container1">
            <h3 className="text-2xl font-semibold">How We Use Your Information</h3>
            <p className="personal-data-text mt-4 text-lg">LUXE TROVE uses the collected data for various purposes:</p>
            <ul className="list mt-4 pl-8 list-disc leading-9">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
