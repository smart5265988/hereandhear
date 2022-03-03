import React from 'react';
import { useHistory } from 'react-router-dom';

const MyFaq = () => {
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
        <h1 className="categoryTitle inner">FAQ</h1>
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
              <span>Q1</span>
              <span>유료 서비스</span>
              <em></em>
            </label>
            <div className="notice_text">
              <p>
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
              <span>Q2</span>
              <span>회원가입</span>
              <em></em>
            </label>
            <div className="notice_text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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

export default MyFaq;
