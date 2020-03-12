import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


export default class NewForm extends React.Component {
    state = {
        name: "",
        about: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({
             name: "", 
             about: "", 
            });
    }
    render() {
        return (
            <Form>
                <Form.Field
                onChange={this.handleChange}
                name='name'
                value={this.state.name}
                >
                    <label>Virus Name</label>
                    <input placeholder='Virus Name' />
                </Form.Field>
                <Form.Field
                 onChange={this.handleChange}
                 name='about'
                 value={this.state.name}
                >
                    <label>About Virus</label>
                    <input placeholder='About Name' />
                </Form.Field>
                <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>

        )
    }
}



