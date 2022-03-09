import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const CategoryBlock = () => {
  const history = useHistory();

  const detailList = useCallback(
    (category: string) => {
      history.push(`/category/${category}`);
    },
    [history],
  );

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

export default CategoryBlock;
