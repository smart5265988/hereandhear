import React, { useCallback, useEffect, useState } from 'react';
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
  }, [isLogin]);

  //로그인 팝업
  useEffect(() => {
    if (isLogin === true) {
      dispatch(setLoginPop(false));
    }
    if (isLogin === false) {
      dispatch(setLoginPop(true));
    }
  }, [isLogin, history, dispatch]);

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

  const goPage = useCallback(() => {
    history.push('./category/city');
  }, [history]);

  const goPlayer = useCallback(
    (category: string, id: string) => {
      history.push(`/player/${category}/${id}`);
    },
    [history],
  );

  const delContent = useCallback(
    (e: any, id: string) => {
      e.stopPropagation();
      const dbRef = ref(database);
      const ck: any = sessionStorage.getItem(SEESION);
      const infoParse = JSON.parse(ck);
      remove(child(dbRef, `users/${infoParse.uid}/${id}`)).then(() => {
        dispatch(setAddPop(true, '즐겨찾기에서 삭제되었습니다.'));
        getData();
      });
    },
    [dispatch],
  );

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
                    <svg
                      fill="#fff"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512.021 512.021"
                      width="9"
                      height="9"
                    >
                      <g>
                        <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
                      </g>
                    </svg>
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
