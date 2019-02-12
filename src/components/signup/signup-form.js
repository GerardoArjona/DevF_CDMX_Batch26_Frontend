import React from 'react';
import Dropzone from 'react-dropzone'
import classNames from 'classnames';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        }
    }
    onDrop(acceptedFiles) {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                const fileAsBinaryString = reader.result;
                this.setState({
                    file: file,
                    imagePreviewUrl: fileAsBinaryString
                });
            };
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.readAsDataURL(file);
        });

    }

    render() {
        return (
            <form onSubmit={this.props.handleSingUp}>
                <div className='container'>
                    <div className="form-group row">
                        <label
                            htmlFor="inputName"
                            className="col-sm-2 col-form-label"
                        >
                            Name:
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                placeholder="Fisr Name"
                                name='first_name'
                                onChange={this.props.handleChange}
                                value={this.props.userData.first_name}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="inputLastName"
                            className="col-sm-2 col-form-label"
                        >
                            Last Name:
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputLastName"
                                placeholder="Last Name"
                                name='last_name'
                                onChange={this.props.handleChange}
                                value={this.props.userData.last_name}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="inputEmail"
                            className="col-sm-2 col-form-label"
                        >
                            Email:
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Email"
                                name='email'
                                onChange={this.props.handleChange}
                                value={this.props.userData.email}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                        >
                            Password:
                    </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Password"
                                name='password'
                                onChange={this.props.handleChange}
                                value={this.props.userData.password}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="inputFile"
                            className="col-sm-2 col-form-label"
                        >
                            Image:
                    </label>
                        <div className="col-sm-10">
                            <Dropzone onDrop={this.onDrop.bind(this)}>
                                {({ getRootProps, getInputProps, isDragActive }) => {
                                    return (
                                        <div
                                            {...getRootProps()}
                                            className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                                        >
                                            <input {...getInputProps()} />
                                            {
                                                isDragActive ?
                                                    <p>Drop files here...</p> :
                                                    <p>Try dropping some files here, or click to select files to upload.</p>
                                            }
                                        </div>
                                    )
                                }}
                            </Dropzone>
                            <img src={this.state.imagePreviewUrl} alt=""/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="inputFile"
                            className="col-sm-2 col-form-label"
                        />
                        <div className="col-sm-10">
                            <button
                                type="submit"
                                className="waves-effect waves-light btn btn-primary">
                                SignUp
                    </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default SignupForm;
