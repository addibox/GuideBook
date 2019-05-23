import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';


class Header extends Component {
    getListArea () {
        const { list, focused, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = []
        
        if(newList.length) {
            for( let i = (page - 1) * 5; i < page * 5; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
            }
        }

        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        Popular Search
                        <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
                            <span className="iconfont spin" ref={ (icon) => {this.spinIcon = icon}}>&#xe746;</span>
                            Switch
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>    
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const { focused, list, handleInputFocus, handleInputBlur, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">Home</NavItem>
                    <NavItem className="left">Download App</NavItem>
                    <NavItem className="right">
                        {/* <span className="iconfont">&#xe602;</span> */}
                    </NavItem>
                    {
                        login ? 
                        <NavItem onClick={logout} className="right">LogOut</NavItem>: 
                        <Link to="/login"><NavItem className="right">LogIn</NavItem></Link>
                    }
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe603;</span>
                        {this.getListArea()}
                    </SearchWrapper>    
                    <Addition>
                        <Button className="writing">
                        <span className="iconfont">&#xe601;</span>
                        Write Article</Button>
                        <Button className="reg">Sign In</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/gi, '');
            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);