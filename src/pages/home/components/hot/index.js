import React, { useState, useEffect } from 'react';
import { history } from 'umi';

export default function (props) {
  const { houses } = props;

  useEffect(() => {}, []);
  const handleClick = (id) => {
    history.push({
      pathname: '/house',
      query: {
        id,
      },
    });
  };

  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {houses.map((item) => (
          <div
            className="hot-lists-item"
            key={item.id}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <img className="img" alt="img" src={item?.imgs[0]?.url}></img>
            <div className="title">{item.title}</div>
            <div className="info">{item.info}</div>
            <div className="price">￥{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
