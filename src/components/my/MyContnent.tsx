import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SEESION, version } from '../../const';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const MyContent = () => {
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);

  const goPage = (page: string) => {
    if (page === 'login') {
      history.push('/my/myLogin');
    } else if (page === 'notice') {
      history.push('/my/myNotice');
    } else if (page === 'faq') {
      history.push('/my/myFaq');
    } else if (page === 'term') {
      history.push('/my/myTerms');
    } else if (page === 'privacy') {
      history.push('/my/myPrivacy');
    }
  };

  const logout = async () => {
    setLogin(false);
    await signOut(auth);
    history.push('/home');
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
                goPage('login');
              }}
            >
              <span>로그인</span>
              <span></span>
            </div>
          ) : (
            <div className="login out inner" onClick={logout}>
              <span>로그아웃</span>
              <span></span>
            </div>
          )}

          <div
            className="myblock inner"
            onClick={() => {
              goPage('notice');
            }}
          >
            <span>공지사항</span>
            <span></span>
          </div>
          <div
            className="myblock inner"
            onClick={() => {
              goPage('faq');
            }}
          >
            <span>자주하는 질문</span>
            <span></span>
          </div>
          <div
            className="myblock inner"
            onClick={() => {
              goPage('term');
            }}
          >
            <span>이용약관</span>
            <span></span>
          </div>
          <div
            className="myblock inner"
            onClick={() => {
              goPage('privacy');
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
