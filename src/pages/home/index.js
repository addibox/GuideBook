import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import { actionCreators } from './store';
import { BackTop } from './style';


class Home extends Component{
    
    handleScrollTop(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
        <HomeWrapper>
            <HomeLeft>
                <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner"/>
                <Topic />
                <List />
            </HomeLeft>
            <HomeRight>
                <Recommend />
            </HomeRight>
            { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Back to Top</BackTop> : null}
        </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeDate();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeShowScroll)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeShowScroll)
    }

}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeDate() {
        dispatch(actionCreators.getHomeData())
    },
    changeShowScroll(){
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreators.changeShowScroll(true))
        }else{
            dispatch(actionCreators.changeShowScroll(false))
        }
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(Home);
