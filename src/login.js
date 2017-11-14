/**
 * 登录界面组件
 * @author yangyunlong
 */
const {ipcRenderer} = window.require('electron');
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './login.css'
import { Icon, Input, Button, Checkbox, message } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {account:'', password:'', loading:false};
        this.login = this.login.bind(this);
    }

    login() {
        message.error('用户名或密码错误！');
    }

    render() {
        let state = this.state;
        return (
            <div className='login-container'>
                <div className='login-close' onClick={() => ipcRenderer.send('login','close')}><Icon type="close-circle"/></div>
                <div className='login-content'>
                    <div className='login-avatar'><Icon type="pie-chart" style={{fontSize:'200px'}}/></div>
                    <div className='login-welcome'>欢迎登录后台系统</div>
                    <div className='login-input-row'>
                        <Input
                            size="large"
                            prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                            placeholder="用户名"
                            disabled={state.loading}
                            value={state.account}
                            onChange={(e) => this.setState({account:e.target.value})}
                        />
                    </div>
                    <div className='login-input-row'>
                        <Input
                            size="large"
                            prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                            type="password"
                            placeholder="密码"
                            disabled={state.loading}
                            value={state.password}
                            onChange={(e) => this.setState({password:e.target.value})}
                        />
                    </div>
                    <div className='login-input-row'>
                        <Button
                            type="primary"
                            size='large'
                            htmlType="button"
                            loading={state.loading}
                            className='login-button'
                            onClick={this.login}
                        >登录</Button>
                    </div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Login/>, document.getElementById('root'))