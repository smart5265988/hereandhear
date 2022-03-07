import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SEESION, version } from '../../const';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setPlayerPop } from '../../redux/reducers/popup';

const MyContent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState(false);

  const goPage = (page: string) => {
    history.push(`/my/${page}`);
  };

  const logout = async () => {
    setLogin(false);
    await signOut(auth);
    dispatch(setPlayerPop(false, false));
    window.location.href = 'http://localhost:3000/home';
  };

  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    // console.log(JSON.parse(ck));
    if (ck !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <div className="content my">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="myTitle inner">Setting</h1>
      </div>
      <div className="sec_wrapper">
        <div className="inner">
          {isLogin === false ? (
            <div
              className="login inner"
              onClick={() => {
                goPage('myLogin');
              }}
            >
              <div className="login_filter"></div>
              <span>로그인</span>
              <span></span>
            </div>
          ) : (
            <div className="login out inner" onClick={logout}>
              <div className="login_filter"></div>
              <span>로그아웃</span>
              <span></span>
            </div>
          )}

          <div
            className="myblock inner"
            onClick={() => {
              goPage('myNotice');
            }}
          >
            <span>공지사항</span>
            <span></span>
          </div>
          <div
            className="myblock inner"
            onClick={() => {
              goPage('myFaq');
            }}
          >
            <span>자주하는 질문</span>
            <span></span>
          </div>
          <div
            className="myblock inner"
            onClick={() => {
              goPage('myTerms');
            }}
          >
            <span>이용약관</span>
            <span></span>
          </div>
          <div
            className="myblock inner"
            onClick={() => {
              goPage('myPrivacy');
            }}
          >
            <span>개인정보 처리방침</span>
            <span></span>
          </div>
          <div className="myblock inner">
            <span>버전정보</span>
            <div
              style={{
                opacity: '0.6',
              }}
            >
              {version}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContent;
