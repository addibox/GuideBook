import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TopicWrapper, TopicItem } from '../style'; 

class Topic extends PureComponent{
    render() {
        const { topicList } = this.props;
        return (
        <TopicWrapper>          
                { topicList.map( list => (
                        <TopicItem key={list.get('id')}>
                            <img
                            className="item-pic"
                            alt="item-pic" 
                            src={list.get('imgUrl')} />
                            {list.get('title')}
                        </TopicItem> 
                    ))
                }
        </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList'])
    }
}

export default connect(mapStateToProps, null)(Topic);