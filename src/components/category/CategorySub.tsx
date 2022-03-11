import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { database } from '../../firebase';
import { ref, get, child } from 'firebase/database';
import Loading from '../../common/Loading';
import { useDispatch } from 'react-redux';
import { setNetworkErrorPop } from '../../redux/reducers/popup';
import { motion } from 'framer-motion';
import defaultImg from '../../res/images/default_img.jpeg';

interface Contents {
  category: string;
  id: string;
  title: string;
  img: string;
}

interface Data {
  category: string;
}

const CategorySub = (props: Data) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const goPlayer = useCallback(
    (category: string, id: string) => {
      history.push(`/player/${category}/${id}`);
    },
    [history],
  );

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      // y: 40,
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
  //파이어베이스에서 해당 카테고리 정보만 가져와서 셋팅
  useEffect(() => {
    setLoading(true);
    const dbRef = ref(database);
    get(child(dbRef, props.category))
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
  }, []);

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <motion.div
      className="sec_wrapper inner"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className=" categorylist">
        {data.length === 0 ? (
          <div className="category_data_empty">🙏🏻 컨텐츠 준비중입니다.</div>
        ) : (
          data.map((item: Contents, index) => {
            return (
              <motion.div
                variants={items}
                className="list"
                onClick={() => goPlayer(item.category, item.id)}
                key={`city${item.id}`}
              >
                <div
                  style={
                    item.img === undefined || item.img === ''
                      ? {
                          background: `url(${defaultImg}) no-repeat`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : {
                          background: `url(${item.img}) no-repeat`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }
                  }
                ></div>
                <span className="categorylist_title">{item.title}</span>
                <span className="categorylist_text">here & hear</span>
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default CategorySub;
