import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../common/Loading';
import { database } from '../../firebase';
import { ref, get, child } from 'firebase/database';
import { motion } from 'framer-motion';
import defaultImg from '../../res/images/default_img.jpeg';
interface Free {
  audio: string;
  title: string;
  category: string;
  img: string;
}

const FreeBlock = () => {
  const history = useHistory();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

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

  //파이어 베이스에서 무료 데이터 가져오기
  useEffect(() => {
    setLoading(true);
    const dbRef = ref(database);
    get(child(dbRef, 'free')).then((snapshot) => {
      const list = snapshot.val();
      const contentList = [];
      for (let id in list) {
        contentList.push({ id, ...list[id] });
      }
      setData(contentList);
      setLoading(false);
    });
  }, []);

  const goPlayer = useCallback(
    (item: any) => {
      history.push(`/player/${item.category}/${item.id}`);
    },
    [history],
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
    <motion.div
      className="sec_wrapper"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="title_hd">
        <span className="sec_title inner">무료 컨텐츠</span>
      </div>

      <div className="home_scroll inner">
        <ul>
          {data.map((item: Free, index) => {
            return (
              <motion.li
                style={
                  item.img === undefined || item.img === ''
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
                key={`free${index}`}
                variants={items}
              >
                <div className="block_filter"></div>
                <div className="free_category">{item.category}</div>
                <div className="free_title">{item.title}</div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default FreeBlock;
