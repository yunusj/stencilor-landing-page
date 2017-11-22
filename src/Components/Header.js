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

let current = 0;

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: this.getNavItems(this.props),
            currentPage: current
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.currentPage != nextProps.currentPage)
        {
            this.setState({
                navItems: this.getNavItems(nextProps),
                currentPage: current
            });
        }
    }

    getNavItems(props) {
        return navItems.map((listValue, index)=>{
            props.currentPage.toLowerCase()==listValue.name.toLowerCase() ? current = index : null;
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
                <Navigation currentPage={this.state.currentPage} togglePage={this.props.togglePage} items={this.state.navItems} />
            </header>
        )
    }
}

