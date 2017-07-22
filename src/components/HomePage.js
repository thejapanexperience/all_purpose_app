import React from 'react';
import {Link} from 'react-router';
import MiniProject from './MiniProject';

const HomePage = () => {
  return (
    <div>
      <div className="backgroundImage"/>
      <div className='mainContainer'>

        <div className="section0">
          <div className="navBox">
            <div className="nav1">
              <div className="nav1Text">
                richardmands.com
              </div>
              <div className="nav1Text">
                | Technical Demonstration
              </div>
            </div>
            <div className="nav2" />
            <div className="nav3">
              <div className="nav3Text">
                {/* Coding */}
              </div>
              <div className="nav3Text">
                {/* My Work */}
              </div>
            </div>
            <div className="nav4">
              <div className="nav4Text">
                {/* Skills */}
              </div>
              <div className="nav4Text">
                {/* Resume */}
              </div>
            </div>
            <div className="nav5"></div>
            <div className="nav6" />
          </div>
        </div>

        <MiniProject />

      </div>
    </div>
  );

};

export default HomePage;
