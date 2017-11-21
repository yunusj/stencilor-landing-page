import React, { Component } from 'react'
import { checkStatus } from '../utils.js'
import { Form, Row, Col, Icon, Input, Button, Upload } from 'antd'
import TextInput from './form/Text'
import TextareaInput from './form/TextArea'
import SelectInput from './form/Select'

const InputGroup = Input.Group;

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default class CareerStep3 extends Component {

    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }

    // beforeUpload = (file) => {
    //   const isJPG = file.type === 'image/jpeg';
    //   if (!isJPG) {
    //     // message.error('You can only upload JPG file!');
    //   }
    //   const isLt2M = file.size / 1024 / 1024 < 2;
    //   if (!isLt2M) {
    //     // message.error('Image must smaller than 2MB!');
    //   }
    //   return false;
    // }


    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div style={{width: '70%', margin: '0 auto'}}>
                <h3 style={{marginBottom: 20}}>Applying for {this.props.selectedPosition}</h3>
                <Form.Item {...formItemLayout} label="Full name">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Required !' }],
                    })(
                        <Input
                            placeholder="Type your full name"
                            prefix={<Icon type="user" />}
                        />
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Phone number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Required !' }],
                    })(
                        <Input
                            placeholder="Type your contact number"
                            prefix={<Icon type="mobile" />}
                        />
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Email Address">
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Required !' }],
                    })(
                        <Input
                            placeholder="Type your email address"
                            prefix={<Icon type="mail" />}
                        />
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Speak your mind">
                    {getFieldDecorator('message', {
                        rules: [{ required: false }],
                    })(
                        <Input.TextArea 
                            placeholder="Your message"
                            rows={4} 
                        />
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Your CV">
                    <Row type="flex" style={{lineHeight: 'normal'}}>
                        <Col span={6} style={{paddingRight: '10px'}}>
                        {getFieldDecorator('fileCV', {
                          valuePropName: 'fileList',
                          getValueFromEvent: this.normFile,
                        })(
                          <Upload 
                            className={'btn-upload--fullWidth'}
                            beforeUpload={this.props.beforeUpload}
                            name="files">
                            <Button>
                              <Icon type="upload" /> Upload
                            </Button>
                          </Upload>
                        )}
                        </Col>
                        <Col span={18}>
                        {getFieldDecorator('urlCV', {
                            rules: [{ required: false }],
                        })(
                          <Input
                              addonBefore="OR"
                              placeholder="URL"
                              prefix={<Icon type="global" />}
                          />
                        )}
                        </Col>
                    </Row>
                </Form.Item>
            </div>
        )
    }
}