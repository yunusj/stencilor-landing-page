import React, { Component } from 'react'
import { Collapse, Button, Row, Col } from 'antd';

const Panel = Collapse.Panel;
const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};


const items = [{
  title: 'Customer Relations',
  content: 'First-content',
}, {
  title: 'Javascript Programmer',
  content: 'Yo!',
}, {
  title: 'Wordpress Programmer',
  content: 'Last-content',
}];

const styles = {
    h2: {margin: '30px 0 20px 0'},
    button: {width: '100%'}
}

export default class CareerStep2 extends Component {
    render() {

        return (
    		<div>
                <h2 style={styles.h2}>Vacancies.</h2>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                  {items.map(item => <Panel key={item.title} header={item.title} style={customPanelStyle}>
                        <Row>
                          <Col span={20}>{item.content}</Col>
                          <Col span={4}>
                                <Button type="primary" onClick={()=>this.props.next(item.title)} style={styles.button}>
                                    Apply
                                </Button>
                          </Col>
                        </Row>
                    </Panel>)}
                </Collapse>
    		</div>
        )
    }
}

