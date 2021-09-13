import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import profilePic from '../sidebar/profile.jpg';
import AddIcon from '@material-ui/icons/Add';
import './story.css'

export const Story = (props) => {
    return (
        <Avatar alt="Remy Sharp" src={props.image} className="story-item"/>
    )
}

export default Story
