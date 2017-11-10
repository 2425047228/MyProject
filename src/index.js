import React, {Component} from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default class Index extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.params);
    }
    
    render() {
        //return (<div style={{width:'100%',height:'100%'}}>index</div>);
        return (
            <Layout>
            <Header>header</Header>
            <Layout>
              <Sider>left sidebar</Sider>
              <Content>main content</Content>
              <Sider>right sidebar</Sider>
            </Layout>
            <Footer>footer</Footer>
          </Layout>
        );
    }
}