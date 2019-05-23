import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ListItem, ListInfo, LoadMore} from '../style';
import { actionCreators } from '../store';

class List extends PureComponent{
    
    render() {
        const { loadMore, page } = this.props;
        return (
            <div>
                {
                    this.props.listItem.map( (item, index) => {
                        return (
                            <Link to={'/detail/' + item.get('id')} key={index}>
                                <ListItem>
                                    <img className="item-pic" 
                                        alt="item-pic" 
                                        src={item.get('imgUrl')} />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={() => loadMore(page)}>Load More</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listItem: state.get('home').get('listItem'),
    page: state.getIn(['home', 'listPage'])
});

const mapDispatchToProps = (dispatch) => ({
    loadMore(page){
        dispatch(actionCreators.loadMoreData(page))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(List);