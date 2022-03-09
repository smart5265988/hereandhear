import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SEESION } from '../../const';
import { setLoginPop } from '../../redux/reducers/popup';
import { database } from '../../firebase';
import { ref, get, child } from 'firebase/database';
import Loading from '../../common/Loading';
import CategorySub from './CategorySub';

interface Menu {
  menu: string;
}

const Category = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  //세션에 저장된 값으로 로그인 여부판단
  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    if (ck !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const dbRef = ref(database);
    get(child(dbRef, 'category')).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    });
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

  if (isLoading === true) {
    return <Loading />;
  }
  return (
    <div className="sec_wrapper">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="categoryTitle inner">Category</h1>
      </div>

      <div className="inner" style={{ marginBottom: '0.9333rem' }}>
        <div className="category_nav">
          {data.map((item: Menu, index) => {
            return (
              <NavLink to={`/category/${item.menu}`} key={`menu${index}`}>
                {item.menu}
              </NavLink>
            );
          })}
        </div>
      </div>
      {isLogin === true ? (
        <div>
          <Switch>
            {data.map((item: Menu, index) => {
              return (
                <Route
                  key={`category_${item.menu}`}
                  exact
                  path={`/category/${item.menu}`}
                  render={() => <CategorySub category={item.menu} />}
                />
              );
            })}
          </Switch>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Category;
