import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './example.less';
//组件本身
const Example = ({ count, dispatch }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Hight Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};
// 监听属性，建立组件和数据的映射关系
function mapStateToProps(state) {
  return { count: state.count };
}

Example.propTypes = {
  count: PropTypes.object.isRequired,
};
//关联model
export default connect(mapStateToProps)(Example);
