import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, NavLink } from 'react-router-dom';
import City from './City';
import Remember from './Remember';
import Space from './Space';
import Nature from './Nature';
import { useDispatch } from 'react-redux';
import { SEESION } from '../../const';
import { setLoginPop } from '../../redux/reducers/popup';

const Category = () => {
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);
  const dispatch = useDispatch();

  //세션에 저장된 값으로 로그인 여부판단
  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    if (ck !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  //로그인 여부에따라 로그인팝업창 노출여부
  useEffect(() => {
    if (isLogin === true) {
      dispatch(setLoginPop(false));
    }
    if (isLogin === false) {
      dispatch(setLoginPop(true));
    }
  }, [isLogin, history]);

  //category로 라우팅시 city로 가게 설정 (기본값)
  useEffect(() => {
    const data = history.location.pathname.split('/');
    const category = data[2];
    if (category === undefined) {
      history.push('/category/city');
    }
  }, [history]);

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
      {isLogin === true ? (
        <div>
          <Switch>
            <Route exact path="/category/city" component={City} />
            <Route exact path="/category/space" component={Space} />
            <Route exact path="/category/nature" component={Nature} />
            <Route exact path="/category/remember" component={Remember} />
          </Switch>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Category;
