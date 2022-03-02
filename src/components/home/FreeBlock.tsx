import React from 'react';
import { useHistory } from 'react-router-dom';
import img from '../../res/images/sapporo.jpg';

const FreeBlock = () => {
  const history = useHistory();

  const goPlayer = (category: string, id: string) => {
    history.push(`/player/${category}/${id}`);
  };

  return (
    <div className="sec_wrapper">
      <div className="title_hd">
        <span className="sec_title inner">무료 컨텐츠</span>
      </div>

      <div className="home_scroll inner">
        <ul>
          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
            onClick={() => goPlayer('city', '1')}
          >
            1
          </li>
          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
            onClick={() => goPlayer('remember', '1')}
          >
            1
          </li>
          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
            onClick={() => goPlayer('nature', '1')}
          >
            1
          </li>
          <li
            style={{
              background: `url(${img}) no-repeat`,
              backgroundSize: 'cover',
            }}
            onClick={() => goPlayer('space', '1')}
          >
            1
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FreeBlock;