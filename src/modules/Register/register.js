import React, {Component} from 'react';

import {Button} from 'react-bootstrap'

import './register.css'
import {Auth} from '../../Services/authentication';

export class Register extends Component {
    constructor(){
        super();
        this.state = {
            pass: false
        }
    }

    register(event) {
        event.preventDefault();
        const confirmPass = Auth.passwordCheck(this.refs.pass.value, this.refs.confirmpass.value);
        const emailCheck = Auth.emailCheck(this.refs.email.value);
        const passwordlen = Auth.passwordlength(this.refs.pass.value);
        if (confirmPass) {
            Auth.notify("error", "Password does not match! Enter correct password");
        } else if (emailCheck) {
            Auth.notify("error", "Invalid Email Address");
        } else if (passwordlen) {
            Auth.notify("error", "Your password must be 6 characters long");
        } else {
            Auth.notify("success", "Registration confirmed");
            Auth.addUser(this.refs.email.value, this.refs.pass.value);
            this
                .props
                .history
                .push("/");
        }
    }

    caution() {
        if(this.refs.pass.value.length > 6){
            this.setState({pass: false});
        } else {
            this.setState({pass: true});
        }
    }

    render() {
        return (
            <div className="Register">
                <h2>Register Kerein</h2>
                <form className="form-group" onSubmit={(e) => this.register(e)}>

                    <label className="col-form-label">
                        Email:
                    </label>
                    <input
                        className="form-control regInput"
                        type="text"
                        placeholder="Email"
                        ref="email"/>
                    <br/>
                    <label className="col-form-label">
                        Password:
                    </label>
                    <input
                        onChange={() => this.caution()}
                        className="form-control regInput"
                        type="password"
                        placeholder="Password"
                        ref="pass"/> 
                        {this.state.pass ? 
                            <small id="passwordHelpBlock" class="form-text text-muted">
                                    Your password must be 6 characters long.
                            </small>
                        : null}
                    <br/>
                    <label className="col-form-label">
                        Confirm Password:
                    </label>
                    <input
                        className="form-control regInput"
                        type="password"
                        placeholder="Confirm Password"
                        ref="confirmpass"/>
                    <br/>
                    <Button type="submit" value="submit">Register</Button>
                </form>

            </div>
        );
    }
}
