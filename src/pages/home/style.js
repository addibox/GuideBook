import styled from 'styled-components';


export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    padding-top: 30px;
    float: right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-bottom: 10px;
    margin-left: 18px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .item-pic{
        display: block;
        width: 32px;
        height: 32px;
        float: left;
        margin-right: 10px;
    }

`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .item-pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    float: right;
    width: 500px;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 625px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    font-size: 15px;
    margin: 30px auto 60px;
    color: #fff;
    background: #a5a5a5;
    text-align: center;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 5px;
    background: url(${(props)=>props.imgUrl});
    background-size: contain;
`;

export const LinkWrapper = styled.div`
    
    width: 280px;
    height: 82px;
`;

export const QrCode = styled.div`

    border: 1px solid #dcdcdc;
    border-radius: 5px;
    vertical-align: middle;
    .qr-pic{
        width: 60px;
        height: 60px;
    }
`;

export const Advertise = styled.div`

`;

export const WriterWrapper = styled.div`
    width: 280px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const WriterTopic = styled.div`

`;

export const SingleWriter = styled.div`

`;

export const BackTop = styled.div`
    position: fixed;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    right: 100px;
    bottom: 100px;
    font-size: 12px;
    padding-right: 5px;
    padding-left: 5px;
    cursor: pointer;
`;

