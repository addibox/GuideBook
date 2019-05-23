import { fromJS } from 'immutable'; 

import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    listItem: [],
    recommendList: [],
    listPage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        listItem: fromJS(action.listItem),
        recommendList: fromJS(action.recommendList)
    });
}

const addHomeList = (state, action) => {
    return state.merge({
        listItem: state.get('listItem').concat(action.list),
        listPage: action.nextPage
    });
}

export default (state = defaultState, action ) => {
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA: 
            return changeHomeData(state, action);
        case actionTypes.ADD_HOME_LIST:
            return addHomeList(state,action);
        case actionTypes.CHANGE_SHOW_SCROLL:  
            return state.set('showScroll', action.show);
        default: 
            return state;
    }
} 
