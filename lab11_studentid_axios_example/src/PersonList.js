import React, { Component } from 'react'
import axios from 'axios'
export default class PersonList extends Component {
    constructor(props){
        super(props)

        this.state = {
            persons: []
        }
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            const persons = res.data.results;
            this.setState({persons : persons})
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.persons.map(p => (
                        <>
                            
                            <div class="container">
                                <div class="title">
                                    <h5>{p.name.title} {p.name.first} {p.name.last} - {p.login.uuid}</h5>
                                </div>
                                <div class="body">
                                    <div class="left-side">
                                        <img src={p.picture.large}/>
                                        <button>Details</button>
                                    </div>
                                    <div class="right-side">
                                        <p>User Name: {p.login.
                                        username}</p>
                                        <p>Gender: {p.gender}</p>
                                        <p>Time Zone Description : {}</p>
                                        <p>Address: {p.location.street.number} {p.location.street.name}, {p.location.city}, {p.location.state}, {p.location.country} - {p.location.postcode}</p>
                                        <p>Email: {p.email}</p>
                                        <p>Birth Date and Age: {p.dob.date} ({p.dob.age})</p>
                                        <p>Register Date: {p.registered.date}</p>
                                        <p>Phone#: {p.phone}</p>
                                        <p>Cell#: {p.cell}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        )
    }
}
