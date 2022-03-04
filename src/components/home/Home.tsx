import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import CategoryBlock from './CategoryBlock';
import TodayBlock from './TodayBlock';
import FreeBlock from './FreeBlock';
import BannerBlock from '../banner/BannerBlock';
import Loading from '../../common/Loading';
import vod from '../../res/video/background_vod2.mp4';
const Home = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout();
    };
  }, []);

  useEffect(() => {
    const poplogin = document.getElementById('popup_login');
    if (poplogin?.classList.contains('pop')) {
      poplogin.classList.remove('pop');
    }
  }, [history]);

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
          당신이 있는 여기서
          <br />
          듣기만 하면 여행이 시작됩니다.
          <br />
          <br />
          <b>Here & Hear</b>
        </div>
        <video
          style={{ width: '100%' }}
          src={
            'https://firebasestorage.googleapis.com/v0/b/project-ver2-9966b.appspot.com/o/video%2Fbackground_vod2.mp4?alt=media&token=a2d15842-c461-43e4-b7b4-be232e1e6c31'
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
