import axios from 'axios';
import * as actionTypes from './actionTypes';


const changeArticleDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
});

export const changeDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id)
        .then( res => {
            const result = res.data.detail;
            dispatch(changeArticleDetail(result.title, result.content))
        });
    }
}
