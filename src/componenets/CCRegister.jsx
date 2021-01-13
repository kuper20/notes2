import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

 class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            
        }
    }
    changFirstName = (e) => {
        this.setState({ first_name: e.target.value });
       
    }
    changLastName = (e) => {
        this.setState({ last_name: e.target.value });
    }
    changeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    changePassword = (e) => {
        this.setState({ password: e.target.value });

    }

    

    handleSubmit =() => {
        if(this.state.first_name===''||this.state.last_name===''
        ||this.state.email===''||this.state.password===''){
           alert("One of your fields is probably empty ")
            return 
        }
        let name={first_name: this.state.first_name,last_name:this.state.last_name}
        this.props.sendNameUser(name)
        let obj = {first_name: this.state.first_name,last_name:this.state.last_name,email:this.state.email, password:this.state.password}
        this.props.sendUserToManage(obj)
        this.props.history.push({
            pathname:"/"
        })
    }
    render() {
        
        return (
              
            <Container style={{ marginTop: '100px' }}>
                <h1>Register</h1>
                <Form>
                    <Form.Group controlId="formBasicFirstName" style={{ width: '300px' }}>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name="first_name" value={this.state.first_name}   onChange={this.changFirstName} />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName" style={{ width: '300px' }}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" name="last_name" value={this.state.last_name}  onChange={this.changLastName} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email}  onChange={this.changeEmail} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword"  style={{ width: '300px' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  placeholder="Password" name="password" value={this.state.password}   onChange={this.changePassword} />
                    </Form.Group>
                    
                    <div>
                        <Button variant="primary"  onClick={this.handleSubmit}>
                         To-Login
                        </Button>
                    </div>
                </Form>
            </Container>
        )
    }
}
export default withRouter(Register)