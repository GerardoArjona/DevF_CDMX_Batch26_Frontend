import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            profile_image: null,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, () => console.log(this.state))
    };

    // handleChange2 = () => {
    //     this.setState({
    //         first_name: 'Hola'
    //     }, () => console.log(this.state))
    // }
    render() {
        return (
            <form>
                <label>Name:
                    <input
                        name='first_name'
                        type="text"
                        onChange={this.handleChange}
                    />
                </label>
                <label>last Name:
                    <input
                        name='last_name'
                        type="text"
                        onChange={this.handleChange}
                    />
                </label>
                <label>email:
                    <input
                        type="text"
                        name='email'
                        onChange={this.handleChange}
                    />
                </label>
                <label>passoword:
                    <input
                        type="text"
                        name='password'
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default RegisterForm;
