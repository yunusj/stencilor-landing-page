import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch';
import image from './Assets/images/atomcrop.png'
import circle from './Assets/images/website-mockup.jpg'
import Style from './CSS/dashboard.css'
import WrappedRegistrationForm from './Components/form'
import Background from './Assets/images/Network-Graph-vector.png'
import { Modal, Button } from 'antd'
import ModalDisplay from './Components/modal'
import Alert from 'antd/lib/alert';

const mountPoint = document.querySelector('#stencil');
// const temp = { DatePicker };
let inQueue = false;



class MainContainer extends Component {
	constructor() {
		super();
		this.state = { visible: false }
	}
	showModal = () => {
		this.setState({
			visible: true
		})
	}
	handleOk = () => {
		this.setState({
			visible: false
		})
	}
	handleCancel = () => {
		this.setState({
			visible: false
		})
	}
	render() {
		console.log("this.state", this.state)
		return (
			<div className='body' style={{
				position: "absolute"
			}}>
				<Modal
					title="Form"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					footer={[<Button onClick={this.handleCancel}>Close</Button>]}
				>
					{/* <ModalDisplay/> */}
					<WrappedRegistrationForm close={this.handleCancel} />
				</Modal>
				<div style={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}>
					<table>
						<tr>
							<td className="atom" >
								at
						</td>
							<td >
								<img src={image} className="atom" />
							</td>
							<td className="atom" >
								mpoint
						</td>
						</tr>
					</table>

				</div>

				<div style={{
					position: 'fixed',
					top: '88.6%',
					left: '1.07vw',
					transform: 'translate(0%, -50%)',
				}}>
					<table>
						<tr>
							<td >
							<Button shape="circle" style={{borderWidth:0}} ><div id="whowhatwhy"></div></Button>
							</td>
							<td className="circle" style={{ width: "200%" ,paddingLeft:10}}>
								Get in touch
						</td>
						</tr>
					</table>
				</div>

				<div style={{
					position: 'fixed',
					top: '70.4%',
					left: '53.5vw',
					transform: 'translate(0%, -50%)',
				}}>
					<table>
						<tr>
							<td >
							<Button shape="circle" style={{borderWidth:0}} onClick={this.showModal}><div id="whowhatwhy"></div></Button>
							</td>
							<td className="circle" style={{ width: "200%" ,paddingLeft:10}}>
								Job Openeings
						</td>
						</tr>
					</table>
				</div>
				<div style={{
					position: 'fixed',
					top: '9%',
					left: '22.3vw',
					transform: 'translate(0%, 0%)',
					// width:"10vw"
				}}>
					<table>
						<tr>
							<td >
								{/* <Button shape="circle" style={{borderWidth:0}} >
								<img src={circle} className="circle" />
								</Button> */}
								<Button shape="circle" style={{borderWidth:0}}><div id="whowhatwhy"></div></Button>
							</td>
							<td className="circle" style={{ width: "200%",paddingLeft:10 }} >
								Who? what? Why?
						</td>
						</tr>
					</table>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<MainContainer />, mountPoint)