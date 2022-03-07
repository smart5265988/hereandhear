import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../common/Loading';
import { SEESION } from '../../const';
import { database } from '../../firebase';
import { ref, get, child, remove } from 'firebase/database';
import { setNetworkErrorPop } from '../../redux/reducers/popup';
import { useDispatch } from 'react-redux';
import { setLoginPop, setAddPop } from '../../redux/reducers/popup';

interface List {
  category: string;
  id: string;
  title: string;
  img: string;
  audio: string;
}

const PlayList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState('');

  //로그인 유지
  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    if (ck !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  // 데이터가져오기
  useEffect(() => {
    if (isLogin === true) {
      getData();
    }
  }, [userInfo]);

  //로그인 팝업
  useEffect(() => {
    if (isLogin === true) {
      dispatch(setLoginPop(false));
    }
    if (isLogin === false) {
      dispatch(setLoginPop(true));
    }
  }, [isLogin, history]);

  const getData = () => {
    let infoParse = { uid: '' };
    const ck: any = sessionStorage.getItem(SEESION);
    if (ck) {
      infoParse = JSON.parse(ck);
    }
    setLoading(true);
    const dbRef = ref(database);
    get(child(dbRef, `users/${infoParse.uid}`))
      .then((snapshot) => {
        const list = snapshot.val();
        const contentList = [];
        for (let id in list) {
          contentList.push({ id, ...list[id] });
        }
        setData(contentList);
        setLoading(false);
      })
      .catch((error) => {
        dispatch(setNetworkErrorPop(true));
      });
  };

  const goPage = () => {
    history.push('./category/city');
  };

  const goPlayer = (category: string, id: string) => {
    history.push(`/player/${category}/${id}`);
  };

  const delContent = (e: any, id: string) => {
    e.stopPropagation();
    const dbRef = ref(database);
    const ck: any = sessionStorage.getItem(SEESION);
    const infoParse = JSON.parse(ck);
    remove(child(dbRef, `users/${infoParse.uid}/${id}`)).then(() => {
      dispatch(setAddPop(true, '즐겨찾기에서 삭제되었습니다.'));
      getData();
    });
  };

  if (isLoading === true) {
    return <Loading />;
  }
  return (
    <div className="sec_wrapper">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="categoryTitle inner">BookMark</h1>
      </div>
      {isLogin === false || data.length === 0 ? (
        <div className="nodata inner">
          저장된 리스트가 없습니다.
          <button onClick={goPage}>Category로 이동</button>
        </div>
      ) : (
        <div className=" categorylist inner">
          {data.map((item: List, index) => {
            return (
              <div
                className="list"
                onClick={() => goPlayer(item.category, item.id)}
                key={`city${item.id}`}
              >
                <div
                  className="playlist_img"
                  style={{
                    background: `url(${item.img}) no-repeat`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                >
                  <button
                    className="del_btn"
                    onClick={(e) => delContent(e, item.id)}
                  >
                    X
                  </button>
                </div>
                <span className="categorylist_title">{item.title}</span>
                <span className="categorylist_text">here & hear</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlayList;
