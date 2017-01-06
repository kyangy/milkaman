import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Scroll from 'react-scroll'
import HandDown from 'react-icons/lib/fa/hand-o-down'
import Carousel from 'nuka-carousel'

import { signUp } from '../../actions/users'

import classNames from 'classnames/bind'
import styles from './index.css'

const cx = classNames.bind(styles)
const Link = Scroll.Link
const Element = Scroll.Element

function mapStateToProps(state) {
  const { user } = state
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signUp
  }, dispatch)
}

class Home extends Component {

  render() {
    const { signedUp } = this.props.user

    return (
      <div className='container-fluid'>
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
