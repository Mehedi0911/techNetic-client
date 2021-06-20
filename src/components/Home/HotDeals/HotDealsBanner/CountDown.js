import React from 'react';
import Countdown from 'react-countdown';
const CountDown = () => {
    const time = 10000000;
    const Completionist = () => <span>No Deals Available Right Now</span>;
    const renderer = ({ hours, minutes, seconds, completed, }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <div className="d-flex text-wrap">
              
              <div>
              <span style={{background:'#4D4476', padding:'1rem 1.5rem', marginRight:'1rem', color:'white', fontFamily:'san-serif', fontSize:'1.5rem'}}>{hours}</span> <br />
              <p style={{marginLeft:".4rem", marginTop:'1rem'}}>Hours</p>
              </div>
              <div>
              <span style={{background:'#4D4476', padding:'1rem 1.5rem', marginRight:'1rem', color:'white', fontFamily:'san-serif', fontSize:'1.5rem'}}>{minutes}</span> <br />
              <p style={{marginLeft:".2rem", marginTop:'1rem'}}>Minutes</p>
              </div>
              <div>
              <span style={{background:'#4D4476', padding:'1rem 1.5rem', marginRight:'1rem', color:'white', fontFamily:'san-serif', fontSize:'1.5rem'}}>{seconds}</span> <br />
              <p style={{marginLeft:".2rem", marginTop:'1rem'}}>Seconds</p>
              </div>
              
              </div>;
        }
      };
    return (
        <div>
            <Countdown
    date={Date.now() + time}
    renderer={renderer}
  />
        </div>
    );
};

export default CountDown;