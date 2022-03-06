import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { SEESION } from '../../const';

const MyLogin = () => {
  const history = useHistory();
  const [user, setUser] = useState({}); // 코드 추가

  //로그인 확인용
  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    // console.log(JSON.parse(ck));
    if (ck !== null) {
      history.push('/home');
    }
  }, [user, history]);

  //로그인 상태 확인 (파이어베이스)
  onAuthStateChanged(auth, (currentUser: any) => {
    // dispatch(setUserInfo(currentUser))
    setUser(currentUser);
  }); // 코드 추가

  //구글로그인
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        return await signInWithPopup(auth, provider);
      })
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goback = () => {
    history.goBack();
  };

  const goEmailLogin = () => {
    history.push('/my/myEmailLogin');
  };
  const goSingUp = () => {
    history.push('/my/mySignup');
  };

  return (
    <div className="sec_wrapper">
      <div className="goback2" onClick={goback}></div>

      <div
        style={{
          paddingTop: '0.9333rem',
        }}
      >
        <h1 className="categoryTitle inner">Login</h1>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '40rem',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: '60',
        }}
      >
        <button
          style={{
            width: '80%',
            height: '6rem',
            background: 'blue',
            marginBottom: '3rem',
          }}
          onClick={googleLogin}
        >
          구글로 계속하기
        </button>
        <button
          style={{
            width: '80%',
            height: '6rem',
            background: 'red',
            marginBottom: '3rem',
          }}
          onClick={goEmailLogin}
        >
          이메일로 계속하기
        </button>
        <button
          style={{
            width: '80%',
            height: '6rem',
            background: 'red',
          }}
          onClick={goSingUp}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default MyLogin;
