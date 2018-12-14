import React, { Component } from "react";
import SnackList from './SnackList';
import SnackForm from './SnackForm'

class SnackContainer extends Component {
    state = {
     snacks: [
         {name: "Gummi Bear Cult", img_src: "https://www.candywarehouse.com/assets/1/7/gummy-bears.jpg"},
         {name: "Peanut Butter MMs", img_src: "https://target.scene7.com/is/image/Target/GUEST_09cc8dc5-60b9-4b45-a61f-ac54fcf358c6?wid=488&hei=488&fmt=webp"},
         {name: "Homemade Pop Tars", img_src: "https://www.bigbearswife.com/wp-content/uploads/2017/01/Homemade-Smores-Poptarts-6-683x1024.jpg"}
     ]   
    }

    addToSnacksArray = (snackName, snackImg) => {
        // console.log("add to snacks array triggered")
        // console.log("inside of SNACK CONTAINER!!!")
        // console.log("-----")
        // debugger
        let newSnack = {}
        newSnack.name = snackName 
        newSnack.img_src = snackImg
        // debugger

        this.setState({
            snacks: [...this.state.snacks, newSnack]
        })
    }

    render() {
        return (
            <>
                <SnackForm addToSnacksArray={this.addToSnacksArray} />
                <SnackList snacks={this.state.snacks}/>
            </>
        )
    }
} 

export default SnackContainer;