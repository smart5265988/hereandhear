import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoryBlock from './CategoryBlock';
import TodayBlock from './TodayBlock';
import FreeBlock from './FreeBlock';

const Home = () => {
  return (
    <div className="content">
      <div className="top_logo" style={{ marginTop: '0.9333rem' }}>
        <h1 className="ic_logo_lgu inner">Here & Hera</h1>
      </div>
      <Route render={(props) => <CategoryBlock />} />
      <Route render={(props) => <FreeBlock />} />
      <Route render={(props) => <TodayBlock />} />
      <Route render={(props) => <FreeBlock />} />
      <Route render={(props) => <TodayBlock />} />
    </div>
  );
};

export default Home;
