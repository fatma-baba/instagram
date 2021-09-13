import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import './post.css'

export const Post = (props) => {
    return (
        <div className="post">
            <div className="post__header">
                <img src={props.data.image} alt="" />
            </div>
            <div className="post__body">
                <Avatar src={props.data.author_image} size="small"/>
                <h6>{ props.data.author }</h6>
                <div>
                <Button
                    startIcon={<FavoriteBorderIcon />}
                >
                    { props.data.likes || '0' }
                </Button>
                <Button
                    startIcon={<ChatBubbleIcon />}
                >
                    { props.data.comments || '0' }
                </Button>

                </div>
            </div>
        </div>
    )
}

export default Post
