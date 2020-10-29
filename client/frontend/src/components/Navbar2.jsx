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
        
        <div className="head-panel">
            <div className='head-part'>
              <Button type="primary" className='bidding-btn' onClick={this.onNewWishList}>Новая заявка</Button>


              <div className='bidding-info'>
                <span className='bidding-info--start'>Старт подачи</span>
                <span className='bidding-info--finish'>Финиш подачи</span>
              </div>
              <div className='bidding-date'>
                <span className='bidding-date--digit'>{"firstDay"}</span>
                <span className='bidding-date--digit'>{"lastDay"}</span>
              </div>
              <div className='date-clock'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.0001 4.8148C8.48154 4.82996 4.81494 8.48298 4.81494 13C4.81494 17.517 8.48154 21.17 13.0001 21.1852V4.8148Z"
                    fill="#FFDE84" />
                  <path
                    d="M13.0001 25.6905C6.00481 25.6905 0.30957 19.9953 0.30957 13C0.30957 6.00477 6.00481 0.309525 13.0001 0.309525C19.0667 0.309525 24.2977 4.62739 25.4584 10.5702C25.6132 11.3595 25.6905 12.1798 25.6905 13C25.6905 19.9953 19.9953 25.6905 13.0001 25.6905ZM13.0001 1.74881C6.7941 1.74881 1.74886 6.79405 1.74886 13C1.74886 19.206 6.7941 24.2512 13.0001 24.2512C19.206 24.2512 24.2512 19.206 24.2512 13C24.2512 12.2726 24.1893 11.5452 24.0501 10.8488C23.0132 5.57143 18.3703 1.74881 13.0001 1.74881Z"
                    fill="#5459CD" />
                  <path
                    d="M13 26C5.83453 26 0 20.1655 0 13C0 5.83453 5.83453 0 13 0C19.206 0 24.5762 4.42619 25.7679 10.5083C25.9226 11.3286 26 12.1643 26 13C26 20.1655 20.1655 26 13 26ZM13 0.619048C6.175 0.619048 0.619048 6.175 0.619048 13C0.619048 19.825 6.175 25.381 13 25.381C19.825 25.381 25.381 19.825 25.381 13C25.381 12.1952 25.3036 11.406 25.1488 10.6321C24.0345 4.82857 18.9119 0.619048 13 0.619048ZM13 24.5607C6.62381 24.5607 1.43929 19.3762 1.43929 13C1.43929 6.62381 6.62381 1.43929 13 1.43929C18.525 1.43929 23.2917 5.37024 24.3441 10.7714C24.4833 11.4988 24.5607 12.2417 24.5607 12.9845C24.5607 19.3762 19.3762 24.5607 13 24.5607ZM13 2.05833C6.96429 2.05833 2.05833 6.96429 2.05833 13C2.05833 19.0357 6.96429 23.9417 13 23.9417C19.0357 23.9417 23.9417 19.0357 23.9417 13C23.9417 12.2881 23.8798 11.5917 23.7405 10.9107C22.7345 5.7881 18.231 2.05833 13 2.05833Z"
                    fill="#5459CD" />
                  <path
                    d="M19.8874 15.4762H12.9231C11.9326 15.4762 11.1433 14.6869 11.1433 13.6964V4.56547C11.1433 3.93095 11.6695 3.40475 12.304 3.40475C12.9385 3.40475 13.4647 3.93095 13.4647 4.56547V13.1548H19.8874C20.5219 13.1548 21.0481 13.681 21.0481 14.3155C21.0481 14.95 20.5219 15.4762 19.8874 15.4762Z"
                    fill="#5459CD" />
                  <path
                    d="M13.0003 16.0953C14.7097 16.0953 16.0955 14.7095 16.0955 13C16.0955 11.2906 14.7097 9.90477 13.0003 9.90477C11.2908 9.90477 9.90503 11.2906 9.90503 13C9.90503 14.7095 11.2908 16.0953 13.0003 16.0953Z"
                    fill="#5459CD" />
                </svg>
              </div>
            </div>
            <div className='head-part'>
              <div className='bidding-stats'>
                <span className='bidding-stats--first'>
                  70
                  </span>
                  /
                  <span className='bidding-stats--second'>
                  30
                  </span>%
                </div>


              {(this.props.user.crewRole === 'командир') &&
                <div className='stats-icon' onClick={() => this.props.history.push('/dashboardC')}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <path
                        d="M33 20C33 27.1792 27.1792 33 20 33C12.8208 33 7 27.1792 7 20C7 12.8208 12.8208 7 20 7C26.3247 7 31.5978 11.5208 32.759 17.5096C32.9197 18.3129 33 19.1455 33 20Z"
                        fill="#5459CD" />
                    </g>
                    <g filter="url(#filter1_d)">
                      <path
                        d="M33 18.0087C26.593 19.5005 20 21 20 21V7C26.4442 7 31.8168 11.7355 33 18.0087Z"
                        fill="#FFDE84" />
                    </g>
                    <defs>
                      <filter id="filter0_d" x="0" y="0" width="40" height="40"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.5" />
                        <feColorMatrix type="matrix"
                          values="0 0 0 0 0.328368 0 0 0 0 0.3474 0 0 0 0 0.804167 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix"
                          result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic"
                          in2="effect1_dropShadow" result="shape" />
                      </filter>
                      <filter id="filter1_d" x="13" y="0" width="27" height="28"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.5" />
                        <feColorMatrix type="matrix"
                          values="0 0 0 0 0.328368 0 0 0 0 0.3474 0 0 0 0 0.804167 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix"
                          result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic"
                          in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              }

              {(this.props.user.crewRole === 'КВС') &&
                <div className='stats-icon' onClick={() => this.props.history.push('/dashboardC')}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <path
                        d="M33 20C33 27.1792 27.1792 33 20 33C12.8208 33 7 27.1792 7 20C7 12.8208 12.8208 7 20 7C26.3247 7 31.5978 11.5208 32.759 17.5096C32.9197 18.3129 33 19.1455 33 20Z"
                        fill="#5459CD" />
                    </g>
                    <g filter="url(#filter1_d)">
                      <path
                        d="M33 18.0087C26.593 19.5005 20 21 20 21V7C26.4442 7 31.8168 11.7355 33 18.0087Z"
                        fill="#FFDE84" />
                    </g>
                    <defs>
                      <filter id="filter0_d" x="0" y="0" width="40" height="40"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.5" />
                        <feColorMatrix type="matrix"
                          values="0 0 0 0 0.328368 0 0 0 0 0.3474 0 0 0 0 0.804167 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix"
                          result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic"
                          in2="effect1_dropShadow" result="shape" />
                      </filter>
                      <filter id="filter1_d" x="13" y="0" width="27" height="28"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.5" />
                        <feColorMatrix type="matrix"
                          values="0 0 0 0 0.328368 0 0 0 0 0.3474 0 0 0 0 0.804167 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix"
                          result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic"
                          in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              }

              {/* Модальное окно профиля */}
              {/* <Profile isOpen={this.state.modalProfileShow} closeFunc={() => this.setState({ modalProfileShow: !this.state.modalProfileShow })} /> */}
              {/* Модальное окно профиля конец */}


              <Avatar
                className="user-avatar"
                size="large"
                shape="square"
                icon="user"
                src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-lady-with-red-glasses.png"
              />

              <div className='user-info'>
                <span className='user-info--name'>{this.props.user &&
                  this.props.user.firstName}</span>
                <span className='user-info--name'>{this.props.user &&
                  this.props.user.lastName}</span>
              </div>
              {/* </Popover> */}
              <Popover 
              // content={content(() => {
              //   this.setState({ modalProfileShow: !this.state.modalProfileShow });
              // })} 
              placement="bottom">
                <div className="user-more">
                  <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#686CD7" />
                    <circle cx="2" cy="7" r="2" fill="#686CD7" />
                    <circle cx="2" cy="12" r="2" fill="#686CD7" />
                  </svg>
                </div>
              </Popover>
            </div>
          </div>
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
