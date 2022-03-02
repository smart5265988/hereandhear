import React from 'react';
import { useHistory } from 'react-router-dom';

const PlayerPopup = () => {
  const history = useHistory();

  const goPlayer = (e: any) => {
    e.stopPropagation();
    const pop = document.getElementById('popup_player');
    if (pop) {
      pop.style.display = 'none';
      history.push('/player');
    }
  };

  return (
    <div
      className="player_modal"
      id="popup_player"
      onClick={(e) => goPlayer(e)}
    >
      <div>재생</div>
      <div>정지</div>
    </div>
  );
};

export default PlayerPopup;
