import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../common/Loading';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPlayerPop,
  setContent,
  setAddPop,
} from '../../redux/reducers/popup';
import { database } from '../../firebase';
import { ref, get, set, child } from 'firebase/database';
import { SEESION } from '../../const';
import defaultImg from '../../res/images/default_img.jpeg';

const Player = () => {
  let audio2 = document.getElementById('audio2') as HTMLAudioElement;
  const history = useHistory();
  const dispatch = useDispatch();
  const popInfo = useSelector((state: any) => state.popupInfoReducer);
  const [isLoading, setLoading] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [data, setData] = useState({
    title: '',
    img: '',
    category: '',
    audio: '',
    text: '',
  });
  const [isLogin, setLogin] = useState(false);
  const [isAdd, setAdd] = useState(true);

  //세션에 로그인정보 저장여부로 로그인유지판단
  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    const infoParse = JSON.parse(ck);
    if (ck !== null) {
      setLogin(true);
      setUserInfo(infoParse.uid);
    } else {
      setLogin(false);
    }
  }, []);

  //추가버튼 노출여부 ( 파이어베이스에 저장된 리스트에 값이 있을경우 상태변경)
  useEffect(() => {
    if (userInfo !== '') {
      const data = history.location.pathname.split('/');
      const id = data[3];
      const dbRef = ref(database);
      get(child(dbRef, `users/${userInfo}/${id}`)).then((snapshot) => {
        const list = snapshot.val();
        if (list !== null) {
          setAdd(false);
        }
      });
    }
  }, [userInfo, popInfo.AddPop, history]);

  // 받은 주소를 바탕으로 파이어베이스에서 필요한 데이터를 가져와야함.
  useEffect(() => {
    setLoading(true);
    const data = history.location.pathname.split('/');
    const category = data[2];
    const id = data[3];
    dispatch(setPlayerPop(false, false));
    if (category === undefined || id === undefined) {
      history.push('/category/city');
    }
    const dbRef = ref(database);
    get(child(dbRef, `${category}/${id}`))
      .then((snapshot) => {
        const list = snapshot.val();
        setData(list);
        dispatch(
          setContent(id, list.audio, list.img, list.title, list.category),
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [history, dispatch]);

  //플레이팝업 리덕스 상태에 따라 플레이 페이지 버튼 컨트롤
  useEffect(() => {
    if (popInfo.isPlay === true) {
      setPlay(true);
    }
    if (popInfo.isPlay === false) {
      setPlay(false);
    }
  }, [popInfo.isPlay]);

  const play = useCallback(() => {
    audio2?.play();
    dispatch(setPlayerPop(true, true));
  }, [dispatch, audio2]);

  const pause = useCallback(() => {
    audio2?.pause();
    dispatch(setPlayerPop(true, false));
  }, [dispatch, audio2]);

  //파이어베이스 회원 폴더에 추가
  const addList = useCallback(() => {
    const dbRef = ref(database, `/users/${userInfo}/${popInfo.content.id}`);
    set(dbRef, popInfo.content).then(() => {
      dispatch(setAddPop(true, '즐겨찾기에 추가 되었습니다.'));
    });
  }, [dispatch, popInfo.content, userInfo]);

  const goback = useCallback(() => {
    history.goBack();
  }, [history]);

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="sec_wrapper play">
      <div className="goback" onClick={goback}></div>
      <div
        className="filter"
        style={{
          height: '100%',
        }}
      ></div>
      <div>
        <div className="play_content title inner">
          <p>{data.title}</p>
          <span>{data.category}</span>
        </div>
        <div className="play_content text inner">{data.text}</div>

        <div
          className="play_background"
          style={
            data.img === ''
              ? {
                  backgroundImage: `url(${defaultImg})`,
                }
              : {
                  backgroundImage: `url(${data.img})`,
                }
          }
        ></div>
        <div className="button">
          {isPlay === false ? (
            <div onClick={() => play()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                id="Filled"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z" />
              </svg>
            </div>
          ) : (
            <div onClick={() => pause()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                id="Filled"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0Z" />
                <path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0Z" />
              </svg>
            </div>
          )}
          {isLogin === false || isAdd === false ? (
            <></>
          ) : (
            <div onClick={() => addList()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="#fff"
              >
                <path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
