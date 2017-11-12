/**
 * 登录界面组件
 * @author yangyunlong
 */
const {ipcRenderer} = window.require('electron');
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './login.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-container'>
                <div className='login-close' onClick={() => ipcRenderer.send('login','close')}><Icon type="close-circle"/></div>
                <div className='login-content'>
                    <div className='login-avatar'><Icon type="pie-chart" style={{fontSize:'200px'}}/></div>
                    <div className='login-welcome'>欢迎登录后台系统</div>
                    <div className='login-input-row'>
                        <Input size="large" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    </div>
                    <div className='login-input-row'>
                        <Input size="large" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                    </div>
                    <div className='login-input-row'>
                        <Button type="primary" htmlType="button">登录</Button>
                    </div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Login/>, document.getElementById('root'))