import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import CategoryBlock from './CategoryBlock';
import TodayBlock from './TodayBlock';
import FreeBlock from './FreeBlock';
import BannerBlock from '../banner/BannerBlock';
import Loading from '../../common/Loading';
import vod from '../../res/video/background_vod.mp4';
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
      {/* <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="inner">Here & Hear</h1>
      </div> */}
      <div
        style={{
          width: '100%',
          height: '40rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="filter"></div>
        {/* <img
          src={
            'https://www.tabido.jp/storage/spots/2412/f1dd375c-5baf-4ef3-bfd0-ae9a6ca55cc1.jpg'
          }
          style={{ height: '50rem' }}
        ></img> */}
        <div className="ani_logo"></div>
        <div className="ani_title">
          당신이 있는 여기서
          <br />
          듣기만 하면 여행이 시작됩니다.
          <br />
          <br />
          <b>Here & Hear</b>
        </div>
        <video style={{ width: '100%' }} src={vod} muted loop autoPlay></video>
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
