import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      // Dynamically inject Calendly script when component mounts
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      document.body.appendChild(script);

      script.onload = () => {
        setScriptLoaded(true);
      };

      return () => {
        // Clean up script when component unmounts
        document.body.removeChild(script);
      };
    }
  }, [scriptLoaded]);

  return (
    <div>
      {/* Embed Calendly widget */}
      <div
        className="calendly-inline-widget container-lg"
        data-url="https://calendly.com/reve-esthetique-ph?hide_gdpr_banner=1&primary_color=a87c18"
        style={{ minWidth: '320px', height: '98vh' }}
      />
    </div>
  );
};

export default Calendar;
