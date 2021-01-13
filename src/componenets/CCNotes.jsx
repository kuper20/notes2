import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
class Notes extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let mystyle = {
            border: '3px solid orange', // it is not work.
            padding: "10px",
            fontFamily: "Arial",
            
        }
        console.log(this.props.yourName)
        return (
            <div style={{marginLeft: 450, marginRight: 450, textAlign:"center" }}>
                 {this.props.yourName.map((n)=><h1>{n.first_name}  {n.last_name}</h1>)}
                <h1 style={{ marginLeft: 1 }}>This is your notes</h1>
                
                {this.props.showNotes.map((r, index) =>
                    <p key={index} style={mystyle}>
                        title: {r.titel} <br></br>
                        description: {r.description} <br></br>
                        <Button variant="danger" onClick={() => this.props.remove(index)}>Delete</Button>
                       
                    </p>
                )}
                 <div >
                        <Button variant="primary" type="submit" >
                                <Link to="/Main" style={{ color: 'red' }}>To Main</Link>
                            </Button>
                           
                        </div>
            </div>
        )
    }
}
export default withRouter(Notes)

