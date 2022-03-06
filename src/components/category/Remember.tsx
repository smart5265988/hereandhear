import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { database } from '../../firebase';
import { ref, onValue, get, child } from 'firebase/database';
import Loading from '../../common/Loading';
interface remember {
  category: string;
  id: string;
  title: string;
  img: string;
}

const Remember = () => {
  const history = useHistory();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const goPlayer = (category: string, id: string) => {
    history.push(`/player/${category}/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    const dbRef = ref(database);
    get(child(dbRef, 'remember')).then((snapshot) => {
      const list = snapshot.val();
      const contentList = [];
      for (let id in list) {
        contentList.push({ id, ...list[id] });
      }
      // console.log(contentList);
      setData(contentList);
      setLoading(false);
    });
  }, []);

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="sec_wrapper inner">
      <div className=" categorylist">
        {data.map((item: remember, index) => {
          return (
            <div
              className="list"
              onClick={() => goPlayer(item.category, item.id)}
              key={`remember${item.id}`}
            >
              <div
                style={{
                  background: `url(${item.img}) no-repeat`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
              <span className="categorylist_title">{item.title}</span>
              <span className="categorylist_text">here & hear</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Remember;
