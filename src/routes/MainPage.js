import React from 'react';
import { connect } from 'dva';
import styles from './MainPage.css';

function MainPage() {
  return (
    <div>User Router Component</div>
  );
}

MainPage.prototype = {

};

export default connect()(MainPage);
