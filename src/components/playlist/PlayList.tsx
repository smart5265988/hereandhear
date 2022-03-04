import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../common/Loading';
import { SEESION } from '../../const';

const PlayList = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [isLogin, setLogin] = useState(true);

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
    const ck: any = sessionStorage.getItem(SEESION);
    console.log(JSON.parse(ck));
    if (ck !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  useEffect(() => {
    if (isLogin === false) {
      const poplogin = document.getElementById('popup_login');
      poplogin?.classList.add('pop');
    }
  }, [isLogin, history]);

  useEffect(() => {
    const poplogin = document.getElementById('popup_login');
    if (poplogin?.classList.contains('pop') && isLogin === true) {
      poplogin.classList.remove('pop');
    }
  }, [isLogin, history]);

  const goPage = () => {
    history.push('./category/city');
  };

  if (isLoading === true) {
    return <Loading />;
  }
  return (
    <div className="sec_wrapper">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="categoryTitle inner">BookMark</h1>
      </div>
      {list.length === 0 ? (
        <div className="nodata inner">
          저장된 리스트가 없습니다.
          <button onClick={goPage}>Category로 이동</button>
        </div>
      ) : (
        <div>list</div>
      )}
    </div>
  );
};

export default PlayList;
