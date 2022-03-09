import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loading from '../../common/Loading';
import { SEESION } from '../../const';
import { setLoginPop } from '../../redux/reducers/popup';
import { database } from '../../firebase';
import { ref, get, child } from 'firebase/database';
import { motion } from 'framer-motion';
import defaultImg from '../../res/images/default_img.jpeg';

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

  const container = {
    show: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
  };
  //세션에 저장된 값으로 로그인 여부판단
  useEffect(() => {
    const ck: any = sessionStorage.getItem(SEESION);
    if (ck !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  //파이어 베이스에서 추천 데이터 가져오기
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

  //로그인 여부에따라 페이지 이동 처리 분기 ( 로그인 요청 팝업 )
  const goPlayer = useCallback(
    (item: any) => {
      if (isLogin === false) {
        dispatch(setLoginPop(true));
      } else {
        history.push(`/player/${item.category}/${item.id}`);
      }
    },
    [history, dispatch, isLogin],
  );

  // 로딩중
  if (isLoading === true) {
    return <Loading />;
  }

  // 데이터 없을시 아무것도 랜더하지 않음
  if (data.length === 0) {
    return <></>;
  }

  return (
    // <div className="content today">
    <motion.div
      className="sec_wrapper"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="title_hd">
        <span className="sec_title inner">오늘의 추천</span>
      </div>

      <div className="home_scroll inner">
        <ul>
          {data.map((item: Recommend, index) => {
            return (
              <motion.li
                style={
                  item.img === ''
                    ? {
                        background: `url(${defaultImg}) no-repeat`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {
                        background: `url(${item.img}) no-repeat`,
                        backgroundSize: 'cover',
                      }
                }
                onClick={() => goPlayer(item)}
                variants={items}
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
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
    // </div>
  );
};

export default TodayBlock;
