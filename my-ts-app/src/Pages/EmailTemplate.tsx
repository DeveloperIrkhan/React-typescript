import * as React from 'react'
class EmailTemplate extends React.Component {
    state = {}
    render() {
        return (
            <div className="container-fluid center">
                <div className="container">
                    <div className=" center mt-5">
                    <img className=" imgFluid" src="/idulogosq.png" alt="cardimage" style={{ height: "50px" }} />
                </div>
                <div className="center my-5 mx-lg-5 bg-dark pt-5 pb-2">
                    <img className=" imgFluid" src="/EmailCodeLogo.png" alt="cardimage" style={{ height: "80px" }} />
                    <span>
                        <h2 className="text-white mt-4 p-1">confirmation code for idux</h2>
                    </span>
                </div>
                <span>
                    <h2 className="mt-4">Your Code is: 123456</h2>
                </span>
                <span>
                    <p className="mt-4 mx-lg-5 mx-sm-2 center">You're receiving this email because you have an Account in idux.
                        if you are not sure why you're receiving this please contact us.
                    </p>
                </span>
                </div>
            </div>
        );
    }
}

export default EmailTemplate;