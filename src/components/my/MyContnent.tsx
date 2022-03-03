import React from 'react';
import { useHistory } from 'react-router-dom';

const MyContent = () => {
  const history = useHistory();

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
  return (
    <div className="content my">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="myTitle inner">Setting</h1>
      </div>
      <div className="sec_wrapper">
        <div className="inner">
          <div
            className="login inner"
            onClick={() => {
              goPage('login');
            }}
          >
            <span>로그인</span>
            <span></span>
          </div>
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
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContent;
