import React from 'react'
import Post from '../post/post';
import './feed.css'


export const Feed = () => {
    const feeds_list = [
        {
            image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            author: 'Mister red',
            author_image: 'https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
            likes: '2.5k',
            comments: '300',
        },
        {
            image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
            author: 'Mister red',
            author_image: 'https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
            likes: '2.5k',
            comments: '300',        }, 
        {
            image: 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            author: 'Mister red',
            author_image: 'https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
            likes: '2.5k',
            comments: '300',
        },
        {
            image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            author: 'Mister red',
            author_image: 'https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
            likes: '2.5k',
            comments: '300',
        },
        {
            image: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            author: 'Mister red',
            author_image: 'https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
            likes: '2.5k',
            comments: '300',
        },
        {
            image: 'https://images.unsplash.com/photo-1505999407077-7937810b98ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80',
            author: 'Mister red',
            author_image: 'https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
            likes: '2.5k',
            comments: '300',
        },
        {
            image: 'https://images.unsplash.com/photo-1502120492606-fba13cc63721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            author: 'Mister red',
            author_image: 'https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
            likes: '2.5k',
            comments: '300',
        },
        {
            image: 'https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            author: 'Mister red',
            author_image: 'https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
            likes: '2.5k',
            comments: '300',
        },
    ]

    return (
        <div className="feed">
            <h1>Feed</h1>
                <div className="posts">
                    {feeds_list.map((feed, index) =>  <Post key={index} data={feed}/>) }
                </div>
        </div>
    )
}

export default Feed
