import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import routes from './routes';
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu;

class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {collapsed: false,view:'index'}
        this.toggle = this.toggle.bind(this);    //侧边栏样式切换
        this.toggleView = this.toggleView.bind(this);
    }

    toggle () {this.setState({collapsed: !this.state.collapsed});}
    toggleView(item) {
        if (this.state.view != item.key && 'undefined' !== typeof routes[item.key]) {
            this.setState({view:item.key});
        }
    }

    render () {
        let collapsed = this.state.collapsed;
        const View = routes[this.state.view];
        return (
            <Layout style={{height: '100vh'}}>
                <Header className={'main-header' + (collapsed ? ' main-spread' : '')}>
                    <Icon className='main-trigger' type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
                </Header>
                <Sider className='main-sider' trigger={null} collapsible collapsed={collapsed}>
                    <div className='main-logo'><Icon type='windows'/></div>
                    <Menu mode='inline' defaultSelectedKeys={['index']} onClick={this.toggleView}>
                        <Menu.Item key='index'>
                            <Icon type='home'/><span>首页</span>
                        </Menu.Item>
                        <Menu.Item key='text'>
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
                <div className={'main-container' + (collapsed ? ' main-container-spread' : '')}>
                    <View/>
                </div>
            </Layout>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'))
