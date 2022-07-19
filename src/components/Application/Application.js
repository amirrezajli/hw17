import React, { Component } from 'react'
import AddPhone from './AddPhone/AddPhone'
import PhonebookTable from './PhonebookTable/PhonebookTable'
export default class Application extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [
                {
                    id: 1,
                    userName: "pouya",
                    userFamily: "jalili",
                    userEmail: "pouyagorge@gmail.com",
                    userNum: "0000-00-00-000"
                }
            ],
            flag: true,
            changeUser:null,
        };
    }
    
    addUser = (user) => {
        let newId = this.state.users.length + 1
        user.id = newId
        this.setState({
            users: [...this.state.users, user]
        })
    }

    removeHandler = (userId) => {
        let newUsers = [...this.state.users]
        let idx = newUsers.findIndex(user => user.id === userId)
        newUsers.splice(idx, 1)
        this.setState({
            users: newUsers
        })
    }

    pageHandler= () =>{
        this.setState({flag: !this.state.flag})
    }

    editHandler =(person)=>{
        let newUsers = [...this.state.users]
        let idx = newUsers.findIndex(user => user.id === person.id)
        newUsers.splice(idx, 1, person)
        this.setState({users:newUsers, changeUser:null})
    }

    addUserEdit= (user)=>{
        console.log(user);
        this.setState({changeUser: user})
    }
    

    render() {
        return (
            <>
                {this.state.flag
                    ? <PhonebookTable users={this.state.users} removed={this.removeHandler} pageHandler ={this.pageHandler} editUser ={this.addUserEdit} />
                    : <AddPhone addUser={this.addUser} pageHandler ={this.pageHandler} changeUser = {this.state.changeUser} editHandler= {this.editHandler}/>}

            </>
        )
    }
}
