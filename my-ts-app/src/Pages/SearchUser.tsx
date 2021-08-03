import React from 'react'
import Moke_Data from './MOCK_DATA.json'
interface Props { }

interface State {
    Name: string;
}

export class SearchUser extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Name: "",
        };
    }
    render() {
        var studentFullName = "irfan shah Aakhunzada";
        var details = []
        details = studentFullName.split(' ');
        const { Name } = this.state;
        return (
            <div className="">
                <div className="col-4 m-auto">
                    <input
                        type="text"
                        onChange={(e) => {
                            this.setState({ Name: e.target.value })
                        }}
                        className="form-control"
                        placeholder="Search....."
                    /></div>
                <div className="container p-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr><th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email </th>
                                <th>Gender</th>
                                <th>Phone No</th></tr>
                        </thead>
                        <tbody>
                            {
                                Moke_Data.filter((value) => {
                                    if (Name === "") {
                                        return value;
                                    }
                                    else if (value.first_name.toLocaleLowerCase().includes(Name.toLocaleLowerCase()) ||
                                        value.last_name.toLocaleLowerCase().includes(Name.toLocaleLowerCase())) {
                                        return value;
                                    }

                                }).map((data, key) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td>{data.first_name}</td>
                                                <td>{data.last_name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.gender}</td>
                                                <td>{data.PhoneNo}</td>
                                            </tr>)
                                        console.log(data)
                                    })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="py-5">
                <h2>Your Full name is <span className="text-danger">{studentFullName}</span></h2>
                <h4>your First Name is <span className="text-success"> {details[0]}</span></h4>
                <h4>your Middle Name is <span className="text-success"> {details[1]}</span></h4>
                <h4>your Last Name is <span className="text-success">{details[2]}</span></h4>

                </div>
            </div>
        )
    }
}