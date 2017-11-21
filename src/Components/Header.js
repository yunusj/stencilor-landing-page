import React, { Component } from 'react'
import Logo from "./reusableComponents/Logo";
import Navigation from "./reusableComponents/Navigation";

const navItems = [
                    {
                        name: 'Home',
                        link: 'http://google.com',
                        current: true
                    },
                    {
                        name: 'Career',
                        link: 'http://google.com'
                    },
                    {
                        name: 'Contact',
                        link: 'http://google.com'
                    }
                ]

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: this.getNavItems(this.props)
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.currentPage != nextProps.currentPage)
        {
            this.setState({
                navItems: this.getNavItems(nextProps)
            });
        }
    }

    getNavItems(props) {
        return navItems.map((listValue, index)=>{
            return {
                ...listValue,
                current: (props.currentPage.toLowerCase()==listValue.name.toLowerCase())?true:false
            }
        });
    }

    render() {
        return (
            <header className="header">
 				<Logo color="white" />
                <Navigation togglePage={this.props.togglePage} items={this.state.navItems} />
            </header>
        )
    }
}

