import React from 'react';
import { useHistory } from 'react-router-dom';

const MyPrivacy = () => {
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
        <h1 className="categoryTitle inner">개인정보 처리방침</h1>
      </div>
      <div className="my_privacy inner">
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>

        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          magnam, nemo quod dolorum exercitationem iste inventore eius corrupti
          a consectetur quisquam esse architecto dolores, fuga, quis ipsa maxime
          harum quaerat!
        </p>
      </div>
    </div>
  );
};

export default MyPrivacy;
