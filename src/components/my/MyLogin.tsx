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
import { setLoginErrorPop } from '../../redux/reducers/popup';
import { useDispatch } from 'react-redux';
import { setLoginPop } from '../../redux/reducers/popup';
import Loading from '../../common/Loading';

const MyLogin = () => {
  const history = useHistory();
  const [user, setUser] = useState({}); // 코드 추가
  const [isLoding, setLoading] = useState(false);
  const dispatch = useDispatch();

  //로그인 확인용
  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    // console.log(JSON.parse(ck));
    if (ck !== null) {
      history.push('/home');
    }
    return () => {};
  }, [user, history]);

  //로그인 상태 확인 (파이어베이스)
  onAuthStateChanged(auth, (currentUser: any) => {
    // dispatch(setUserInfo(currentUser))
    setUser(currentUser);
  }); // 코드 추가

  //구글로그인
  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        return await signInWithPopup(auth, provider);
      })
      .then((result) => {
        setLoading(false);
        GoogleAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        setLoading(false);
        dispatch(setLoginErrorPop(true));
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

  if (isLoding === true) {
    return <Loading />;
  }

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
      <div className="my_login">
        <button className="google" onClick={googleLogin}>
          <div></div>
        </button>
        <button
          style={{
            border: '1px solid #26aae1',
          }}
          onClick={goEmailLogin}
        >
          이메일로 계속하기
        </button>
        <button onClick={goSingUp}>회원가입</button>
      </div>
    </div>
  );
};

export default MyLogin;
