import React, { Component } from 'react'
import { checkStatus } from '../utils.js'
import { Form, Icon, Input, Button, notification } from 'antd'
import TextInput from './form/Text'
import TextareaInput from './form/TextArea'
import SelectInput from './form/Select'


class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    // Validate and pass on to ajax
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.ajaxSubmit(values);
            }
        });
    }

    // submit form to server
    ajaxSubmit = (values) => {
        let that = this;
        this.setLoading(true);

        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(checkStatus)
        .then((data) => {
            that.setLoading(false);
            notification['success']({
                message: 'Thank you for getting in touch!',
                description: "We appreciate you contacting us. One of our colleagues will get back to you shortly. \n\nHave a great day!",
            });
            that.props.form.resetFields();
        }).catch((error) => {
            that.setLoading(false);
            notification['error']({
                message: 'Something isn\'t right!',
                description: error.toString(),
            });
        })
    }

    setLoading(status) {
        this.setState((state, oldState) => {
            return {
                ...oldState,
                loading: status
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <Form className={`content-area form-style-default`} onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Required !' }],
                    })(
                        <Input
                            placeholder="Type your email address"
                            prefix={<Icon type="user" />}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: 'Required !' }],
                    })(
                        <Input.TextArea 
                            placeholder="Your message"
                            rows={4} 
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={this.state.loading}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(ContactForm);
