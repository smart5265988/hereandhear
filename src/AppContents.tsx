import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './common/Loading';

const Home = React.lazy(() => import('./components/home/Home'));
const My = React.lazy(() => import('./components/my/My'));
const PlayList = React.lazy(() => import('./components/playlist/PlayList'));
const Category = React.lazy(() => import('./components/category/Category'));
const Footer = React.lazy(() => import('./components/footer/Footer'));
const LoginPopUp = React.lazy(() => import('./components/popup/LoginPopup'));
const NetworkErrorPopup = React.lazy(
  () => import('./components/popup/NetworkErrorPopup'),
);
const PlayerPopup = React.lazy(() => import('./components/popup/PlayerPopup'));
const Player = React.lazy(() => import('./components/player/Player'));
const LoginError = React.lazy(() => import('./components/popup/LoginError'));
const SignUpError = React.lazy(() => import('./components/popup/SignUpError'));
const AddPopup = React.lazy(() => import('./components/popup/AddPopup'));

function AppContents() {
  return (
    <div id="wrap" className="main">
      <Suspense fallback={<Loading />}>
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
          <Route component={LoginError} />
          <Route component={LoginPopUp} />
          <Route component={NetworkErrorPopup} />
          <Route component={SignUpError} />
          <Route component={PlayerPopup} />
          <Route component={AddPopup} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default AppContents;
