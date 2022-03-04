import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, NavLink } from 'react-router-dom';
import City from './City';
import Remeber from './Remember';
import Space from './Space';
import Nature from './Nature';
import Loading from '../../common/Loading';
import { SEESION } from '../../const';
const Category = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    console.log(JSON.parse(ck));
    if (ck !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  useEffect(() => {
    const poplogin = document.getElementById('popup_login');
    if (poplogin?.classList.contains('pop') && isLogin === true) {
      poplogin.classList.remove('pop');
    }
  }, [isLogin, history]);

  useEffect(() => {
    if (isLogin === false) {
      const poplogin = document.getElementById('popup_login');
      poplogin?.classList.add('pop');
    }
  }, [isLogin, history]);

  useEffect(() => {
    const data = history.location.pathname.split('/');
    const category = data[2];
    console.log(category);
    if (category === undefined) {
      history.push('/category/city');
    }
  }, [history]);

  if (isLoading === true) {
    return <Loading />;
  }
  return (
    <div className="sec_wrapper">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="categoryTitle inner">Category</h1>
      </div>
      <div className="inner" style={{ marginBottom: '0.9333rem' }}>
        <div className="categoryNav">
          <NavLink to="/category/city">city</NavLink>
          <NavLink to="/category/remember">remember</NavLink>
          <NavLink to="/category/space">space</NavLink>
          <NavLink to="/category/nature">nature</NavLink>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path="/category/city" component={City} />
          <Route exact path="/category/space" component={Space} />
          <Route exact path="/category/nature" component={Nature} />
          <Route exact path="/category/remember" component={Remeber} />
        </Switch>
      </div>
    </div>
  );
};

export default Category;
