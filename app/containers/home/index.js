import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './index.css'

const cx = classNames.bind(styles);

class Home extends Component {

  render() {
    return (
      <div className='container-fluid'>
        <h1 className={ cx('hello') }>Hello World!</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Home);
