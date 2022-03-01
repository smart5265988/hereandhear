import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoryBlock from './CategoryBlock';
import TodayBlock from './TodayBlock';
import FreeBlock from './FreeBlock';
import BannerBlock from '../banner/BannerBlock';
const Home = () => {
  return (
    <div className="content">
      <div
        className="top_logo"
        style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}
      >
        <h1 className="ic_logo_lgu inner">Here & Hear</h1>
      </div>
      <Route render={(props) => <CategoryBlock />} />
      <Route render={(props) => <FreeBlock />} />
      <Route component={BannerBlock}></Route>
      <Route render={(props) => <TodayBlock />} />
      <Route render={(props) => <TodayBlock />} />
      <Route component={BannerBlock}></Route>
    </div>
  );
};

export default Home;
