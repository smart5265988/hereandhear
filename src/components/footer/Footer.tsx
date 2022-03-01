import React from 'react';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();
  const goPage = (page: string) => {
    if (page === 'home') {
      history.push('/');
    } else if (page === 'category') {
      history.push('/category');
    } else if (page === 'player') {
      history.push('/player');
    } else if (page === 'my') {
      history.push('/my');
    }
  };

  return (
    <div className="tab_container">
      <div onClick={() => goPage('home')}>home</div>
      <div onClick={() => goPage('category')}>category</div>
      <div onClick={() => goPage('player')}>player</div>
      <div onClick={() => goPage('my')}>setting</div>
    </div>
  );
};

export default Footer;
