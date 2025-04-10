import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* This container centers all content with max-width and padding */}
      <div className="mx-auto max-w-7xl">
        {/* This centers content vertically and horizontally */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;