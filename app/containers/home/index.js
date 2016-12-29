import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { signUp } from 'actions/users'

import classNames from 'classnames/bind';
import styles from './index.css'

const cx = classNames.bind(styles);

class Home extends Component {

  state = {
    email: ''
  }

  onChangeEmail = (email) => {
    this.setState({ email: email })
  }

  _signUp = () => {
    const { signUp } = this.props
    const { email } = this.state

    console.log(email)

    if (email !== '') signUp(email)
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <img className={ cx('logo') } src='imgs/logo.png' />
          </div>
          <div className='col-md-6'>
            <h1>Your chocolate cravings delivered to your door!</h1>
            <input placeholder='Email' onChange={ (email) => this.onChangeEmail(email) } />
            <button onClick={ this._signUp }>Sign Up</button>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <img className={ cx('logo') } src='/imgs/oreo.png' />
          </div>
          <div className='col-md-6'>
            <img className={ cx('logo') } src='/imgs/milkman.png' />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signUp
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
