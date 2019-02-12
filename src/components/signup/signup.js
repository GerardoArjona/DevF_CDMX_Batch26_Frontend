import React from 'react';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
import SignUpForm from './signup-form';
import { Redirect } from 'react-router-dom';

const SIGNUP = gql`
    mutation Register($first_name:String!,$last_name:String!,$email:String!,
    $password:String!, $profile_image: Upload){
        signup(data:{
            first_name:$first_name,
            last_name:$last_name,
            email:$email,
            password:$password,
            profile_image: $profile_image,
        }){
            token
        }
    }
`;

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                profile_image: [],
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleImage = (file) => {
        this.setState({
            userData: {
                ...this.state.userData,
                profile_image: file
            }
        }, () => console.log(this.state));
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        }, () => console.log(this.state))
    }

    handleSingUp = (event, signup) => {
        event.preventDefault();
        signup({ variables: { ...this.state.userData } })
    }

    render() {
        return (
            <Mutation mutation={SIGNUP}>
                {
                    (signup, { data, error }) => {
                        if (data) {
                            localStorage.setItem("postsToken", data.signup.token);
                            return <Redirect to="/posts" />
                        }
                        if (error) console.log('ERROR--', error)
                        return (
                            <SignUpForm
                                handleChange={this.handleChange}
                                userData={this.state.userData}
                                handleSingUp={(event) => this.handleSingUp(event, signup)}
                                handleImage={this.handleImage}
                            />
                        )
                    }
                }
            </Mutation>
        );
    }
}

export default Signup;
