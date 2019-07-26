import React from "react";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

class DropdownMenu extends React.Component{
    constructor() {
        super();

        this.state = {
            sityDropdown: [
                {
                    type: "normal",
                    status: false,
                    name: "",
                    default_name: "select",
                    click: false,
                    active: false
                }
            ]
        };
        this.handleToggleDropdown = this.handleToggleDropdown.bind(this);
    }
    handleSelectMenu(item){
        this.setState({name: item})
        this.setState({status: !this.state.status})
    }
    handleToggleDropdown(){
        this.setState({status: !this.state.status})
    }

    render() {
        return(
            <Dropdown
                type="normal"
                status={this.state.status}
                name={this.state.name}
                default_name={this.props.sitiesList[0].name}
                click={this.handleToggleDropdown}
                active={this.props.sitiesList.length > 1}
            >
                {this.props.sitiesList.length > 1 && this.props.sitiesList.map( (sityItem, index) => {
                    return (
                        <DropdownItem 
                            key={index}
                            click={() => this.handleSelectMenu(sityItem.name)}>
                                {sityItem.name}
                        </DropdownItem>
                    );
                })}
            </Dropdown>
        )
    }
}

export default DropdownMenu;