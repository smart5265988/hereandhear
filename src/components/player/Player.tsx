import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import sample from '../../res/audio/japan.mp3';
import Loading from '../../common/Loading';
const Player = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);

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

  const play = () => {
    console.log('play');
    const popPlayer = document.getElementById('popup_player');
    if (popPlayer) {
      popPlayer.style.display = 'flex';
    }
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
        <div className="play_content title inner">title</div>
        <div className="play_content text inner">
          설명ssdasdasdasdasdadasdasdasdasdas
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
          <button onClick={() => play()}>재생</button>
          <button onClick={() => play()}>정지</button>
          <button onClick={() => addList()}>추가</button>
        </div>
      </div>
      {/* <div className="sec_wrapper">Player</div> */}
    </div>
  );
};

export default Player;
