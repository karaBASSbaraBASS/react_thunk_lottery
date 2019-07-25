import React from "react";
import Link from "./Link";
import logo from '../assets/img/data-random-squares.svg';
import { connect } from 'react-redux';
import { sitiesFetchData } from '../actions/items';
import sitiesList from "../mockData/sityList.json";
import Dropdown from "../components/dropdown/Dropdown";
import DropdownItem from "../components/dropdown/DropdownItem";


class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            sityDropdown: [
                {
                    type: "normal",
                    status: false,
                    name: "",
                    default_name: "select",
                    click: "toogle",
                    active: false
                }
            ]
        };
    }
    
    componentDidMount() { 
        this.props.sitiesData({sitiesList});
    }
    render() {
        return (
            <header className="mainHeader">
                <div className="container maxWidth">
                    <div className="logo">
                        <Link text="loto zabava" link="#about" img={logo}/>
                    </div>
                    
                    <ul className="headerNav">
                        <li className="headerNav__item">
                        {/* <Dropdown
                            type="normal"
                            status={this.state.status}
                            name={this.state.name}
                            default_name={this.props.sities[0].name}
                            click={this.handleToggleDropdown}
                            active={this.props.sities.length > 1}
                        >
                            {this.props.sities.length > 1 && this.props.sities.map( (sityItem, index) => {
                                return (
                                    <DropdownItem 
                                        key={index}
                                        click={() => this.handleSelectMenu(sityItem)}>
                                            {sityItem.name}
                                    </DropdownItem>
                                );
                            })}
                        </Dropdown> */}
                        </li>
                        <li className="headerNav__item">
                            <Link text="register" link="#about"/>
                        </li>
                        <li className="headerNav__item">
                            <Link text="sign in" link="#about"/>
                        </li>
                        <li className="headerNav__item">
                            <Link text="cart" link="#about"/>
                        </li>
                    </ul>
                    
                </div>
            </header>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        sitiesData: (src) => dispatch(sitiesFetchData(src))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);