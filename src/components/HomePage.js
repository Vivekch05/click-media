import React, { Component } from 'react'
import { Layout, Drawer, Navigation, Content } from 'react-mdl';
import Main from './Main';
import { Link, HashRouter } from 'react-router-dom';
export default class HomePage extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Layout fixedDrawer >
                        <Drawer style={{ background: "linear-gradient(to bottom, #000099 30%, #0099cc 70%)" }}>
                            <Navigation style={{ marginTop: "250px" }}>
                                <Link style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', textDecoration: "none", }} to="/">Profile</Link>
                                <Link style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', textDecoration: "none", }} to="/Posts">Posts</Link>
                                <Link style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', textDecoration: "none", }} to="/Gallery">Gallery</Link>
                                <Link style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', textDecoration: "none", }} to="/ToDo">ToDo</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <Main />
                        </Content>
                    </Layout>
                </div>
            </HashRouter>
        )
    }
}
