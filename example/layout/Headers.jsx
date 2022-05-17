import React from 'react';
import { Button } from 'antd';
import logo from '../../public/logo.png';
function Headers() {
    return (
        <div className='sk-header'>
            <div className='sk-header-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='sk-header-menu'>
                <Button type='text' onClick={()=> console.log()}>文档</Button>
                <Button type='text' >组件</Button>
            </div>
        </div>
    )
}
export default Headers;