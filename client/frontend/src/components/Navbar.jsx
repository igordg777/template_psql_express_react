import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Menu, Icon, Avatar, Popover, Button } from 'antd';
import { withCookies } from 'react-cookie';
import { connect } from "react-redux";
import { AddUserAC, AddPhotoAC } from "../redux/action";


class Navigation extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  async componentDidMount() {

    // Получение и запись в редакс пользователя 
    // const response = await fetch('/api/profileOwner', {
    //   headers: { 'Content-Type': 'application/json' }
    // })
    // const result = await response.json();
    // console.log(result);
    // if (result.response !== 'fail') {
    //   // const { first_name, last_name, email, role, age, metro } = result.response;
    //   await this.props.addPhotos(result.response.photo)
    //   // await this.props.addUser({ first_name, last_name, email, role, age, metro });
    //   await this.props.addUser(result.response);
    // }

    // console.log('есть', this.props.user)
  }

  render() {
    return (
      <div>
        <Menu mode="horizontal" theme='dark' style={{ backgroundColor: '#4A76A8', color: '#ffffff' }}>
          <Menu.Item key='profiles'>
            <Link to={'/profile'}>
              <Avatar size="large" shape="square" icon="user" src='https://pbs.twimg.com/profile_images/715089417443082241/lYpdllGs_400x400.jpg' />
              &nbsp;&nbsp;&nbsp;&nbsp;
                <span className='navbarUserName'>Имя</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='team' className='navbarText'>
            <Link to={'/dashboard'}>
              <Icon type="team" />
              Главная
            </Link>
          </Menu.Item>

          <Menu.Item key='logout' className='navbarText' style={{ float: 'right' }}>
            <Link to={'/logout'}>
              <Icon type="logout" />
              ВЫЙТИ
            </Link>
          </Menu.Item>
          <Menu.Item key='donate' className='navbarText' style={{ float: 'right' }}>
            <Link to={'/donate'}>
              <Icon type="coffee" />
             Пользователи
            </Link>
          </Menu.Item>
        </Menu>
        
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    photos: store.photos,
    user: store.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => {
      dispatch(AddUserAC(user));
    },
    addPhotos: photos => {
      dispatch(AddPhotoAC(photos))
    }
  };
}

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Navigation));
