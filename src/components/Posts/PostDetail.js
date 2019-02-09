import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const SINGLEPOST = gql`
    query SinglePost($id:ID!){
        Post(id:$id){
          _id,
          title,
          content,
          category,
          author{
              _id,
              first_name
          }  
        }
    }
`

export default class PostDetail extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            id:props.match.params.id     
        }
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Query query={SINGLEPOST} variables={{id:this.state.id}}>
                            {
                                ({loading,data,error})=>{
                                    if(error) return <h4>{error}</h4>
                                    if(loading) return <h2>Loading...</h2>
                                    return(
                                        <React.Fragment>
                                            <h1>{data.Post.title}</h1>
                                            <h2>{data.Post.content}</h2>
                                            <h4>{data.Post.category}</h4>
                                            <h4>{data.Post.author.first_name}</h4>
                                        </React.Fragment>
                                    )
                                }
                            }
                        </Query>                        
                    </div>
                </div>
            </div>
         );
    }
}