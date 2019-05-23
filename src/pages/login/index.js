import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LoginWrapper, LoginBox, LoginInput, Button } from './style';
import { actionCreators } from './store';

class Login extends Component{
    render() {
        const { loginState } = this.props;
        if(!loginState){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder="Account" ref={input =>{ this.account = input }}/>
                        <LoginInput placeholder="Password" type="password" ref={input =>{ this.password = input }}/>
                        <Button onClick={()=>this.props.handleLogin(this.account, this.password)}>Register</Button>
                    </LoginBox>
                </LoginWrapper>)
        }else{
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => ({
    loginState: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    handleLogin(account, password){
        dispatch(actionCreators.login(account.value, password.value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);