import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as firebase from '../../const/index';
import { axiosGet } from '../../util/axiosGet';
import Loading from '../../common/Loading';

interface Notice {
  text: string;
  date: string;
  title: string;
}

const MyNotice = () => {
  const history = useHistory();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosGet('/notice.json')
      .then((list: any) => {
        if (list.status === 200) {
          setData(list.data.reverse());
          setLoading(false);
        }
      })
      .catch((error) => {
        setData([]);
        setLoading(false);
      });
  }, []);

  const goback = () => {
    history.goBack();
  };

  if (isLoading === true) {
    return <Loading />;
  }

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
          {data.length > 0 ? (
            data.map((item: Notice, index) => {
              return (
                <li className="notice_list" key={`notice${index}`}>
                  <input type="checkbox" id={`notice${index}`}></input>
                  <label htmlFor={`notice${index}`} className="notice_title">
                    <span>{item.date}</span>
                    <span>{item.title}</span>
                    <em></em>
                  </label>
                  <div className="notice_text">
                    <p>{item.text}</p>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="notice_list">
              <input type="checkbox" id={`notice`}></input>
              <label
                htmlFor={`notice`}
                className="notice_title"
                style={{ textAlign: 'center', fontSize: '2rem' }}
              >
                공지사항이 없습니다.
              </label>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyNotice;
