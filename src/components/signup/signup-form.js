import React from 'react';

const SignupForm = (props) => (
    <form onSubmit={props.handleSingUp}>
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
                        onChange={props.handleChange}
                        value={props.userData.first_name}
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
                        onChange={props.handleChange}
                        value={props.userData.last_name}
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
                        onChange={props.handleChange}
                        value={props.userData.email}
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
                        onChange={props.handleChange}
                        value={props.userData.password}
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
                    <input
                        type="file"
                        id="inputFile"
                        name=''
                        onChange={({ target: { validity, files: [file] } }) => {
                            if (validity.valid) props.handleImage(file)
                        }}
                    />
                </div>
            </div>
        </div>

        <button
            type="submit"
            className="waves-effect waves-light btn btn-primary">
            Enviar
        </button>
    </form>
);

export default SignupForm;
