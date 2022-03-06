import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import sample from '../../res/audio/japan.mp3';
import Loading from '../../common/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerPop, setContent } from '../../redux/reducers/popup';
import { database } from '../../firebase';
import { ref, onValue, get, child } from 'firebase/database';
interface Media {
  audio: string;
  title: string;
  img: string;
  category: string;
  text: string;
}

const Player = () => {
  let audio2 = document.getElementById('audio2') as HTMLAudioElement;
  const history = useHistory();
  const dispatch = useDispatch();
  const popInfo = useSelector((state: any) => state.popupInfoReducer);
  const [isLoading, setLoading] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const [data, setData] = useState({
    title: '',
    img: '',
    category: '',
    audio: '',
    text: '',
  });

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
        dispatch(setContent(list.audio, list.img, list.title, list.category));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [history]);

  useEffect(() => {
    if (popInfo.isPlay === true) {
      setPlay(true);
    }
    if (popInfo.isPlay === false) {
      setPlay(false);
    }
  }, [popInfo.isPlay]);

  const play = () => {
    audio2?.play();
    dispatch(setPlayerPop(true, true));
  };

  const pause = () => {
    audio2?.pause();
    dispatch(setPlayerPop(true, false));
  };

  const addList = () => {
    console.log('addList');
  };
  const goback = () => {
    history.goBack();
  };

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="sec_wrapper">
      <div className="goback" onClick={goback}></div>
      <div
        className="filter"
        style={{
          height: '100vh',
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
          style={{
            backgroundImage: `url(${data.img})`,
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
          }}
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
        </div>
      </div>
    </div>
  );
};

export default Player;
