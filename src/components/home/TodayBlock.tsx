import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import img from '../../res/images/sapporo.jpg';
import { useDispatch } from 'react-redux';
import { axiosGet } from '../../util/axiosGet';
import Loading from '../../common/Loading';
import { SEESION } from '../../const';
import { setLoginPop } from '../../redux/reducers/popup';
import { database } from '../../firebase';
import { ref, onValue, get, child } from 'firebase/database';
interface Recommend {
  audio: string;
  title: string;
  category: string;
  img: string;
}

const TodayBlock = () => {
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    // console.log(JSON.parse(ck));
    if (ck !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   axiosGet('/recommend.json')
  //     .then((list: any) => {
  //       if (list.status === 200) {
  //         setData(list.data);
  //         setLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       setData([]);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    const dbRef = ref(database);
    get(child(dbRef, 'recommend')).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    });
  }, []);

  const goPlayer = (item: any) => {
    if (isLogin === false) {
      // console.log('today_block ck');
      // const poplogin = document.getElementById('popup_login');
      // poplogin?.classList.add('pop');
      dispatch(setLoginPop(true));
    } else {
      history.push(`/player/${item.category}/${item.id}`);
    }
  };

  if (isLoading === true) {
    return <Loading />;
  }
  if (data.length === 0) {
    return <></>;
  }

  return (
    // <div className="content today">
    <div className="sec_wrapper">
      <div className="title_hd">
        <span className="sec_title inner">오늘의 추천</span>
      </div>

      <div className="home_scroll inner">
        <ul>
          {data.map((item: Recommend, index) => {
            return (
              <li
                style={{
                  background: `url(${item.img}) no-repeat`,
                  backgroundSize: 'cover',
                }}
                onClick={() => goPlayer(item)}
                key={`recommend${index}`}
              >
                <div className="block_filter"></div>
                {isLogin === false ? (
                  <div className="contents_lock"></div>
                ) : (
                  <></>
                )}
                <div className="free_category">{item.category}</div>
                <div className="free_title">{item.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default TodayBlock;
