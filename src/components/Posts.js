import React, { Component } from 'react'

export class Posts extends Component {
    render() {
        const { posts, loading } = this.props;

        if (loading) {
            return <h2>Loading...</h2>
        }

        return (
            <div>
                {posts.map(post => (
                    <div key={post.id} className="alert alert-primary">
                        <h4 className="alert-heading">{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Posts
