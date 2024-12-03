import React, { useState, useEffect } from "react";

const Toast = ({ message, title, teamColor, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const alertClass = teamColor;

  return (
    <>
      {isVisible && (
        <>
          <div className="toast toast-top toast-end">
            <div className={`alert ${alertClass}`}>
              {title && <strong className="font-semibold">{title}</strong>}
              <span className="ml-2">{message}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Toast;
