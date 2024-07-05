import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="return-section font-mon py-12 px-40 bg-gray-100 flex flex-col items-center space-y-12">
      <div className="return-policy">
        <h1 className="privacy-heading text-3xl font-bold">Return Policy for LUXE TROVE</h1>
        <p className="effect-date mt-4 text-lg">Effective Date: 24th June, 2024</p>
      </div>
      <div className="policy1">
        <div className="intro">
          <h3 className="text-2xl font-semibold">Introduction</h3>
        </div>
        <div className="intro-text mt-4">
          <p className="text-lg">
            At LUXE TROVE, we strive to provide a seamless and satisfying shopping experience for our customers. This Return Policy outlines the terms and conditions under which returns and exchanges of items purchased through our platform will be processed. Please read this policy carefully before making a purchase.
          </p>
        </div>
      </div>
      <div className="info-we-collect w-full flex flex-col items-start space-y-12">
        <div className="policy1">
          <h1 className="heading-text text-2xl font-bold">Information We Collect</h1>
          <p className="info1 mt-4 text-lg">We collect several types of information to provide and improve our Service to you:</p>
        </div>
        <div className="policy1">
          <h3 className="text-2xl font-semibold">Eligibility for Returns</h3>
          <p className="personal-data-text mt-4 text-lg">To be eligible for a return, the following conditions must be met:</p>
          <ul className="list mt-4 pl-8 list-disc leading-9">
            <li>The item must be unused, in the same condition that you received it, and in its original packaging with all tags attached.</li>
            <li>The return request must be initiated within 14 days from the date of delivery.</li>
            <li>Certain items, such as undergarments, swimwear, and earrings, are not eligible for return due to hygiene reasons.</li>
          </ul>
        </div>
        <div className="policy1">
          <h3 className="text-2xl font-semibold">Non-Returnable Items</h3>
          <p className="usage-text mt-4 text-lg">Certain items are not eligible for return, including but not limited to:</p>
          <ol className="list mt-4 pl-8 list-decimal leading-9">
            <li>Customized or personalized items</li>
            <li>Gift cards</li>
            <li>Items marked as "Final Sale"</li>
          </ol>
        </div>
        <div className="policy1">
          <h3 className="text-2xl font-semibold">Refunds</h3>
          <p className="personal-data-text mt-4 text-lg">Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed as follows:</p>
          <ul className="list mt-4 pl-8 list-disc leading-9">
            <li><strong>Original Payment Method:</strong> Refunds will be credited to the original method of payment within 10 business days.</li>
            <li><strong>Store Credit:</strong> Alternatively, you may choose to receive store credit for future purchases on LUXE TROVE.</li>
          </ul>
          <p className="personal-data-text mt-4 text-lg">Please note that original shipping costs are non-refundable.</p>
        </div>
        <div className="policy1">
          <h3 className="text-2xl font-semibold">Exchanges</h3>
          <p className="intro-text mt-4 text-lg">
            If you wish to exchange an item for a different size, color, or style, please follow the return process to send back the original item. Once we receive the returned item, we will issue a store credit or refund, and you can place a new order for the desired item.
          </p>
        </div>
        <div className="policy1">
          <h3 className="text-2xl font-semibold">Damaged or Defective Items</h3>
          <p className="intro-text mt-4 text-lg">
            If you receive a damaged or defective item, please contact our customer support team within 48 hours of delivery. Provide your order number, a description of the issue, and photographs of the damaged or defective item. We will work with you to resolve the issue promptly, including offering a replacement or a full refund.
          </p>
        </div>
        <div className="policy1">
          <h3 className="text-2xl font-semibold">International Returns</h3>
          <p className="intro-text mt-4 text-lg">
            For international orders, the return process may vary. Please contact our customer support team for specific instructions. Note that international return shipping costs are the responsibility of the customer, and any customs duties or taxes paid are non-refundable.
          </p>
        </div>
        <div className="policy1">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="personal-data-text mt-4 text-lg">If you have any questions about our Return Policy, please contact us:</p>
          <ul className="list mt-4 pl-8 list-disc leading-9">
            <li><strong>Email:</strong> luxetrove@gmail.com</li>
            <li><strong>Phone:</strong> +27 900 236 875</li>
            <li><strong>Mailing Address:</strong> Luxe Trove Lane.</li>
          </ul>
        </div>
        <div className="policy1">
          <h3 className="text-2xl font-semibold">Changes to This Return Policy</h3>
          <p className="intro-text mt-4 text-lg">
            We reserve the right to update or modify this Return Policy at any time. Any changes will be posted on this page with an updated effective date. Please review this policy periodically for any changes.
          </p>
          <p className="intro-text mt-4 text-lg">
            Thank you for shopping with LUXE TROVE. We appreciate your business and are committed to providing you with the best possible shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
