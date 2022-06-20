import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { timer } from '@/utils';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);
  const renderPay = () => {
    switch (props.type) {
      case 0:
        return (
          <Button type="warning" size="small">
            去支付
          </Button>
        );
      case 1:
        return <Button></Button>;
    }
  };
  // console.log(props)
  return (
    <div className="order-item">
      <img img="order" src={props?.house?.imgs[0]?.url} />
      <div className="center">
        <div className="title">{props?.house?.title}</div>
        <div className="price">{props?.house?.price}</div>
        <div className="time">{timer(props?.house?.createTime, 'day')}</div>
      </div>
      <div className="pay">{renderPay()}</div>
    </div>
  );
}
