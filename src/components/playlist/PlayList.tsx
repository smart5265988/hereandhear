import React, { useEffect, useState } from 'react';
import Loading from '../../common/Loading';

const PlayList = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout();
    };
  }, []);

  if (isLoading === true) {
    return <Loading />;
  }
  return (
    <div className="sec_wrapper">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="categoryTitle inner">BookMark</h1>
      </div>
      <div className="inner">저장된 리스트가 없습니다.</div>
    </div>
  );
};

export default PlayList;
