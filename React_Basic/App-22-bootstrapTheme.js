// npm install bootstrap reactstrap
// npm install --save react-bootstrap

import React, { Component } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component{
        state = {
                theme: null,
                dropdownOpen: false
        }

        toggleDropdown = () => {
                this.setState({dropdownOpen: !this.state.dropdownOpen});
        }

        resetTheme = evt => {
                evt.preventDefault();
                this.setState({ theme: null});
        }

        chooseTheme = (theme, evt) => {
                evt.preventDefault();
                this.setState({ theme });
        }

        render() {
                const { theme, dropdownOpen} = this.state;
                const themeClass = theme? theme.toLowerCase() : 'secondary';

                return(
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                                <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>
                                        {theme || 'Default'}
                                </span>

                                <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggleDropdown}>
                                        <DropdownToggle caret size="lg" color={themeClass}/>
                                        <DropdownMenu>
                                                <DropdownItem onClick={e => this.chooseTheme('Primary', e)}>Primary</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem onClick={e => this.chooseTheme('Success', e)}>Success</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem onClick={e => this.chooseTheme('Danger', e)}>Danger</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem onClick={this.resetTheme}>Default</DropdownItem>
                                        </DropdownMenu>
                                </ButtonDropdown>
                        </div>
                )
        }
}
export default App;