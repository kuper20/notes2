import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './CCLogin'
import Register from './CCRegister'
import Main from './CCMain'
import Notes from './CCNotes'
class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            notes:[],
            userName:[]
        }
    }

    getUserFromRege = (user) => {
        let arr = [...this.state.users,user]
        this.setState({ users:arr })
    }
    
    checkLogin = (email_log, password_log) => {
        
        const w = this.state.users.find(user => user.email === email_log && user.password === password_log)
        if (w) {
            this.setState({
                loggedUser:w
            })
            this.props.history.push({
                pathname: "/Main"
            })
        }
        else {
           
            this.props.history.push({
                pathname: "/"
               
            })
            alert('Check your email or password')
        }
    }

    userName=(name)=>{
        let arr = [...this.state.userName,name]
        this.setState({ userName:arr })
    }

    getNotes=(note)=>{
        let arr2 = [...this.state.notes,note]
        this.setState({ notes:arr2 })
    }
   
    removeNotes=(index)=> {
        let array = [...this.state.notes]; 
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({notes: array});
        }
      }    

    render() {
       console.log(this.state.users);
        return (
            <div>        
                    <Switch>
                        <Route exact path="/" render={() => <Login checkLogin={this.checkLogin}/>} />
                        <Route path="/Register" render={() => <Register sendUserToManage={this.getUserFromRege} sendNameUser={this.userName}/>} />
                        <Route path="/Main" render={() => <Main setNotes={this.getNotes}/>} />
                        <Route path="/Notes" render={()=><Notes showNotes={this.state.notes} yourName={this.state.userName} remove={this.removeNotes}/>} />
                    </Switch>
            </div>
        )
    }
}
export default withRouter(Manager)
