import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const defaultState = {
    name: null,
    email: null,
    password: null,
    nameError: null,
    emailError: null,
    passwordError: null
}

class App extends Component {
    constructor() {
        super()
        this.state = defaultState
        this.InputChange = this.InputChange.bind(this)
    }

    InputChange(event) {
        const target = event.target
        var value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    validate(){
        let nameError = ""
        let emailError = ""
        let passwordError = ""

        if(!this.state.name){
            nameError = "Please Enter Name !!!"
        }

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(!this.state.email || reg.test(this.state.email) === false){
            emailError = "Email is not valid !!!"
        }

        if(!this.state.password){
            passwordError = "Please Enter Password !!!"
        }

        if (emailError || nameError || passwordError){
            this.setState({nameError, emailError, passwordError})
            return false
        }

        return true
    }

    submit() {
        if(this.validate()){            
            this.setState(defaultState)
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h3>::: Register Form :::</h3><br />
                            
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Name :</label>
                                    <input type="text" className="form-control" name="name" 
                                    value={this.state.name} onChange={this.InputChange}/>
                                    <span className="text-danger">{this.state.nameError}</span>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Email :</label>
                                    <input type="email" className="form-control" name="email" 
                                    value={this.state.email} onChange={this.InputChange}/>
                                    <span className="text-danger">{this.state.emailError}</span>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Password :</label>
                                    <input type="password" className="form-control" name="password" 
                                    value={this.state.password} onChange={this.InputChange}/>
                                    <span className="text-danger">{this.state.passwordError}</span>
                                </div>
                            </div>

                            <div className="from-row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;