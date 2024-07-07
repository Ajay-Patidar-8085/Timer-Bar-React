import React, { useEffect, useState } from 'react';
import './TimerBar.css'; // Move the CSS to an external file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const TimerBar = ({ initialTime, backgroundColor, text }) => {
  const [time, setTime] = useState(initialTime);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const countDownDate = new Date().getTime() + initialTime * 60 * 1000; // initialTime is in minutes

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setIsExpired(true);
      } else {
        setTime({
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTime]);

  if (isExpired) return null;

  return (
    <div className="timer-bar" style={{ background: backgroundColor }}>
      <div className="offer">
        <FontAwesomeIcon icon={faStopwatch} /> {text}
      </div>
      <div className="timer">
        Ends in: {time.hours}:{time.minutes}:{time.seconds}
      </div>
      <div className="discount">GET 10% OFF &nbsp;&nbsp; Use Code: EXAMSTART</div>
    </div>
  );
};

export default TimerBar;
