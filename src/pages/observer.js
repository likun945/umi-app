import React, { useState, useEffect,useRef,useLayoutEffect } from 'react';
import { history } from 'umi';
import { useObserverHook } from '@/hooks'

let observer;
export default function (props) {
    const [state, setState] = useState()
    const ref = useRef(null);
    useObserverHook('#loading', (entries)=> {
        console.log(entries)
    })
    // useLayoutEffect(() => {
    //     // console.log('enter page')
    //     observer = new IntersectionObserver(entries => {
    //         // console.log(entries);
    //     });
        
    //     observer.observe(document.querySelector('#loading'))
        
    //     return () => {
    //         console.log(ref)
    //         // console.log('离开页面')
    //         // if (observer) {
    //         //     // 解绑元素
    //         //     observer.unobserve(document.querySelector('#loading'));

    //         //     // 停止监听
    //         //     observer.disconnect();
    //         // }
    //     }
    // }, [])
    const handleClick = () => {
        history.push('/home')
    }
    return (
        <div>
            observer
            <button onClick={handleClick}>首页</button>
            <div id='loading' ref={ref} style={{ width: '100px', height: '100px', background: '#f60', marginTop: '1000px' }}>
                loading
            </div>
        </div>
    )
}