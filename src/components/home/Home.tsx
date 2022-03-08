import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoryBlock from './CategoryBlock';
import TodayBlock from './TodayBlock';
import FreeBlock from './FreeBlock';
import BannerBlock from '../banner/BannerBlock';
import Loading from '../../common/Loading';
import { database } from '../../firebase';
import { ref, get, child } from 'firebase/database';
import { setNetworkErrorPop } from '../../redux/reducers/popup';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({
    id: '',
    src: '',
  });

  useEffect(() => {
    setLoading(true);
    let random = Math.random() * 4;
    let randomFloor = Math.floor(random);
    const dbRef = ref(database);
    get(child(dbRef, 'video'))
      .then((snapshot) => {
        const list = snapshot.val();
        const contentList = [];
        for (let id in list) {
          contentList.push({ id, ...list[id] });
        }
        setData(contentList[randomFloor]);
        console.log(randomFloor);
        setLoading(false);
      })
      .catch((error) => {
        dispatch(setNetworkErrorPop(true));
      });
  }, []);

  useEffect(() => {
    const poplogin = document.getElementById('popup_login');
    if (poplogin?.classList.contains('pop')) {
      poplogin.classList.remove('pop');
    }
  }, [history]);

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="content">
      <div
        style={{
          width: '100%',
          height: '40rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="filter"></div>

        <div className="ani_logo"></div>
        <div className="ani_title">
          오늘 하루도 지친 당신에게
          <br />
          잠깐 일상을 벗어나는건 어떠세요?
          <br />
          <br />
          <b>Here & Hear</b>
        </div>
        <video
          style={{ width: '100%' }}
          src={data.src}
          muted
          loop
          autoPlay
        ></video>
      </div>
      <Route render={() => <CategoryBlock />} />
      <Route render={() => <FreeBlock />} />
      <Route render={() => <BannerBlock bannerType="image" />} />
      <Route render={() => <TodayBlock />} />
      <Route render={() => <BannerBlock bannerType="text" />} />
    </div>
  );
};

export default Home;
