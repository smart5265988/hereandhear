import React from 'react';
import { useHistory } from 'react-router-dom';

const MyNotice = () => {
  const history = useHistory();

  const goback = () => {
    history.goBack();
  };
  return (
    <div className="sec_wrapper">
      <div className="goback2" onClick={goback}></div>

      <div
        style={{
          paddingTop: '0.9333rem',
          marginBottom: '0.9333rem',
        }}
      >
        <h1 className="categoryTitle inner">Notice</h1>
      </div>
      <div className="inner" style={{ marginBottom: '0.9333rem' }}>
        <ul
          style={{
            paddingTop: '2rem',
          }}
        >
          <li className="notice_list">
            <input type="checkbox" id="notice1"></input>
            <label htmlFor="notice1" className="notice_title">
              <span>2022-03-03</span>
              <span>음원 업데이트 공지사항</span>
              <em></em>
            </label>
            <div className="notice_text">
              <p>
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis ipsa rerum obcaecati ullam fuga quam consequuntur
                soluta impedit, vitae recusandae esse veritatis assumenda
                dolorem doloribus non, provident praesentium exercitationem
                iusto!
              </p>
            </div>
          </li>

          <li className="notice_list">
            <input type="checkbox" id="notice2"></input>
            <label htmlFor="notice2" className="notice_title">
              <span>2022-03-03</span>
              <span>음원 업데이트 공지사항</span>
              <em></em>
            </label>
            <div className="notice_text">
              <p>
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis ipsa rerum obcaecati ullam fuga quam consequuntur
                soluta impedit, vitae recusandae esse veritatis assumenda
                dolorem doloribus non, provident praesentium exercitationem
                iusto!
              </p>
            </div>
          </li>

          <li className="notice_list">
            <input type="checkbox" id="notice3"></input>
            <label htmlFor="notice3" className="notice_title">
              <span>2022-03-03</span>
              <span>음원 업데이트 공지사항</span>
              <em></em>
            </label>
            <div className="notice_text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis ipsa rerum obcaecati ullam fuga quam consequuntur
                soluta impedit, vitae recusandae esse veritatis assumenda
                dolorem doloribus non, provident praesentium exercitationem
                iusto! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis ipsa rerum obcaecati ullam fuga quam consequuntur
                soluta impedit, vitae recusandae esse veritatis assumenda
                dolorem doloribus non, provident praesentium exercitationem
                iusto!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyNotice;
