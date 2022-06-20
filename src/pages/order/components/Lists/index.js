import React, { useState, useEffect } from 'react';
import OrderItem from '../Item';
import { ActivityIndicator } from 'antd-mobile';
import { isEmpty } from 'project-libs';
import { ShowLoading } from '@/components';
import { OrderSkeletons } from '@/skeletons';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {
    setInterval(() => {
      if (isEmpty(props?.orders)) {
        setState(true);
      }
    }, 1500);
  }, []);
  // console.log(props)

  return (
    <div>
      {isEmpty(props?.orders) ? (
        <div>
          {state ? (
            <ShowLoading showLoading={false}></ShowLoading>
          ) : (
            <OrderSkeletons />
          )}
        </div>
      ) : (
        <div className="tab-lists">
          {props.orders.map((item) => (
            <OrderItem type={props.type} key={item.id} {...item}></OrderItem>
          ))}
        </div>
      )}
    </div>
  );
}
