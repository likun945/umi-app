import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Hot from './components/hot'
import Search from './components/search'
import './index.less';

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className='home'>
        {/* header 登录 */}
        <Header />
        {/* header 搜索 */}
        <Search />
        {/* header 热门民俗 */}
        <Hot />
    </div>
  )
}