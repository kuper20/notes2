import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom';
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titel: '',
            description: ''
        }
    }
    changeTitle = (e) => {
        this.setState({ titel: e.target.value })
    }
    changeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    addNotes = () => {
        if(this.state.titel===''||this.state.description===''){
           alert("One of your fields is probably empty ")
            return 
        }

        let obj2 = { titel:this.state.titel,description:this.state.description }
        this.props.setNotes(obj2)
        this.props.history.push({
            pathname: "/Notes"
        })
    }
    render() {
        return (
            <div>
                <Container style={{ marginTop: '100px' }}>
                    <h1>Your Main</h1>
                    <Form>
                        <Form.Group controlId="formBasicTitle" style={{ width: '300px' }}><Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter your title" name="title" value={this.state.titel} onChange={this.changeTitle} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription" style={{ width: '300px' }}>
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" placeholder="Enter your description " name="description" value={this.state.description} onChange={this.changeDescription} />
                        </Form.Group>
                        <div>
                            <Button variant="primary" type="submit" onClick={this.addNotes} >
                               Notes
                            </Button>
                        </div>
                    </Form>
                </Container>

            </div>
        )
    }
}
export default withRouter(Main)