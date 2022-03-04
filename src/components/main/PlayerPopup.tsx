import React, { useEffect, useRef, useState } from 'react';

import { useHistory } from 'react-router-dom';
import sample from '../../res/audio/japan.mp3';

const PlayerPopup = () => {
  const history = useHistory();
  const [isPlay, setPlay] = useState(true);
  const goPlayer = (e: any) => {
    // e.stopPropagation();
    // const pop = document.getElementById('popup_player');
    // if (pop) {
    //   pop.style.display = 'none';
    //   history.push('/player');
    // }
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  let audio = audioRef.current;
  let popPlayer = document.getElementById('popup_player');
  let audio2 = document.getElementById('audio2') as HTMLAudioElement;

  const play = () => {
    setPlay(true);
    if (audio) {
      audio.volume = 0.3;
      audio.play();
    }
  };

  const pause = () => {
    setPlay(false);

    if (audio) {
      audio.pause();
    }
  };

  const close = () => {
    popPlayer?.classList.remove('pop');
    audio2.load();
  };

  return (
    <div
      className="player_modal"
      id="popup_player"
      onClick={(e) => goPlayer(e)}
    >
      <audio
        ref={audioRef}
        controlsList="nodownload"
        // controls
        src={
          'https://firebasestorage.googleapis.com/v0/b/project-ver2-9966b.appspot.com/o/audio%2Fwind.mp3?alt=media&token=e56b42c8-0d51-4c02-a80b-6f0a164f7167'
        }
        id="audio2"
      ></audio>

      <div
        style={{
          width: '6rem',
          height: '6rem',
          borderRadius: '50%',
          background: `url(https://ww.namu.la/s/e8938d64f20e46924b8c3272b0e83c11a4ad33bc35a14230026a29cb2cd45dcd7d57b099f10a44a6386b657b76184280826632acc96cd50e0fa6f595d25072b7d74c5dad1d23fb06c1d169be9b532d0db9bd272a2ae7867fc04dd7c8ca4927b7e3f72b50663873ff978897dd04b593bf) no-repeat`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          left: '3rem',
          position: 'absolute',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: '10.5rem',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '2rem',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <span>title</span>
        <span>간단 설명</span>
      </div>
      <div
        style={{
          position: 'absolute',
          right: '3rem',
          width: '12rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {isPlay === false ? (
          <button
            style={{
              width: '5rem',
              height: '5rem',
              background: 'green',
            }}
            onClick={() => play()}
          >
            재생
          </button>
        ) : (
          <button
            style={{
              width: '5rem',
              height: '5rem',
              background: 'green',
            }}
            onClick={() => pause()}
          >
            정지
          </button>
        )}
        <button
          style={{
            width: '5rem',
            height: '5rem',
            border: '1px solid red',
            background: 'tomato',
          }}
          onClick={() => close()}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default PlayerPopup;
