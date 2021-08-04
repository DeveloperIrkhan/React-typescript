import React from 'react'

interface Props { }

interface EmployeeDetails {
    Name: string,
    Email: string,
    Phone: string,
    Address: string
}
interface State {
    Employee: EmployeeDetails;
    EmployeeList: EmployeeDetails[];
    valid: boolean;
}

export class EmployeeRecord extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Employee: Object(),
            EmployeeList: [],
            valid: false,
        };
        this.PushData = this.PushData.bind(this);
        this.validationCheck=this.validationCheck.bind(this);
    }

    PushData() {
        let employee = this.state.Employee;
        let employeelist = this.state.EmployeeList;
        if (!(employeelist)) {
            employeelist = [];
        }
        employeelist = ([...employeelist, { ...employee }]);
        employee.Name = "";
        employee.Email = "";
        employee.Phone = "";
        employee.Address = "";
        this.setState({ EmployeeList: employeelist })
    }
    validationCheck() {
        let Emp = this.state.Employee;
        let Name = Emp.Name;
        let Email = Emp.Email;
        let Phone = Emp.Phone;
        let Address = Emp.Address;
        if (Name !== "" || Email !== "" || Phone !== "" || Address !== "") {
            this.setState({ valid: false })
            this.PushData();
        }
        else {
            this.setState({ valid: true })
        }
    }
    render() {
        const { valid } = this.state;
        let Employee = this.state.Employee;
        let EmployeeList = this.state.EmployeeList
        return (
            <div className="bg-light-gray">
                <div className="col-6 m-auto p-5">
                    <div className={`${valid === true && Employee.Name === "" ? "requiredbox active" : ""}`}>
                        <input
                            type="text"
                            className="form-control"
                            value={Employee.Name}
                            placeholder="Please Enter Your Name"
                            onChange={(e) => {
                                Employee.Name = e.target.value
                                this.setState({ Employee })
                            }} />
                        <h6 className="required py-1" style={{float:'left'}} >
                            <img src="/alert.svg" width="20px" alt="" /> Your Name Required
                        </h6>
                    </div>
                    <br />
                    <div className={`${valid === true && Employee.Email === "" ? "requiredbox active" : ""}`}>
                    <input
                        type="text"
                        className="form-control"
                        value={Employee.Email}
                        placeholder="Please Enter Your Email"
                        onChange={(e) => {
                            Employee.Email = e.target.value
                            this.setState({ Employee })
                        }} />
                        <h6 className="required py-1" style={{float:'left'}} >
                            <img src="/alert.svg" width="20px" alt="" /> Your Email Required
                        </h6>
                        </div>
                    <br />
                    <div className={`${valid === true && Employee.Phone === "" ? "requiredbox active" : ""}`}>
                    <input
                        type="text"
                        className="form-control"
                        value={Employee.Phone}
                        placeholder="Please Enter Your Phone"
                        onChange={(e) => {
                            Employee.Phone = e.target.value
                            this.setState({ Employee })
                        }} />
                        <h6 className="required py-1" style={{float:'left'}} >
                            <img src="/alert.svg" width="20px" alt="" /> Your Phone Required
                        </h6>
                    </div>
                    <br />
                    <div className={`${valid === true && Employee.Address === "" ? "requiredbox active" : ""}`}>
                    <input
                        type="text"
                        className="form-control"
                        value={Employee.Address}
                        placeholder="Please Enter Your Address"
                        onChange={(e) => {
                            Employee.Address = e.target.value
                            this.setState({ Employee })
                        }} />
                        <h6 className="required py-1" style={{float:'left'}} >
                            <img src="/alert.svg" width="20px" alt="" /> Your Address Required
                        </h6>
                    </div>
                    <br />
                    
                </div>
               <div>
               <button
                        onClick={()=>{
                            this.validationCheck();
                        }}

                        // className={`${valid ? "btn btn-outline-success mb-5 col-3 disabled" :"btn btn-outline-success mb-5 col-3"}`}
                        className="btn btn-outline-success mb-5 col-3"
                        >
                        Save</button>
               </div>
                <div className="container">
                    <table className="table table-bordered">
                        <thead className="bg-danger text-white">
                            <tr>
                                <th>Employee's Id</th>
                                <th>Employee's Name</th>
                                <th>Employee's Email</th>
                                <th>Employee's Phone No</th>
                                <th>Employee's Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {EmployeeList?.map((list, key) => {
                                return (
                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>{list.Name}</td>
                                        <td>{list.Email}</td>
                                        <td>{list.Phone}</td>
                                        <td>{list.Address}</td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}