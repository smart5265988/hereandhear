import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryBlock = () => {
  const history = useHistory();

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

  const item = {
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
            <motion.div
              variants={item}
              onClick={() => detailList('city')}
            ></motion.div>
            <motion.div
              variants={item}
              onClick={() => detailList('remember')}
            ></motion.div>
            <motion.div
              variants={item}
              onClick={() => detailList('space')}
            ></motion.div>
            <motion.div
              variants={item}
              onClick={() => detailList('nature')}
            ></motion.div>
          </li>
          <li>
            <motion.div variants={item}>City</motion.div>
            <motion.div variants={item}>Remember</motion.div>
            <motion.div variants={item}>Space</motion.div>
            <motion.div variants={item}>Nature</motion.div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CategoryBlock;
