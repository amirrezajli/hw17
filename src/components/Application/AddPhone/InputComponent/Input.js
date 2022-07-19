import { Component } from "react";
export default class Input extends Component {

    render() {
        return (
            <>
                <label >{this.props.title}  {this.props.hasError && (
                    <span id="first-error">{this.props.error}</span>
                )}</label>
              
                <input name={this.props.name} type={this.props.type} id={this.props.id} onChange={(e) => { this.props.updateHandler(this.props.name, e.target.value) }} value={this.props.value} />
            </>
        )
    }
}