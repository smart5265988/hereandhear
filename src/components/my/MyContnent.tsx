import React from 'react';

const MyContent = () => {
  return (
    <div className="content my">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="myTitle inner">Setting</h1>
      </div>
      <div className="sec_wrapper">
        <div className="inner">
          <div className="login inner"> 로그인</div>
          <div className="myblock inner">공지사항</div>
          <div className="myblock inner">자주하는 질문</div>
          <div className="myblock inner">이용약관</div>
          <div className="myblock inner">개인정보 처리방침</div>
          <div className="myblock inner">버전정보</div>
        </div>
      </div>
    </div>
  );
};

export default MyContent;
