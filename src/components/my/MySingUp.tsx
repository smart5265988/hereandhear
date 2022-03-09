import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setSignUpErrorPop } from '../../redux/reducers/popup';

const MyLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const singup = useCallback(async () => {
    if (id === '') {
      setMessage('이메일을 입력하세요');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    }
    if (password !== checkPassword || password === '') {
      setMessage('비밀번호를 확인하세요');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, id, password);
      alert('회원가입이 되었습니다.');
      history.push('my/myEmailLogin');
    } catch (error) {
      dispatch(setSignUpErrorPop(true));
    }
  }, [id, password, dispatch, checkPassword, history]);

  const goback = useCallback(() => {
    history.goBack();
  }, [history]);

  const onCheckEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      singup();
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
        <h1 className="categoryTitle inner">SignUp</h1>
      </div>

      <div className="my_email_login">
        {message === '' ? (
          <></>
        ) : (
          <div
            style={{
              marginBottom: '2rem',
              fontSize: '2rem',
              color: 'red',
              fontWeight: '500',
            }}
          >
            {message}
          </div>
        )}
        <form onSubmit={(e) => e.preventDefault()} onKeyPress={onCheckEnter}>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setId(e.target.value);
            }}
            placeholder="Email"
            autoComplete="off"
          ></input>
          <input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            autoComplete="off"
          ></input>
          <input
            type="password"
            placeholder="Check Password"
            autoComplete="off"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCheckPassword(e.target.value);
            }}
          />
        </form>
        <button onClick={singup}>가입</button>
      </div>
    </div>
  );
};

export default MyLogin;
