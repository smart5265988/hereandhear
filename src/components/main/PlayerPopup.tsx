import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import sample from '../../res/audio/japan.mp3';
import { setPlayerPop } from '../../redux/reducers/popup';
import { useDispatch, useSelector } from 'react-redux';

const PlayerPopup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const popInfo = useSelector((state: any) => state.popupInfoReducer);
  const [isPlay, setPlay] = useState(true);

  const goPlayer = (e: any) => {
    // e.stopPropagation();
    // const pop = document.getElementById('popup_player');
    // if (pop) {
    //   pop.style.display = 'none';
    //   history.push('/player');
    // }
  };
  const data: any = sessionStorage.getItem('data');
  const content = JSON.parse(data);

  const audioRef = useRef<HTMLAudioElement>(null);
  let audio = audioRef.current;
  let popPlayer = document.getElementById('popup_player');
  let audio2 = document.getElementById('audio2') as HTMLAudioElement;

  //팝업창 노출 여부
  useEffect(() => {
    if (popInfo.playPop === true) {
      popPlayer?.classList.add('pop');
    }
    if (popInfo.playPop === false) {
      popPlayer?.classList.remove('pop');
    }
  }, [popInfo.playPop]);

  // 플레이 버튼 (컨트롤 팝업 , 플레이 페이지 동일)
  useEffect(() => {
    if (popInfo.isPlay === true) {
      setPlay(true);
    }
    if (popInfo.isPlay === false) {
      setPlay(false);
    }
  }, [popInfo.isPlay]);

  /** Evnet **/

  const play = () => {
    dispatch(setPlayerPop(true, true));
    if (audio) {
      audio.volume = 0.3;
      audio.play();
    }
  };

  const pause = () => {
    dispatch(setPlayerPop(true, false));
    if (audio) {
      audio.pause();
    }
  };

  const close = () => {
    dispatch(setPlayerPop(false, false));
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
        src={content.audio}
        id="audio2"
      ></audio>

      <div
        className="player_modal_img"
        style={{
          background: `url(${content.img}) no-repeat`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="player_modal_text">
        <div>
          {/* {content.title} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          hic
        </div>
        <div>{content.category}</div>
      </div>
      <div className="player_modal_btn">
        {isPlay === false ? (
          <div onClick={() => play()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              id="Filled"
              viewBox="0 0 24 24"
              width="20"
              height="20"
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
              width="20"
              height="20"
            >
              <path d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0Z" />
              <path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0Z" />
            </svg>
          </div>
        )}
        <div onClick={() => close()}>
          <svg
            fill="#fff"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512.021 512.021"
            width="20"
            height="20"
          >
            <g>
              <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlayerPopup;
