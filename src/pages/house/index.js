import React, { Component } from 'react';
import Banner from './components/Banner';
import Info from './components/Info';
import Lists from './components/Lists';
import Footer from './components/Footer';
import './index.less';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="house-page">
        {/* banner */}
        <Banner></Banner>
        {/* 房屋信息 */}
        <Info></Info>
        {/* 评论列表 */}
        <Lists></Lists>
        {/* footer */}
        <Footer></Footer>
      </div>
    );
  }
}
