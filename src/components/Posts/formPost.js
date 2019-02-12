import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";

const POST_REGISTER = gql`
mutation addPost($title:String!,$content:String!,$category:CATEGORIES!){
    createPost(data:{
        title:$title,
        content:$content,
        category:$category,
    }){
        title
    }
}
`;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            category: 'TECH'
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }

    handleCreatePost = (event, addPost) => {
        event.preventDefault();
        addPost({ variables: { ...this.state } })
    }

    render() {
        return (
            <div>
                <Mutation mutation={POST_REGISTER}>
                    {
                        (addPost, { data, error }) => {
                            if (data) console.log('data: ', data)
                            if (error) console.log('error: ', error)
                            return (
                                <form onSubmit={event => this.handleCreatePost(event, addPost)}>
                                    Titulo: <input name='title' type="text" onChange={this.handleChange}></input>
                                    desc: <input name='content' type="text" onChange={this.handleChange}></input>
                                    <button
                                        type="submit"
                                        className="waves-effect waves-light btn btn-primary">
                                        registrar post
                                    </button>
                                </form>
                            );
                        }
                    }

                </Mutation>
            </div>
        );
    }
}

export default Home;