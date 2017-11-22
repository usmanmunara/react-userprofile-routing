import React, {Component} from 'react';

import {Button, Image} from 'react-bootstrap'

import Avatar from './avatar.png';
import {Auth} from '../../Services/authentication';
import {currentUser} from '../../Data/users'
import './dashboard.css';

export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        }
    }

    componentDidMount() {
        this.setState({name: currentUser[0].name});
    };

    infoEdit(e) {
        e.preventDefault();
        Auth.notify("success", "Name changed successfully");
        Auth.updateUser(this.state.name);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="Dashboard">
                <h2>
                    Aapka Apna Dashboard</h2>
                <div className="image-div">
                    <Image id="avatar-img" src={Avatar} alt="avatar" circle responsive/>
                </div>
                <div>
                    <form onSubmit={(e) => this.infoEdit(e)}>
                        <label className="col-form-label">
                            Name:
                        </label>
                        <input
                            className="form-control regInput"
                            onChange={(e) => this.handleChange(e)}
                            name="name"
                            type="name"
                            value={this.state.name}/>
                        <br/>

                        <label className="col-form-label">
                            Email:
                        </label>
                        <input
                            className="form-control regInput"
                            name="email"
                            type="email"
                            value={currentUser[0].email} disabled/>
                        <br/>

                        <Button type="submit" value="Update Profile">Profile Update kerein</Button>
                    </form>

                </div>
            </div>
        );
    }
}
