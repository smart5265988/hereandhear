import React from 'react';
import { Route, Switch, useHistory, NavLink } from 'react-router-dom';
import City from './City';
import Remeber from './Remember';
import Space from './Space';
import Nature from './Nature';

const Category = () => {
  return (
    <div className="sec_wrapper">
      <div style={{ paddingTop: '0.9333rem', marginBottom: '0.9333rem' }}>
        <h1 className="categoryTitle inner">Category</h1>
      </div>
      <div className="inner" style={{ marginBottom: '0.9333rem' }}>
        <div className="categoryNav">
          <NavLink to="/category/city">city</NavLink>
          <NavLink to="/category/remember">remember</NavLink>
          <NavLink to="/category/space">space</NavLink>
          <NavLink to="/category/nature">nature</NavLink>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path="/category/city" component={City} />
          <Route exact path="/category/space" component={Space} />
          <Route exact path="/category/nature" component={Nature} />
          <Route exact path="/category/remember" component={Remeber} />
        </Switch>
      </div>
    </div>
  );
};

export default Category;
