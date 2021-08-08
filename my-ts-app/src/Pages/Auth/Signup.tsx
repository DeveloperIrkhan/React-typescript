import React, { useEffect } from 'react';


interface Props {
    backgoundPics: string
}
interface SignUpValues {
    FirstName: string,
    LastName: string,
    Email: string,
    Password: string,
    ContactNo: string
}
interface State {
    SignUpvalues: SignUpValues;
    ValueArray: SignUpValues[];
    Notvalid: boolean;
}

export class Signup extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            SignUpvalues: Object(),
            ValueArray: [],
            Notvalid: true
        };

        this.onclick = this.onclick.bind(this)
    }
    onclick() {
        let signUpvalues = this.state.SignUpvalues;
        let valueArray = this.state.ValueArray;
        if (!(valueArray)) {
            valueArray = [];
        }
        valueArray = ([...valueArray, { ...signUpvalues }])
        signUpvalues.FirstName = "";
        signUpvalues.LastName = "";
        signUpvalues.Email = "";
        signUpvalues.Password = "";
        signUpvalues.ContactNo = "";
        this.setState({ ValueArray: valueArray })
        console.log("Array Vaules", valueArray)
    }

    render() {
        let Signupvalues = this.state.SignUpvalues
        let ValueArray = this.state.ValueArray
        return (
            <div className="container" style={{backgroundColor:"#f2f2f2"}}>
                <div className="center m-2">
                    <div className="row m-auto">
                        <div className=" alert-success p-4 col-12">
                            <h2 className="text-center text-success">Registeration Form</h2>
                        </div>
                        <div className="form-group order-lg-0 order-1 col-lg-6 col-12 my-5 p-5">
                        <div className=" div-Rounded align-content-center col-12 py-4 px-5"  style={{backgroundColor:"#fff"}}>
                                    <h4 className="text-center my-3 text-capitalize">Names section</h4>
                                <span className="my-2">
                                    <h4></h4>
                                </span>
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-success text-white">
                                            <i className="fas p-1 fa-user"></i>
                                        </span>
                                    </div>
                                    <input className="form-control"
                                        value={Signupvalues.FirstName}
                                        onChange={(e) => {
                                            Signupvalues.FirstName = e.target.value
                                            this.setState({ ValueArray })
                                        }}
                                        placeholder="Enter your First Name!!!" />

                                </div>
                            </div>

                            <div className="form-group  input-group">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-success text-white">
                                            <i className="fas p-1 fa-user"></i>
                                        </span>
                                    </div>
                                    <input className="form-control"
                                        value={Signupvalues.LastName}
                                        onChange={(e) => {
                                            Signupvalues.LastName = e.target.value
                                            this.setState({ ValueArray })
                                        }}
                                        placeholder="Enter your Last Name!!!" />

                                </div>
                            </div>
                            </div>

                            <div className=" div-Rounded align-content-center col-12 py-4 px-5"  style={{backgroundColor:"#fff"}}>
                                    <h4 className="text-center my-3 text-capitalize">Contact section</h4>
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-success text-white">
                                            <i className="p-1 fa fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input className="form-control"
                                        value={Signupvalues.Email}
                                        onChange={(e) => {
                                            Signupvalues.Email = e.target.value
                                            this.setState({ ValueArray })
                                        }}
                                        placeholder="Enter your Email!!!" />

                                </div>
                            </div>


                            <div className="form-group">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-success text-white">
                                                <i className="fas p-1 fa-phone"></i>
                                            </span>
                                        </div>
                                        <input className="form-control"
                                            value={Signupvalues.ContactNo}
                                            onChange={(e) => {
                                                Signupvalues.ContactNo = e.target.value
                                                this.setState({ ValueArray })
                                            }}
                                            placeholder="Enter your Phone No!!!" />

                                    </div>
                                </div>
</div>

                            <div className=" div-Rounded align-content-center col-12 py-4 px-5"  style={{backgroundColor:"#fff"}}>
                                    <h4 className="text-center my-3 text-capitalize">Password section</h4>
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-success text-white">
                                            <i className="fas p-1 fa-key"></i>
                                        </span>
                                    </div>
                                    <input className="form-control col-lg-3"
                                        value={Signupvalues.Password}
                                        onChange={(e) => {
                                            Signupvalues.Password = e.target.value
                                            this.setState({ ValueArray })
                                        }}
                                        placeholder="Enter your Password!!!" />

                                </div>
                            </div>
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-success text-white">
                                                <i className="fas p-1 fa-key"></i>
                                            </span>
                                        </div>
                                        <input className="form-control"
                                            placeholder="Enter your Password Again!!!" />
                                    </div>
                            </div>
</div>

                            <div className="col">
                                <button onClick={this.onclick} className="my-3 p-3 col-12 btn btn-outline-success">Signup</button>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1  p-lg-5 p-3 order-0 col-12 my-5 d-flex align-items-center justify-content-center">
                            <img height="100vh" className="img-fluid" src={this.props.backgoundPics} alt="Img" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}