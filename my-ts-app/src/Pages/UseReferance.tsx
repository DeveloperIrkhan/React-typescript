import React, { useRef, useState } from 'react'
const users = [
    { Id: 1, Name: "irfan", contact: "0333232323", gender: "male" },
    { Id: 2, Name: "fahad", contact: "0345343434", gender: "male" },
    { Id: 3, Name: "inam", contact: "0300232322", gender: "male" },
    { Id: 4, Name: "hamza", contact: "0343343433", gender: "male" },
    { Id: 5, Name: "shandana", contact: "099734343", gender: "female" },
    { Id: 6, Name: "sana", contact: "0234255533", gender: "female" },
    { Id: 7, Name: "obaid", contact: "0987676655", gender: "male" },
    { Id: 8, Name: "taimur", contact: "09273434343", gender: "male" },
]
export const UseReferance:React.FC = () => {
    const [Name, setName] = useState("");
    const [User, setUser] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    onclick = () =>{
        console.log(Name)
        console.log(inputRef)
    }
    return (
        <div className='container'>
            <div className="h2">User List</div>
            <table className='table table-bordered'>
                <thead>
                    <tr><th>Id</th>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Gender</th></tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{user.Id}</td>
                                <td>{user.Name}</td>
                                <td>{user.contact}</td>
                                <td>{user.gender}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="row">
                <input
                    ref={inputRef}
                    placeholder="enter your name to search....."
                    className="form-control"
                    type="text" name="" id="input" />
                    {/* <button onClick={()=>{onclick}} className="btn btn-primary col-3 my-3">Submit</button> */}
            </div>
        </div>
    )
}