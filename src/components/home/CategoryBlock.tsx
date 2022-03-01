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
    <div className="content today" style={{ height: '20rem' }}>
      <div
        className="inner"
        style={{
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid red',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '3rem',
          paddingRight: '3rem',
          background: '#000',
        }}
      >
        <div onClick={() => detailList('city')}>city</div>
        <div onClick={() => detailList('remember')}>remember</div>
        <div onClick={() => detailList('space')}>space</div>
        <div onClick={() => detailList('nature')}>nature</div>
      </div>
    </div>
  );
};

export default CategotyBlock;
