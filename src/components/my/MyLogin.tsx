import React, { useCallback, useEffect, useState } from 'react';
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
import Loading from '../../common/Loading';
import { motion } from 'framer-motion';

const MyLogin = () => {
  const history = useHistory();
  const [user, setUser] = useState({}); // 코드 추가
  const [isLoding, setLoading] = useState(false);
  const dispatch = useDispatch();

  const container = {
    show: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
  };

  //로그인 확인용
  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    if (ck !== null) {
      history.push('/home');
    }
    return () => {};
  }, [user, history]);

  //로그인 상태 확인 (파이어베이스)
  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

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

  const goback = useCallback(() => {
    history.goBack();
  }, [history]);

  const goEmailLogin = useCallback(() => {
    history.push('/my/myEmailLogin');
  }, [history]);

  const goSingUp = useCallback(() => {
    history.push('/my/mySignup');
  }, [history]);

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
      <motion.div
        className="my_login"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.button
          variants={items}
          style={{
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={googleLogin}
        >
          <svg width="46px" height="46px" viewBox="0 0 46 46" version="1.1">
            <title>btn_google_light_normal_ios</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Google-Button"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="9-PATCH"
                transform="translate(-608.000000, -160.000000)"
              ></g>
              <g
                id="btn_google_light_normal"
                transform="translate(-1.000000, -1.000000)"
              >
                <g
                  id="button"
                  transform="translate(4.000000, 4.000000)"
                  filter="url(#filter-1)"
                >
                  <g id="button-bg">
                    <use fill="#FFFFFF" fillRule="evenodd"></use>
                  </g>
                </g>
                <g
                  id="logo_googleg_48dp"
                  transform="translate(15.000000, 15.000000)"
                >
                  <path
                    d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                    id="Shape"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                    id="Shape"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                    id="Shape"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                    id="Shape"
                    fill="#EA4335"
                  ></path>
                  <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path>
                </g>
                <g id="handles_square"></g>
              </g>
            </g>
          </svg>
          <span
            style={{
              color: '#444',
              fontFamily: 'Roboto',
            }}
          >
            Sign in with Google
          </span>
        </motion.button>
        <motion.button
          variants={items}
          style={{
            border: '1px solid #26aae1',
          }}
          onClick={goEmailLogin}
        >
          이메일로 계속하기
        </motion.button>
        <motion.button
          variants={items}
          style={{
            border: '1px solid #FBBC05',
          }}
          onClick={goSingUp}
        >
          회원가입
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MyLogin;
