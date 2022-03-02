import React from 'react';
import img from '../../res/images/sapporo.jpg';

const TodayBlock = () => {
  return (
    // <div className="content today">
    <div className="sec_wrapper">
      <div className="title_hd">
        <span className="sec_title inner">오늘의 추천</span>
      </div>

      <div className="home_scroll inner">
        <ul>
          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            1
          </li>
          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            1
          </li>
          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            1
          </li>
          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            1
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default TodayBlock;
