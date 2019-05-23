import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DetailWrapper, Header, Content } from './style';
import * as actionCreators from './store/actionCreators'; 

class Detail extends Component{
    render() {
        return (
        <DetailWrapper>
            <Header>{this.props.title}</Header>
            <Content dangerouslySetInnerHTML={{ __html: this.props.content}}>
            </Content>
        </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.changeDetail(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);