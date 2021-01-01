import React, { Component } from 'react';
import axios from 'axios';

import Posts from './components/Posts';
import Pagination from './components/Pagination';

export class App extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 5
  };

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState({ posts: results.data });
      this.setState({ loading: false });
    };

    getPosts();
  }

  render() {
    const { currentPage, postsPerPage, posts, loading } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="container">
        <h1 className="my-5 text-primary text-center">React Pagination</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage ={currentPage} nextPage={nextPage} prevPage={prevPage} />
      </div>
    )
  }
}

export default App
