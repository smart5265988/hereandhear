import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Player = () => {
  const history = useHistory();

  useEffect(() => {
    const data = history.location.pathname.split('/');
    const category = data[2];
    const id = data[3];
    console.log(category, id);
    // 받은 주소를 바탕으로 파이어베이스에서 필요한 데이터를 가져와야함.
  }, []);

  return (
    <div className="content">
      <div className="sec_wrapper">Player</div>
    </div>
  );
};

export default Player;
