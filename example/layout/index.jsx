import React from 'react';
import { Layout, Menu } from 'antd';
import Headers from './Headers';
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import {comDataConfig} from '../config';
console.log(comDataConfig,'comDataConfig')
import './index.less'
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
function Entry(props) {
    const {location:{pathname}} = props;
    const pathUrl = pathname.replace('/components/','').replace('/','-');
    const defaultSelectedKeys = pathUrl !=='-' && pathUrl || 'business-imgcropper';
    const defaultOpenKeys = pathUrl.split('-')[0] || 'business';
    return <div className='container'>
        <Layout className='layout'>
            <Header className='header'>
                <Headers />
            </Header>
            <Layout className='content'>
                <Sider className='content-sider'>
                    <Menu
                        style={{ width: 256, height: '100%', overflow: 'auto' }}
                        defaultOpenKeys={[`${defaultOpenKeys}`]}
                        defaultSelectedKeys={[`${defaultSelectedKeys}`]}
                        mode='inline'
                        className='content-sider'
                    >
                        <SubMenu
                            key='business'
                            title={
                                <span>
                                    <span>Business</span>
                                </span>
                            }
                        >
                            <Menu.Item key='business-imgcropper'><Link to={'/components/business/imgcropper'}>ImgCropper</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key='stateless'
                            title={
                                <span>
                                    <span>Stateless</span>
                                </span>
                            }
                        >
                            <Menu.Item key='stateless-button'><Link to={'/components/stateless/button'}>Button</Link></Menu.Item>

                        </SubMenu>
                    </Menu>
                </Sider>
                <Content className='content-container'>
                    <Switch>
                        {
                            comDataConfig.map((item)=> {
                                return <Route exact path={item.pathname } component={()=>{return item.component()}} key={item.pathname}/>
                            } )
                        }
                        <Redirect to='/components/business/imgcropper'/>
                    </Switch>
                </Content>
            </Layout>
            <Footer className='footer'>Footer</Footer>
        </Layout></div>
}
export default Entry;