import React, { Component } from 'react'
import styles from './PhonebookTable.module.css'

export default class PhonebookTable extends Component {

state={
    modalShow:false,
    userID:null

}

    toggleModal = ()=>{
        this.setState({modalShow: !this.state.modalShow})
    }
    handleDelete = (id) => {
        this.toggleModal()
        this.setState({userID: id})
    }
    
    deleteUser = () =>{
        
        this.props.removed(this.state.userID)
        this.toggleModal()
    }

    edit = (item) => {

        this.props.editUser(item)
        this.props.pageHandler()
    }
    render() {
        return (
            <>
                <div>
                    <button onClick={this.props.pageHandler} className={styles.addbtn}>
                        Add
                    </button>
                </div>
                <table className={styles.tbl}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>NAME</th>
                            <th>FAMILY</th>
                            <th>EMAIL</th>
                            <th>NUM</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.userFamily}</td>
                                    <td>{item.userEmail}</td>
                                    <td>{item.userNum}</td>
                                    <td>
                                        <button onClick={() => this.edit(item)}>
                                            EDIT
                                        </button>
                                        <button onClick={() => this.handleDelete(item.id)}>
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {this.state.modalShow && (

                <div className={styles.modal}>
                    <div className={styles.modal__content}>
                        <h1>Are you sure?</h1>
                        <button onClick={this.deleteUser}  className={styles.btn2}>Yes</button>
                        <div onClick={()=>this.toggleModal()} className={styles.modal__close}>&times;</div>
                    </div>
                </div>
                )}
            </>
        )
    }
}
