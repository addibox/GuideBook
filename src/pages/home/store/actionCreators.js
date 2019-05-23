import axios from 'axios';
import { fromJS } from 'immutable';

import * as actionTypes from './actionTypes';


const changeHomeData = (result) => {
    return {
        type: actionTypes.CHANGE_HOME_DATA,
        listItem: result.listItem,
        recommendList: result.recommendList,
        topicList: result.topicList
    }
}

const addHomeList = (list, nextPage) => ({
    type: actionTypes.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then( res => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }       
}

export const loadMoreData = (page) => {
    return (dispatch) => {
        axios.get('/api/list-data.json?page=' + page)
            .then( res => {
                const result = res.data.moreList
                dispatch(addHomeList(result, page+1));
            })
    }
}

export const changeShowScroll = (show) => ({
    type: actionTypes.CHANGE_SHOW_SCROLL,
    show
})
