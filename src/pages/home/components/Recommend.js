import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent{
    render() {
        const { recommendItem } = this.props;
        return (
            <RecommendWrapper>
                { recommendItem.map( item => {
                    return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                })}
                
                
            </RecommendWrapper>     
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommendItem: state.getIn(['home', 'recommendList'])
    }
} 


export default connect(mapStateToProps, null)(Recommend);