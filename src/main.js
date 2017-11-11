import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu;

class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {collapsed: false}
        this.toggle = this.toggle.bind(this);    //侧边栏样式切换
        this.handleClick = this.handleClick.bind(this);
    }

    toggle () {this.setState({collapsed: !this.state.collapsed});}
    handleClick(item) {
        console.log(item);
    }

    render () {
        let collapsed = this.state.collapsed;
        return (
            <Layout style={{height: '100vh'}}>
                <Header className={'main-header' + (collapsed ? ' main-shrink' : '')}>
                    <Icon className='main-trigger' type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
                </Header>
                <Sider className='main-sider' trigger={null} collapsible collapsed={collapsed}>
                    <div className='main-logo'><Icon type='windows'/></div>
                    <Menu mode='inline' defaultSelectedKeys={['1']} onClick={this.handleClick}>
                        <Menu.Item key='1'>
                            <Icon type='user' /><span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Icon type='video-camera' /><span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Icon type='upload' /><span>nav 3</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="user"/><span>sub1</span></span>}>
                            <Menu.Item key="4">option1</Menu.Item>
                            <Menu.Item key="5">option2</Menu.Item>
                            <Menu.Item key="6">option3</Menu.Item>
                            <Menu.Item key="7">option4</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <div className={'main-content' + (collapsed ? ' main-shrink' : '')}>dfdf</div>
            </Layout>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'))
