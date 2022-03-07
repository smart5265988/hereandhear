import React from 'react';
import { useHistory } from 'react-router-dom';

const CategotyBlock = () => {
  const history = useHistory();

  const detailList = (category: string) => {
    history.push(`/category/${category}`);
  };

  return (
    <div className="sec_wrapper">
      <div
        style={{
          textAlign: 'center',
          fontSize: '2rem',
        }}
      >
        원하는 곳으로 떠나보세요.
      </div>
      <div className="category">
        <ul>
          <li>
            <div onClick={() => detailList('city')}></div>
            <div onClick={() => detailList('remember')}></div>
            <div onClick={() => detailList('space')}></div>
            <div onClick={() => detailList('nature')}></div>
          </li>
          <li>
            <div>City</div>
            <div>Remember</div>
            <div>Space</div>
            <div>Nature</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategotyBlock;
