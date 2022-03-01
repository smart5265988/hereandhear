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
    <div className="sec_wrapper">
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
