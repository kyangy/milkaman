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

  state = {
    email: ''
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  _signUp = () => {
    const { signUp } = this.props
    const { email } = this.state

    if (email !== '') signUp(email)
  }

  render() {
    const { signedUp } = this.props.user

    return (
      <div className='container-fluid'>
        <div className={ cx('snow') }>
        </div>
        <div className='row'>
          <div className={ cx('row-container') }>
            <div className='col-md-6'>
              <img className={ cx('img-width') } src='imgs/logo.png' />
            </div>
            <div className='col-md-6'>
              <div className={ cx('signup-container')}>
                <p className='text-xs-center text-md-center'>{ signedUp.message }</p>
                <h2 style={{ color: 'white' }} className='text-xs-center text-md-center'>YOUR CHOCOLATE CRAVINGS DELIVERED TO YOUR DOOR!</h2>
                <input placeholder='EMAIL' onChange={ (email) => this.onChangeEmail(email) } />
                <button onClick={ this._signUp }>SIGN UP</button>
                <div className='text-xs-center text-md-center'>
                  <img className={ cx('img-width') } src='/imgs/milka.png' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
