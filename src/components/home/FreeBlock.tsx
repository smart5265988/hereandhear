import React from 'react';
import { useHistory } from 'react-router-dom';

const FreeBlock = () => {
  const history = useHistory();

  const goPlayer = (category: string, id: string) => {
    history.push(`/player/${category}/${id}`);
  };

  return (
    <div className="content today">
      <div className="sec_wrapper popular_wrap">
        <div className="title_hd">
          <span className="sec_title inner">무료 컨텐츠</span>
        </div>

        <div className="tody_scroll inner">
          <ul>
            <li
              onClick={() => goPlayer('city', '1')}
              style={{ height: '23rem' }}
            >
              1
            </li>
            <li
              onClick={() => goPlayer('remember', '1')}
              style={{ height: '23rem' }}
            >
              1
            </li>
            <li
              onClick={() => goPlayer('nature', '1')}
              style={{ height: '23rem' }}
            >
              1
            </li>
            <li
              onClick={() => goPlayer('space', '1')}
              style={{ height: '23rem' }}
            >
              1
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FreeBlock;
