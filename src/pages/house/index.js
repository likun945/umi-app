import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Info from './components/Info';
import Lists from './components/Lists';
import Footer from './components/Footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import { useLocation } from 'umi';

import './index.less';

export default function (props) {
  const {
    house: {
      detail,
      getDetailAsync,
      getCommentsAsync,
      comments,
      reloadComments,
      reloadCommentsNum,
      showLoading,
      resetData,
      order,
      hasOrderAsync,
      addOrderAsync,
      delOrderAsync,
    },
  } = useStoreHook();
  const { query } = useLocation();

  /**
   * 1，监听loading是否展示出来
   * 2，出发reload，修改分页
   * 3，监听reload变化，重新请求接口
   * 4，拼装数据
   */
  useObserverHook(
    '#' + CommonEnum.LOADING_ID,
    (entries) => {
      if (
        comments &&
        comments.length &&
        showLoading &&
        entries[0].isIntersecting
      ) {
        // console.log(123)
        reloadComments();
      }
    },
    [comments, showLoading],
  );

  useEffect(() => {
    getDetailAsync({
      id: query?.id,
    });
  }, []);

  useEffect(() => {
    getCommentsAsync({
      id: query?.id,
    });
  }, [reloadCommentsNum]);

  useEffect(() => {
    return () => {
      resetData({
        detail: {},
      });
    };
  }, []);
  useEffect(() => {
    hasOrderAsync({
      id: query?.id,
    });
  }, []);
  const handleBtnClick = (id) => {
    if (!id) {
      addOrderAsync({
        id: query?.id,
      });
    } else {
      delOrderAsync({
        id: order.id,
      });
    }
  };
  return (
    <div className="house-page">
      {/**banner */}
      <Banner banner={detail?.banner} />
      {/**房屋信息 */}
      <Info detail={detail?.info} order={order} btnClick={handleBtnClick} />
      {/**评论列表 */}
      <Lists lists={comments} showLoading={showLoading} />
      {/**footer */}
      <Footer />
    </div>
  );
}
