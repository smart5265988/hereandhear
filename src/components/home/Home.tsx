import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import CategoryBlock from './CategoryBlock';
import TodayBlock from './TodayBlock';
import FreeBlock from './FreeBlock';
import BannerBlock from '../banner/BannerBlock';
import Loading from '../../common/Loading';

const Home = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      setLoading(true);
    };
  }, []);

  //로그인 팝업이 홈에 왔을때 제거 될 수있게 처리
  useEffect(() => {
    const poplogin = document.getElementById('popup_login');
    if (poplogin?.classList.contains('pop')) {
      poplogin.classList.remove('pop');
    }
  }, [history]);

  //로딩중
  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="content">
      <div
        style={{
          width: '100%',
          height: '40rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="filter"></div>

        <div className="ani_logo"></div>
        <div className="ani_title">
          오늘 하루도 지친 당신에게
          <br />
          잠깐 일상을 벗어나는건 어떠세요?
          <br />
          <br />
          <b>Here & Hear</b>
        </div>
        <video
          style={{ width: '100%' }}
          src={
            'https://firebasestorage.googleapis.com/v0/b/project-ver2-9966b.appspot.com/o/video%2Fbackground_vod4.mp4?alt=media&token=a2d15842-c461-43e4-b7b4-be232e1e6c31'
          }
          muted
          loop
          autoPlay
        ></video>
      </div>
      <Route render={() => <CategoryBlock />} />
      <Route render={() => <FreeBlock />} />
      <Route render={() => <BannerBlock bannerType="image" />} />
      <Route render={() => <TodayBlock />} />
      <Route render={() => <BannerBlock bannerType="text" />} />
    </div>
  );
};

export default Home;
