import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import City from './City';
import Remeber from './Remember';
import Space from './Space';
import Nature from './Nature';

const Category = () => {
  const history = useHistory();

  const detailList = (val: string) => {
    if (val === 'city') {
      history.push('/category/city');
    } else if (val === 'space') {
      history.push('/category/space');
    } else if (val === 'nature') {
      history.push('/category/nature');
    } else if (val === 'remember') {
      history.push('/category/remember');
    }
  };

  return (
    <div className="sec_wrapper">
      <div
        className="top_logo"
        style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}
      >
        <h1 className="categoryTitle inner">Category</h1>
      </div>
      <div className="inner">
        <div onClick={() => detailList('city')}>city</div>
        <div onClick={() => detailList('remember')}>remember</div>
        <div onClick={() => detailList('space')}>space</div>
        <div onClick={() => detailList('nature')}>nature</div>
      </div>
      <div>
        <Switch>
          <Route path="/category/city" component={City} />
          <Route path="/category/space" component={Space} />
          <Route path="/category/nature" component={Nature} />
          <Route path="/category/remember" component={Remeber} />
          <Route path="/category" component={City} />
        </Switch>
      </div>
    </div>
  );
};

export default Category;
