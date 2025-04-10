import React from 'react';

const PaymentMethodsSlider = () => {
  // Array of payment method data
  const paymentMethods = [
    { id: 1, imgSrc: 'https://www.globalpayapp.net/img/visa%201.svg', alt: 'Visa' },
    { id: 2, imgSrc: 'https://www.globalpayapp.net/img/logo-master%201.svg', alt: 'Mastercard' },
    { id: 3, imgSrc: 'https://www.globalpayapp.net/img/visa%201.svg', alt: 'Visa' },
    { id: 4, imgSrc: 'https://www.globalpayapp.net/img/logo-master%201.svg', alt: 'Mastercard' },
  ];

  return (
      <div 
        className="flex gap-4 justify-evenly items-center pb-7" 
      >
        {paymentMethods.map((method, index) => (
          <div 
            key={method.id}
            className="flex-shrink-0 mx-4 "
            role="listitem"
            aria-label={`${index + 1} / ${paymentMethods.length}`}
          >
            <img 
              src={method.imgSrc} 
              alt={method.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
  );
};

export default PaymentMethodsSlider;