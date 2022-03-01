import React, { useEffect, Suspense, useState, useCallback } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

const Home = React.lazy(() => import('./components/home/Home'));
const My = React.lazy(() => import('./components/my/My'));
const PlayList = React.lazy(() => import('./components/playlist/PlayList'));
const Category = React.lazy(() => import('./components/category/Category'));
const Footer = React.lazy(() => import('./components/footer/Footer'));
const DeeplinkPopup = React.lazy(
  () => import('./components/main/DeeplinkPopup'),
);
const Intro = React.lazy(() => import('./components/Intro'));
const Player = React.lazy(() => import('./components/player/Player'));

function AppContents() {
  return (
    <div id="wrap" className="main">
      <Suspense fallback={<div className="loading"></div>}>
        <ErrorBoundary>
          <div id="container">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/my" component={My} />
              <Route path="/category" component={Category} />
              <Route path="/player" component={Player} />
              <Route path="/player/:category/:id" component={Player} />
              <Route path="/playlist" component={PlayList} />
              <Redirect to="/home" />
            </Switch>
          </div>

          <div id="footer">
            <Route component={Footer} />
          </div>
          {/* <Route component={Intro} /> */}
          {/* <Route component={DeeplinkPopup} /> */}
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default AppContents;
