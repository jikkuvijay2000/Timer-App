import React, { useEffect, useState } from 'react';

function Counter() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [intervalID, setIntervalID] = useState(null);

  useEffect(() => {

    
    const id = setInterval(() => {
      setTime(prevTime => {
        let newSeconds = prevTime.seconds + 1;
        let newMinutes = prevTime.minutes;
        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes++;
        }
        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    setIntervalID(id); //we can take value from  intervalID, can be used for resume function

    return () => clearInterval(id);
  }, []);

  const pause = () => {
    clearInterval(intervalID);
  };

  const reset = () => {
    setTime({ minutes: 0, seconds: 0 });
  };


  const resume = () => {
    const id = setInterval(() => {
      setTime(prevTime => {
        let newSeconds = prevTime.seconds + 1;
        let newMinutes = prevTime.minutes;
        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes++;
        }
        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    setIntervalID(id);
  };

  return (
    <div>
      <div className="container bg- text-center w-50 mt-5">
        <h1 style={{ fontSize: '48px' }}><b>{time.minutes < 10 ? '0' + time.minutes : time.minutes}:{time.seconds < 10 ? '0' + time.seconds : time.seconds}</b></h1>
        <div className="d-flex justify-content-center mt-5">
          <button onClick={resume} className='btn btn-success'>Resume</button>
          <button onClick={pause} className='btn btn-primary ms-4'>Pause</button>
          <button onClick={reset} className='btn btn-danger ms-4'>Reset</button>
        </div>
        <div className="row mt-3">
          <p><i className=''>NB: The timer automatically starts, you dont have to enable it</i></p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
