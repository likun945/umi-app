import React, { useState, useEffect } from 'react';
import { List } from 'antd-mobile';
import { history } from 'umi';
import './index.less';

export default function (props) {
  const [state, setState] = useState();
  const handleClick = () => {
    history.push({
      pathname: '/user/edit',
      query: {},
    });
  };
  useEffect(() => {}, []);

  return (
    <div className="user-page">
      {/**用户信息 */}
      <div className="info">
        <div className="set" onClick={handleClick}>
          设置
        </div>
        <div className="user">
          <img alt="user" src={''} />
          <div className="tel">{1}</div>
          <div className="sign">{2}</div>
        </div>
      </div>
      {/**列表 */}
      <div className="lists">
        <List>
          <List.Item arrow="horizontal">用户协议</List.Item>
          <List.Item arrow="horizontal">常见问题</List.Item>
          <List.Item arrow="horizontal">联系客服</List.Item>
        </List>
      </div>
    </div>
  );
}
