import React, { Suspense, Component } from 'react';
import { connect } from 'react-redux';
import { AddPhotoAC, AddUserAC, AddUsersDashBoard, SetPriority, SetFlightDirection, SetDayTime } from '../redux/action';
import './styles/DashBoard.css';
import Navbar1 from "./Navbar";
import Navbar2 from "./Navbar2";

import {Form, Button} from 'antd';
function handleChange(value) {
  console.log(`selected ${value}`);
}

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav1: false,
      showNav2: false
    };
  }

  async componentDidMount() {
   

    const reqUsersLength = await fetch('/api/usersLength', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    let usersLength = await reqUsersLength.json();
    console.log('usersLength', usersLength);

    this.setState({ usersLength: usersLength.response[0].count });

    if (this.props.users.length === 0) {
      this.setState({ loading: true });
    }

    const usersLength_psql_req = await fetch('/api/usersLength_psql', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    let usersLength_psql = await usersLength_psql_req.json();
    console.log(usersLength_psql)
    this.setState({ usersLength_psql: usersLength_psql.response})
      console.log('да записалось', this.state.usersLength_psql);
      console.log('да записалось', this.state.usersLength_psql[0].login);
  }


  nav1 = () =>{
    this.setState({
      showNav1: !this.state.showNav1,
    });
  }

nav2 = () =>{
  this.setState({
    showNav2: !this.state.showNav2,
  });
}

  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <div>
<Button  onClick={this.nav1}>
Навбар1
</Button>
       
<Button onClick={this.nav2}>
Навбар2
</Button>
     
  
{this.state.showNav1 &&
            <Navbar1/>
     }

     {this.state.showNav2 &&
            <Navbar2/>
     }
       

        
      <p>Здесь основной код вашего приложения</p> 

       <p>Список всех зарегистрированных пользователей:</p> 

       {this.state.usersLength_psql && this.state.usersLength_psql.map(el => (
                      
                        <div >
                          Имя: {el.firstname}, Фамилия: {el.lastname}, почта: {el.email}
                        </div>
                      
                    ))}

        <footer className='footer-users'
          align={'center'}>
          <p>Зарегистрировано пользователей: {this.state.usersLength}</p>
        </footer>
      </div >


    );
  }
}

function mapStateToProps(store) {
  return {
    users: store.usersDashBoard,
    user: store.user,
    priority_list_for_application: store.priority,
    flight_direction: store.flight_direction,
    daytime: store.daytime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => {
      dispatch(AddUserAC(user));
    },
    addPhotos: photos => {
      dispatch(AddPhotoAC(photos));
    },
    AddUsersDashBoard: users => {
      dispatch(AddUsersDashBoard(users));
    },
  };
}
const Form_You = Form.create({ name: 'form_you' })(DashBoard)
export default connect(mapStateToProps, mapDispatchToProps)(Form_You)