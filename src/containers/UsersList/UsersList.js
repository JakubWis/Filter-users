import React, { Component } from 'react';
import axios from '../../axios-orders';
import './UsersList.scss';


import Input from '../../components/UI/Input/Input';
import ErrorSpan from '../../components/UI/ErrorSpan/ErrorSpan';
import UsersListEl from '../../components/UsersListEl/UsersListEl';
import Spinner from '../../components/UI/Spinner/Spinner';

class UsersList extends Component {
    state = {
        searchedValue: "",
        reqPending: true,
        allUsersData: null,
        usersData: null,
        errorMessage: null,
    }

    componentDidMount() {
        axios.get('/users')
        .then(response => {
           this.setState({ usersData: response.data })
           this.setState({ allUsersData: response.data })
           this.setState({ reqPending: false })
           console.log('Successfully fetched data from API')
        })
        .catch(error => {
            console.log( typeof(error.message))
            this.setState({ errorMessage: error.message })
            this.setState({ reqPending: false })
        });
        
    }

    onChangeInput = async (e) => {
        await this.setState({ searchedValue: e.target.value })
        await this.filterUsersByName();
    }

    filterUsersByName = () => {
        const text = this.state.searchedValue;
        const nameList = this.state.allUsersData;

        const newList = nameList.filter( (user) => {
            return ( (user.name).toLowerCase() ).includes(text.toLowerCase());
        })

        this.setState({ usersData: newList })
    }

    render() {
        let UsersListElement = (!this.state.reqPending) ? 
            (typeof(this.state.errorMessage) === 'string')?
                <ErrorSpan 
                    error={this.state.errorMessage}
                />
                :
                <UsersListEl 
                    data={this.state.usersData}
                />
            :
            <Spinner />

        return (
            <section className="UsersList">
                <h1 className="Header">Users list</h1>
                <main className="Container">
                    <div className="InputBox">
                        <Input
                            elementType="input"
                            elementConfig={{placeholder: 'Search by user name...'}}
                            value={this.state.searchedValue}
                            changed={this.onChangeInput}
                        />
                    </div>
                    {UsersListElement}
                </main>           
            </section>
        )
    }
}

export default UsersList;

