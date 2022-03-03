import React from 'react';
import { useHistory } from 'react-router-dom';

const MyTerms = () => {
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
        <h1 className="categoryTitle inner">이용약관</h1>
      </div>
      <div className="my_terms inner">
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

export default MyTerms;
