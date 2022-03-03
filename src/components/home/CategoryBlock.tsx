import React from 'react';
import { useHistory } from 'react-router-dom';

const CategotyBlock = () => {
  const history = useHistory();

  const detailList = (val: string) => {
    if (val === 'city') {
      history.push('/category/city');
    } else if (val === 'space') {
      history.push('/category/space');
    } else if (val === 'nature') {
      history.push('/category/nature');
    } else if (val === 'remember') {
      history.push('/category/remember');
    }
  };

  return (
    <div
      className="sec_wrapper"
      // style={{ border: '1px solid red' }}
    >
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
            <div>city</div>
            <div>remember</div>
            <div>space</div>
            <div>nature</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategotyBlock;
