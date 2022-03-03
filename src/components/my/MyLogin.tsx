import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MyLogin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const history = useHistory();
  const handleId = (e: any) => {
    setId(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const goback = () => {
    history.goBack();
  };

  return (
    <div
      className="sec_wrapper"
      style={{
        padding: '0',
        borderTop: 'none',
      }}
    >
      <div className="goback" onClick={goback}></div>
      <div
        className="filter"
        style={{
          height: '100vh',
        }}
      ></div>
      <div
        style={{
          // marginTop: '8rem',
          width: '100%',
          maxWidth: '50.8rem',
          display: 'flex',
          height: '100%',
          position: 'fixed',
          background: `url(https://ww.namu.la/s/e8938d64f20e46924b8c3272b0e83c11a4ad33bc35a14230026a29cb2cd45dcd7d57b099f10a44a6386b657b76184280826632acc96cd50e0fa6f595d25072b7d74c5dad1d23fb06c1d169be9b532d0db9bd272a2ae7867fc04dd7c8ca4927b7e3f72b50663873ff978897dd04b593bf) no-repeat`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '20',
        }}
      ></div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '40rem',
          // background: 'green',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          zIndex: '60',
          top: '25rem',
        }}
      >
        <p>시작하기</p>
        <br />
        <button
          style={{
            width: '80%',
            height: '6rem',
            background: 'blue',
          }}
        >
          구글로 계속하기
        </button>
        <br />
        <br />
        <button
          style={{
            width: '80%',
            height: '6rem',
            background: 'red',
          }}
        >
          이메일로 계속하기
        </button>
      </div>
    </div>
  );
};

export default MyLogin;
