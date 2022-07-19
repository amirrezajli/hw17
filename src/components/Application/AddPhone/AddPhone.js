import React, { Component } from 'react'
import Input from './InputComponent/Input'
import styles from './AddPhone.module.css'

export default class AddPhone extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: {
                value: this.props.changeUser ? this.props.changeUser.userName : "",
                hasError: false
            },
            family: {
                value: this.props.changeUser ? this.props.changeUser.userFamily : "",
                hasError: false
            },
            email: {
                value: this.props.changeUser ? this.props.changeUser.userEmail: "",
                hasError: false
            },
            num: {
                value: this.props.changeUser ? this.props.changeUser.userNum : "",
                hasError: false
            },
            submited: false,
            allValid: false
        }
        
    }

    updateField = async (key, value) => {
        await this.setState({ [key]: { value, hasError: false } })
        console.log(this.state)
    }

    async submitHandler(e) {
        e.preventDefault();
        let formError = false
        if (this.state.name.value === "") {

            await this.setState({
                name: {
                    value: "",
                    hasError: true
                }
            })

            console.log(this.state)
            formError = true
        }

        if (this.state.family.value === "") {
            this.setState({
                family: {
                    value: "",
                    hasError: true
                }
            })
            formError = true
        }

        if (this.state.email.value === "") {
            this.setState({
                email: {
                    value: "",
                    hasError: true
                }
            })
            formError = true
        }

        if (this.state.num.value === "") {
            this.setState({
                num: {
                    value: "",
                    hasError: true
                }
            })

            formError = true
        }
        if (formError) return


        this.setState({
            submited: true
        })

        this.setState({
            allValid: true
        })
        
        setTimeout(() => {
            this.setState({
                allValid: false
            })
        }, 3000);

        if (this.props.changeUser) {
            this.props.editHandler({
                id: this.props.changeUser.id,
                userName: this.state.name.value,
                userFamily: this.state.family.value,
                userEmail: this.state.email.value,
                userNum: this.state.num.value,
            })
        } else {

            this.props.addUser({
                userName: this.state.name.value,
                userFamily: this.state.family.value,
                userEmail: this.state.email.value,
                userNum: this.state.num.value,
            })
        }

        this.setState({
            name: {
                value: "",
                hasError: false
            },
            family: {
                value: "",
                hasError: false
            },
            email: {
                value: "",
                hasError: false
            },
            num: {
                value: "",
                hasError: false
            }
        })
        this.props.pageHandler()
    }

    render() {
        return (
            <>
                <div className={styles.bd}>
                    <form className={styles.container} onSubmit={(e) => this.submitHandler(e)}>
                        <div className={styles.logo}>G</div>
                        {this.state.submited && this.state.allValid && (
                            <div className="success-message">Success! Thank you for registering</div>
                        )}
                        <div className={styles.inputs}>
                            <Input id='name-input' name='name' type='text' title='NAME' error='Please Enter a name' value={this.state.name.value} hasError={this.state.name.hasError} updateHandler={this.updateField} />
                            <Input id='family-input' name='family' type='text' title='FAMILY' error='Please Enter a family' value={this.state.family.value} hasError={this.state.family.hasError} updateHandler={this.updateField} />
                            <Input id='email-input' name='email' type='email' title='EMAIL' error='Please Enter a email' value={this.state.email.value} hasError={this.state.email.hasError} updateHandler={this.updateField} />
                            <Input id='num-input' name='num' type='text' title='NUM' error='Please Enter a num' value={this.state.num.value} hasError={this.state.num.hasError} updateHandler={this.updateField} />
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}




