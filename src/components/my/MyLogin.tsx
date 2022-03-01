import React, { useState } from 'react';

const MyLogin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const handleId = (e: any) => {
    setId(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="content home">
      <div className="sec_wrapper">MyLogin</div>

      <form onSubmit={(e) => e.preventDefault()}>
        <ul className="SignInUl">
          {errMessage === '' ? (
            <li>MEMBER LOGIN</li>
          ) : (
            <li
              style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                zIndex: '15',
                alignItems: 'center',
                borderBottom: '4px solid #d21c38',
                fontSize: '1.2rem',
              }}
            >
              {errMessage}
            </li>
          )}
          <li>
            <div className="UserNameIcon"></div>
            <input
              value={id}
              onChange={handleId}
              placeholder="Username"
            ></input>
          </li>
          <li>
            <div className="PasswordIcon"></div>
            <input
              type="password"
              onChange={handlePassword}
              placeholder="Password"
              autoComplete="on"
            ></input>
          </li>
          <li>
            <button type="submit" className="SignInBtn">
              LogIn
            </button>
          </li>
          <li>
            {/* <div>
              <div className="LoginToggle">
                <div className="LoginToggleBtn"></div>
              </div>
            </div>
            <div className="SocialLogin">
              <img src={GoogleLogo} alt="google" />
            </div> */}
            <button type="submit" className="SignInBtnKaKao">
              Login with Kakao
            </button>
          </li>
          <li>
            <span>회원가입</span>
            <span>아이디찾기</span>
            <span>비밀번호찾기</span>
          </li>
        </ul>
      </form>
      <div className="Filter"></div>
    </div>
  );
};

export default MyLogin;
