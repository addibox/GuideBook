import React, { PureComponent } from 'react';

import { LinkWrapper, QrCode, Advertise } from '../style';

class Link extends PureComponent{
    render() {
        return (
            <LinkWrapper>
                <QrCode>
                    <img
                    className="qr-pic" 
                    alt="QRcode"
                    src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                </QrCode>
                <Advertise></Advertise>
            </LinkWrapper>
        )
    }
}

export default Link;