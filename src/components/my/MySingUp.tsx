import React, { useState } from 'react';
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

  const singup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, id, password);
      history.push('my/myEmailLogin');
    } catch (error) {
      dispatch(setSignUpErrorPop(true));
    }
  };

  const handleId = (e: any) => {
    setId(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const goback = () => {
    history.goBack();
  };

  const onCheckEnter = (e: any) => {
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
        <form onSubmit={(e) => e.preventDefault()} onKeyPress={onCheckEnter}>
          <input
            type="text"
            onChange={handleId}
            placeholder="Email"
            autoComplete="off"
          ></input>
          <input
            type="password"
            onChange={handlePassword}
            placeholder="Password"
            autoComplete="off"
          ></input>
        </form>
        <button onClick={singup}>가입</button>
      </div>
    </div>
  );
};

export default MyLogin;
