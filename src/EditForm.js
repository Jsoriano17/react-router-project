import React from 'react'
import { Button, Form} from 'semantic-ui-react'


export default class EditForm extends React.Component {
    state = {
        name: "",
        about: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editVirus(this.state);
        console.log(this.state)
        this.setState({
            name: "",
            about: "",
        });
    }

    render() {
        return (
            <Form>
                <Form.Input
                    label='Virus name'
                    name='name'
                    placeholder='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <Form.Input
                    label='Virus about'
                    name='about'
                    placeholder='virus name'
                    value={this.state.phone}
                    onChange={this.handleChange}
                />

                <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>
    
        )
    }
}
