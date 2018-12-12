import React from 'react';
import SnackDetail from './SnackDetail'
import { List } from 'semantic-ui-react';

const SnackList = props => {
    // console.log("props are", props)
    // console.log("-----------")

    const snackArr = props.snacks.map(snack => {
        // YOU BETTA PUT DAT RETURN ON IT
        // snack => {name: "gummi bear cult", img_src: "url"}
        return <SnackDetail key={snack.name} snack={snack}/>
    })

    return (
        <>
        <List size="massive">
            {snackArr}
        </List>
        </>
    )
}

export default SnackList