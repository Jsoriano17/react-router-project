import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


export default class NewForm extends React.Component {
    state = {
        name: '',
        about: ''
    }
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Virus Name</label>
                    <input placeholder='Virus Name' />
                </Form.Field>
                <Form.Field>
                    <label>About Virus</label>
                    <input placeholder='About Name' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>

        )
    }
}



