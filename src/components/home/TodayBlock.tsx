import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import img from '../../res/images/sapporo.jpg';

const TodayBlock = () => {
  const history = useHistory();
  const [isLogin, setLogin] = useState(true);

  const goPlayer = (category: string, id: string) => {
    if (isLogin === false) {
      console.log('today_block ck');
      const poplogin = document.getElementById('popup_login');
      poplogin?.classList.add('pop');
    } else {
      history.push(`/player/${category}/${id}`);
    }
  };
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
            onClick={() => goPlayer('city', '1')}
          >
            <div className="block_filter"></div>
            {isLogin === false ? <div className="contents_lock"></div> : <></>}
            <div className="free_category">City</div>
            <div className="free_title">삿포로 청의 호수</div>
          </li>

          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
            onClick={() => goPlayer('city', '1')}
          >
            <div className="block_filter"></div>
            {isLogin === false ? <div className="contents_lock"></div> : <></>}
            <div className="free_category">City</div>
            <div className="free_title">삿포로 청의 호수</div>
          </li>

          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
            onClick={() => goPlayer('city', '1')}
          >
            <div className="block_filter"></div>
            {isLogin === false ? <div className="contents_lock"></div> : <></>}
            <div className="free_category">City</div>
            <div className="free_title">삿포로 청의 호수</div>
          </li>

          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
            onClick={() => goPlayer('city', '1')}
          >
            <div className="block_filter"></div>
            {isLogin === false ? <div className="contents_lock"></div> : <></>}
            <div className="free_category">City</div>
            <div className="free_title">삿포로 청의 호수</div>
          </li>

          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
            onClick={() => goPlayer('city', '1')}
          >
            <div className="block_filter"></div>
            {isLogin === false ? <div className="contents_lock"></div> : <></>}
            <div className="free_category">City</div>
            <div className="free_title">삿포로 청의 호수</div>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default TodayBlock;
