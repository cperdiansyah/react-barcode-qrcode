// import React from 'react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { QrCodeProps } from './types';

import './index.css';

const QrCode: React.FC<QrCodeProps> = ({ renderType = 'svg', ...props }) => {
  const ENUM_QRCODE = {
    svg: <QRCodeSVG {...props} />,
    canvas: <QRCodeCanvas {...props} />,
  };

  return <div className='qr-container'>{ENUM_QRCODE[renderType]}</div>;
};

export default QrCode;
