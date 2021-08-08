import React from 'react';

interface Props { }

interface State {
    FullName:string;
 }

export class Namespliting extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            FullName:"",
        };
    }

    render() {
        var FullName = this.state.FullName;
        var studentFullName = FullName;
        var details = []
        details = studentFullName.split(' ');
        return (
            <>
                <div className="py-5">
                    <h2>Your Full name is <span className="text-danger">{studentFullName ? studentFullName:"....." }</span></h2>
                    <h4>your First Name is <span className="text-success"> {details[0]?.length>0 ? details[0]: "...empty..."}</span></h4>
                    <h4>your Middle Name is <span className="text-success"> {details[1]?.length>0 ? details[1]: "...empty..."}</span></h4>
                    <h4>your Last Name is <span className="text-success">{details[2]?.length>0 ? details[2]: "...empty..."}</span></h4>
                </div>
                <div className="col">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Your Full Name"
                    value={FullName}
                    onChange={(e)=>{
                        this.setState({FullName:e.target.value})
                }} />
                </div>
            </>
        )
    }
}