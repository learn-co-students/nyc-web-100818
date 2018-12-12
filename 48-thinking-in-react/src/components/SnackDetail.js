import React from 'react';
import { List, Image } from 'semantic-ui-react'

const SnackDetail = props => {
    // console.log("props are", props)
    // console.log("---------")
    const { img_src, name } = props.snack
    return (
        <>
            <List.Item>
                <Image avatar src={img_src} />
                <List.Content>
                    <List.Header>{name}</List.Header>
                </List.Content>
            </List.Item>
        </>
    )
}

export default SnackDetail