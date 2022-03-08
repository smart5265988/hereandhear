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
import { setLoginErrorPop } from '../../redux/reducers/popup';
import { useDispatch } from 'react-redux';
const MyEmailLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

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
  });

  //일반 이메일 로그인
  const login = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, id, password);
      })
      .catch((error) => {
        dispatch(setLoginErrorPop(true));
      });
  };

  const goback = () => {
    history.goBack();
  };

  const onCheckEnter = (e: any) => {
    if (e.key === 'Enter') {
      login();
    }
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

      <div className="my_email_login">
        <form onSubmit={(e) => e.preventDefault()} onKeyPress={onCheckEnter}>
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </form>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default MyEmailLogin;
