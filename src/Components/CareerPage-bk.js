import React, { Component } from 'react'
import { Steps, Button, message, Affix } from 'antd'
import Background from '../Assets/images/career--office.jpg'

const Step = Steps.Step;
const steps = [{
  title: 'Our team',
  content: 'First-content',
}, {
  title: 'Choose your part',
  content: 'Second-content',
}, {
  title: 'Join',
  content: 'Last-content',
}];

export default class CareerPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

    render() {
        const { current } = this.state;
        return (
    		<section className={`section`}>

    			<div className={`section--content`}>
    				<h1 className={`section__title`}>Join our team.</h1>

    				<section className={`career-jobs`}>

                    <Steps size={`small`} current={current}>
                      {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                  <div className="steps-content">{steps[this.state.current].content}</div>
                  <Affix offsetBottom={0}>
                    <div className="steps-action">
                      {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>Next</Button>
                      }
                      {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                      }
                      {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                          Previous
                        </Button>
                      }
                    </div>
                    </Affix>

    				</section>
    			</div>
    		</section>
        )
    }
}

