import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link, withRouter,Switch,Route } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_log: '',
      password_log: ''
    }
  

  }
  LoginEmail = (e) => {
    this.setState({ email_log: e.target.value });
  }

  LoginPassword = (e) => {
    this.setState({ password_log: e.target.value });
  }
 
  sendUserLoginTo = () => {
    this.props.checkLogin(this.state.email_log, this.state.password_log)
  }
  

   
  render() {
    return (
      <Container style={{ marginTop: '100px' }}>
        <h1>Wallcome !!</h1>
        <Form>
          <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}><Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="email_log" value={this.state.email_log} onChange={this.LoginEmail} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password_log" value={this.state.password_log} onChange={this.LoginPassword} />
          </Form.Group>
          <div>
            <Button variant="primary" type="submit" onClick={this.sendUserLoginTo}>
             <Link to="" style={{ color: 'red' }} >Sign-Up</Link>
            </Button>
          </div>
          
          <div> 
         
          <Link to="/Register" style={{ color: 'red' }}>Enter to Register</Link> 
            
             
          </div>
        </Form>
      </Container>
    )
  }
}
export default withRouter(Login)