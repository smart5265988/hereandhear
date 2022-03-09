import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { database } from '../../firebase';
import { ref, get, child } from 'firebase/database';
import Loading from '../../common/Loading';
import defaultImg from '../../res/images/default_img.jpeg';

interface Menu {
  menu: string;
  img: string;
}

const CategoryBlock = () => {
  const history = useHistory();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const dbRef = ref(database);
    get(child(dbRef, 'category')).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val().slice(0, 4));
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    });
  }, []);

  const detailList = useCallback(
    (category: string) => {
      history.push(`/category/${category}`);
    },
    [history],
  );

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
      scale: 0.8,
      // y: 40,
    },
    show: {
      opacity: 1,
      scale: 1,
      // y: 0,
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
  };

  if (isLoading === true) {
    return <Loading />;
  }
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
      <motion.div
        style={{
          textAlign: 'center',
          fontSize: '2rem',
        }}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: 'easeOut',
          duration: 2,
        }}
      >
        원하는 곳으로 떠나보세요.
      </motion.div>
      <div className="category">
        <ul>
          <li>
            {data.map((item: Menu, index) => {
              return (
                <motion.div
                  key={`home_category${index}`}
                  variants={items}
                  onClick={() => detailList(item.menu)}
                  style={
                    item.img === undefined || item.img === ''
                      ? {
                          background: `url(${defaultImg}) no-repeat`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }
                      : {
                          background: `url(${item.img}) no-repeat`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }
                  }
                ></motion.div>
              );
            })}
          </li>
          <li>
            {data.map((item: Menu, index) => {
              return (
                <motion.div
                  key={`home_category_title${index}`}
                  variants={items}
                >
                  {item.menu}
                </motion.div>
              );
            })}
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CategoryBlock;
