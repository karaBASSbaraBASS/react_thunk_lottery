import React from "react";
import Link from "./Link";
import logo from '../assets/img/data-random-squares.svg';
import { connect } from 'react-redux';
import { sitiesFetchData } from '../actions/items';
import sitiesList from "../mockData/sityList.json";
import DropdownMenu from "../components/dropdown/DropdownMenu";


class Header extends React.Component {
    // get async request with sity names 
    componentDidMount() { 
        this.props.fetchSities({sitiesList});
    }
    render() {
        let {sities} = this.props;
        let {sitiesList} = this.props.sities;
        return (
            <header className="mainHeader">
                <div className="container maxWidth">
                    <div className="logo">
                        <Link text="loto zabava" link="#about" img={logo}/>
                    </div>
                    <ul className="headerNav">
                        <li className="headerNav__item">
                            {
                                this.props.sities.sitiesList===undefined
                                ? <span className="loadingStat">loading</span>
                                : <DropdownMenu sitiesList={sitiesList} sities={sities}/>
                            }
                        </li>
                        <li className="headerNav__item">
                            <Link text="register" link="#register"/>
                        </li>
                        <li className="headerNav__item">
                            <Link text="sign in" link="#signIn"/>
                        </li>
                        <li className="headerNav__item">
                            <Link text="cart" link="#cart"/>
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
        isLoading: state.itemsIsLoading,
        sities: state.sities
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSities: (src) => dispatch(sitiesFetchData(src))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);