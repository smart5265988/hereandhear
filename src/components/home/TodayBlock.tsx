import React from 'react';

const TodayBlock = () => {
  return (
          <div className="content today">
            <div className="sec_wrapper popular_wrap">
             <div className="title_hd">
              <span className="sec_title inner">오늘의 추천</span>
            </div>

            <div className="tody_scroll inner">
                    <ul>
                        <li style={{height:'23rem'}}>1</li>
                        <li style={{height:'23rem'}}>1</li>
                        <li style={{height:'23rem'}}>1</li>
                        <li style={{height:'23rem'}}>1</li>
                    </ul>
            </div>
          </div>
        </div>
  );
};

export default TodayBlock;
