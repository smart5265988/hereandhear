import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import MyFaq from './MyFaq';
import MyTerms from './MyTerms';
import MyNotice from './MyNotice';
import MyLogin from './MyLogin';
import MyPrivacy from './MyPrivacy';
import MyContetent from './MyContnent';
import Loading from '../../common/Loading';

const My = () => {
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  //   return () => {
  //     clearTimeout();
  //   };
  // }, []);

  // if (isLoading === true) {
  //   return <Loading />;
  // }

  return (
    <div className="content">
      <Switch>
        <Route path="/my/myLogin" component={MyLogin} />
        <Route path="/my/myFaq" component={MyFaq} />
        <Route path="/my/myNotice" component={MyNotice} />
        <Route path="/my/myTerms" component={MyTerms} />
        <Route path="/my/myPrivacy" component={MyPrivacy} />
        <Route path="/my" component={MyContetent} />
      </Switch>
    </div>
  );
};

export default My;
