import React, { PureComponent } from 'react';

import { WriterWrapper, WriterTopic, SingleWriter } from '../style';

class Writer extends PureComponent{
    render() {
        return (
            <WriterWrapper>
                <WriterTopic></WriterTopic>
                <SingleWriter></SingleWriter>
            </WriterWrapper>
        )
    }
}

export default Writer;