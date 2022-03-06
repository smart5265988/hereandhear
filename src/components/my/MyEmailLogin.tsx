import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { SEESION } from '../../const';

const MyEmailLogin = () => {
  const history = useHistory();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
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
    setUser(currentUser);
  }); // 코드 추가

  //일반 이메일 로그인
  const login = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, id, password);
      })
      .catch((error) => {
        alert('로그인 오류');
      });
  };

  const goback = () => {
    history.goBack();
  };

  return (
    <div className="sec_wrapper">
      <div className="goback2" onClick={goback}></div>
      <div
        style={{
          paddingTop: '0.9333rem',
        }}
      >
        <h1 className="categoryTitle inner">Email Login</h1>
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
        <form
          style={{
            display: 'flex',
            width: '100%',
            height: 'auto',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: '60',
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => {
              setId(e.target.value);
            }}
            style={{
              width: '80%',
              height: '4rem',
              backgroundColor: 'transparent',
              border: '1px solid #fff',
              outline: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              paddingLeft: '2rem',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{
              width: '80%',
              height: '4rem',
              backgroundColor: 'transparent',
              border: '1px solid #fff',
              outline: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              paddingLeft: '2rem',
            }}
          />
        </form>
        <button
          style={{
            width: '80%',
            height: '4rem',
            background: 'blue',
            fontSize: '1.5rem',
          }}
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default MyEmailLogin;
