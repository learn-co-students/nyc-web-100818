import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class SnackForm extends Component {
    state = {
        name: '',
        img_src: ''
    }

    handleChange = event => {
        // console.log("handleChange triggered")
        // console.log("event is", event.target.value)
        // console.log("------")
        this.setState({
            [event.target.name]: event.target.value
        })
        // , () => console.log("state is", this.state)
    }

    addSnax = event => {
        event.preventDefault()
        this.props.addToSnacksArray(this.state.name, this.state.img_src)  
        this.setState({
            name: '',
            img_src: ''
        })
    }

    render() {
        // console.log("props are", this.props)
        // console.log("---------")
        return (
            <form onSubmit={this.addSnax}>
                <input type="text" name="name" placeholder="Name???" value={this.state.name} onChange={this.handleChange} />
                <input type="text" name="img_src" placeholder="Wassit Look like?" value={this.state.img_src} onChange={this.handleChange} />
                <Button inverted color="pink">ADD A SNAX</Button>
            </form>
        )
    }
}

export default SnackForm