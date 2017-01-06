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
        <div className={ cx('snow') }></div>
        <div className='row'>
          <div className={ cx('row-container') }>
            <div className='col-md-6'>
              <img className={ cx('img-width') } src='imgs/logo3.svg' />
            </div>
            <div className='col-md-6'>
              <div className={ cx('signup-container')}>
                <p style={{ color: 'white' }} className='text-xs-center text-md-center'>{ signedUp.message }</p>
                <h2 style={{ color: 'white' }} className='text-xs-center text-md-center'>YOUR CHOCOLATE CRAVINGS DELIVERED TO YOUR DOOR!</h2>
                <input placeholder='EMAIL' onChange={ (email) => this.onChangeEmail(email) } />
                <button onClick={ this._signUp }>YES, SIGN ME UP ON THE WAITLIST!</button>
                <div className='text-xs-center text-md-center'>
                  <img className={ cx('img-width') } src='/imgs/milka.png' />
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }} className='text-xs-center text-md-center'>
              <Link activeClass="active" to='works' spy={true} smooth={true}><HandDown className={ cx('hand') } style={{ paddingTop: '20px' }} color='white' size={70}/></Link>
            </div>
          </div>
        </div>

        <Element name='works'>
          <div className={ cx('three-steps') }>
            <div className='row text-xs-center text-md-center'>
              <h3 style={{ paddingBottom: '40px' }}>HOW IT WORKS</h3>
              <div className='col-md-4'>
                <img className={ cx('step-icon') } src='imgs/choco.svg' />
                <p>SWEETS DELIVERED</p>
                <p>Milka chocolates arrive every month for a few bucks, so you can satisfy your sweet cravings.</p>
              </div>
              <div className='col-md-4'>
                <img className={ cx('step-icon') } src='imgs/calendar.svg' />
                <p>MONTHLY SUBSCRIPTION</p>
                <p>Whatever day you subscribed with us, chocolate will be delivered every month of that day.</p>
              </div>
              <div className='col-md-4'>
                <img className={ cx('step-icon') } src='imgs/tooth.svg' />
                <p>CANCEL ANYTIME</p>
                <p>Feeling a cavity? You can leave the the Club anytime you want.</p>
              </div>
            </div>

            <div className='row' style={{ paddingTop: '40px' }}>
              <div className={ cx('bottom-signup') }>
                <p style={{ color: 'white' }} className='text-xs-center text-md-center'>{ signedUp.message }</p>
                <input placeholder='EMAIL' onChange={ (email) => this.onChangeEmail(email) } />
                <button onClick={ this._signUp }>YES, SIGN ME UP ON THE WAITLIST!</button>
              </div>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
