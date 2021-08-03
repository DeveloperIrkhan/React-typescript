import React from 'react'
import Moke_Data from './MOCK_DATA.json'
interface Props { }

interface State { }

export class SearchUser extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        var studentFullName="irfan shah Aakhunzada";
        var details=[]
        details=studentFullName.split(' ');
        return (
        <div className="">
            <h2>Your Full name is <span className="text-danger">{studentFullName}</span></h2>
            <h4>your First Name is <span className="text-success"> {details[0]}</span></h4>
            <h4>your Middle Name is <span className="text-success"> {details[1]}</span></h4>
            <h4>your Last Name is <span className="text-success">{details[2]}</span></h4>

                <div className="col-4 m-auto">  <input type="text" className="form-control" placeholder="Enter for Search!" /></div>
            <div className="container p-5">
            <table className="table table-bordered">
                    <thead>
                        <tr><th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email </th>
                            <th>Gender</th>
                            <th>IP Address</th></tr>
                    </thead>
                    <tbody>
                        {
                            Moke_Data.map((data, key) => {
                                return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.ip_address}</td>
                                </tr>)
                                console.log(data)
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}