import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {   Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'
import CamperList from './components/CamperList'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' href={'/'} active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <FixedMenu/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <MyFirstComponent />
        <p className="App-intro">
          This is a super cool app! <code>src/App.js</code> and save to reload. All rights reserved, @LtWorf.com
        </p>
        <CamperList/>
      </div>
    );
  }
}


const MyFirstComponent = () => {
  return <div>Hello World</div>
}

export default App;

