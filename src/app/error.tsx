"use client";

import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <html>
      <body>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
