import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import sample from '../../res/audio/japan.mp3';
import Loading from '../../common/Loading';
const Player = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [isPlay, setPlay] = useState(false);
  useEffect(() => {
    const data = history.location.pathname.split('/');
    const category = data[2];
    const id = data[3];
    console.log(category, id);
    if (category === undefined || id === undefined) {
      // console.log('음원클릭해서 이동가능하게 변경')
      // history.push('/category/city');
    }
    // 받은 주소를 바탕으로 파이어베이스에서 필요한 데이터를 가져와야함.
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout();
    };
  }, []);
  let audio2 = document.getElementById('audio2') as HTMLAudioElement;

  const play = () => {
    audio2.play();
    setPlay(true);
    const popPlayer = document.getElementById('popup_player');
    if (popPlayer) {
      // popPlayer.style.display = 'flex';
      popPlayer.classList.add('pop');
    }
  };

  const pause = () => {
    audio2.pause();
    setPlay(false);
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
          <p>서울 광화문</p>
          <span>서울, 대한민국</span>
        </div>
        <div className="play_content text inner">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quia
          ducimus suscipit voluptatum! Provident inventore nemo quod ut illo
          vitae est minima odit. Quaerat earum tenetur ut repudiandae eum
          voluptatum!
        </div>

        <div
          className="play_background"
          style={{
            background: `url(https://ww.namu.la/s/e8938d64f20e46924b8c3272b0e83c11a4ad33bc35a14230026a29cb2cd45dcd7d57b099f10a44a6386b657b76184280826632acc96cd50e0fa6f595d25072b7d74c5dad1d23fb06c1d169be9b532d0db9bd272a2ae7867fc04dd7c8ca4927b7e3f72b50663873ff978897dd04b593bf) no-repeat`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
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
