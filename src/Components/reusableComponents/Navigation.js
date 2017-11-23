import React, { Component } from 'react'
import { Button, Menu, Icon } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

export default class Navigation extends Component {
    render() {
        return (
            <nav className="NAVIGATION">
               <Menu
               selectedKeys={[this.props.currentPage.toString()]}
               mode="horizontal"
               >
                  {this.props.items.map((listValue, index)=>{
                     return (<Menu.Item key={index} >
                        <span onClick={this.props.togglePage} data-item={listValue.name}>{listValue.name}</span>
                     </Menu.Item>);
                  })}
                  <Menu.Item key={`login`} >
                     <Button ghost>Login</Button>
                  </Menu.Item>
               </Menu>
            </nav>
        )
    }
}

