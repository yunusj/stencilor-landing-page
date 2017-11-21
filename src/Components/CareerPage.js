import React, { Component } from 'react'
import { checkStatus } from '../utils.js'
import { Form, Layout, Row, Col, Steps, Button, message, Icon, notification } from 'antd'
import CareerStep2 from './CareerStep2'
import CareerStep3 from './CareerStep3'
import LoaderSuccess from './reusableComponents/LoaderSuccess'
import Background from '../Assets/images/career--office.jpg'

const { Header, Footer, Sider, Content } = Layout;
const Step = Steps.Step;
const steps = [{
  title: 'Our team',
  content: 'First-content',
}, {
  title: 'What we\'re looking for?',
  content: CareerStep2,
}, {
  title: 'Apply :)',
  content: CareerStep3,
}];

class CareerPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      status: false,
      selectedPosition: null,
      fileCV: null,
    };
  }
  next(selectedPosition) {
    const current = this.state.current + 1;
    this.setState((state, oldState)=>{
        return {
            ...oldState,
            current,
            selectedPosition
        }
    });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState((state, oldState)=>{
        return {
            ...oldState,
            current
        }
    });
  }

  beforeUpload(file) {
    this.setState((state, oldState)=>{
        return {
            ...oldState,
            fileCV: file
        }
    });
    // stop from uploading right away
    return false;
  }

  removeUpload(file) {
    this.setState((state, oldState)=>{
        return {
            ...oldState,
            fileCV: null
        }
    });
    // stop from uploading right away
    return false;
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
        this.setStatus('loading');

        // add selected position to data
        values.position = this.state.selectedPosition;

        // create new FormData
        const formData = new FormData();

        // add values to FormData
        Object.keys(values).map(function(key, index) {
           formData.append(key, values[key] ? values[key] : '');
        });

        // add file to FormData
        formData.append('fileCV', this.state.fileCV);

        // backend request
        fetch('http://localhost:3000/career/apply', {
            method: 'POST',
            body: formData
        })
        .then(checkStatus)
        .then((data) => {
            that.setStatus('success');
        }).catch((error) => {
            that.setStatus(false);
            notification['error']({
                message: 'Something isn\'t right!',
                description: error.toString(),
            });
        })
    }

    setStatus(status) {
        this.setState((state, oldState) => {
            return {
                ...oldState,
                status
            }
        });
    }

    render() {
        const { current } = this.state;
        const StepContent = steps[this.state.current].content;
        return (
            <Form className={`content-area form-style-default`} onSubmit={this.handleSubmit}>
                <Layout className={`section`}>
                    <Header className={`section__title`}>
                      <h1>Join our team.</h1>
                    </Header>
                    <Content>
                        <Steps size={`small`} current={current}>
                          {steps.map(item => <Step key={item.title} title={item.title} description={`Hello World !`} />)}
                        </Steps>
                        <div className="steps-content">
                            {this.state.status ? <div className={`blocking-overlay ${this.state.status=='success'?'step-content__success':''}`}>
                                {this.state.status=='loading' ? <Icon type="loading" /> : null }
                                {this.state.status=='success' ? <div className="blocking-overlay__content">
                                        <LoaderSuccess />
                                        <h2 style={{marginBottom: 5}}>Application submitted!</h2>
                                        <p>Thank you for your application. We'll be in touch soon :)</p>
                                </div> : null }                           
                            </div> : null }

                            <StepContent 
                            beforeUpload={this.beforeUpload.bind(this)}
                            form={this.props.form} 
                            next={this.next.bind(this)} 
                            selectedPosition={this.state.selectedPosition} />
                        </div>
                    </Content>
                    <Footer>
                        <Button icon="close" style={{ float: 'left' }} onClick={() => this.props.togglePage('close')}>
                          Close
                        </Button>
                      {
                        this.state.current > 0
                        && this.state.status != 'success'
                        &&
                        <Button icon="left" style={{ marginRight: 8 }} onClick={() => this.prev()}>
                          Previous
                        </Button>
                      }
                      {
                        this.state.current < steps.length - 1
                        && this.state.current != 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>Next <Icon type="right" /></Button>
                      }
                      {
                        this.state.current === steps.length - 1
                        && this.state.status != 'success'
                        &&
                        <Button 
                        disabled={this.state.status=='loading' ? true : false }
                        type="primary"
                        htmlType="submit">
                            Submit <Icon type="rocket" />
                        </Button>
                      }
                    </Footer>
                </Layout>
            </Form>
        )
    }
}

export default Form.create()(CareerPage);