import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './index.css'

const cx = classNames.bind(styles);

class Home extends Component {

  render() {
    return (
      <div className='container-fluid'>
        <p className='text-center'>KYANGY</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Home);
