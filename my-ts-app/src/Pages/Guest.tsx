import React from 'react'
interface Props { }

interface State {
    Name: string;
    Email:string;
    GuestList:string[];
    EmailList:string[];
}

export class Guest extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Name: "",
            Email:"",
            GuestList:[],
            EmailList:[]
        };
    }
     PushToGuestList() {
         let Name = this.state.Name;
         let guests= this.state.GuestList;
         if(!(guests?.length>0)){    
             guests=[];
         }
         guests=[...guests, Name];
         this.setState({Name:"",GuestList:guests})
         
        let email=this.state.Email;
        let emaillist=this.state.EmailList;
        if(!(emaillist.length>0)){
            emaillist=[];
        }
        emaillist=[...emaillist,email];
        this.setState({Email:"",EmailList:emaillist})
         console.log(" Name " ,Name)
         console.log(" Email " , email)
         console.log("______________________________")
         console.log(" NameArray " ,guests)
         console.log(" EmailArray " , emaillist)
    }
    
    render() {
        let {Name, Email, GuestList,EmailList}=this.state;
        return (
            <div className="container">
                <h4>Guest's List</h4>
                <table className="table table-bordered my-4">
                    <thead className="bg-dark text-light">
                        <tr>
                            <td>Id</td>
                            <td>Guest Name</td>
                            <td>Guest Email</td>
                        </tr>
                    </thead>
                    <tbody>
                            {GuestList?.map((guest,i)=>{
                                return ( <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{guest}</td>
                                    {EmailList?.map((mails,i)=>{
                                        <td>{mails}</td>
                                    })}
                                </tr> )
                            })}
                    </tbody>
                </table>
                <div className='col'>
                <input 
                        type="text" 
                        className="form-control"
                        value={Name}
                        placeholder="Please Enter Your Name"
                        onChange={ (e)=> {
                            this.setState({Name: e.target.value})
                        }}/>
                    <br />
                <input
                    type="Email"
                    className="form-control"
                    value={Email}
                    placeholder="Please Enter Your Email"
                    onChange={(e)=>{
                        this.setState({Email:e.target.value})
                    }}
                />
                <br />
                    <button 
                        className="btn btn-success hover hover-danger col-3"
                        onClick={()=>{this.PushToGuestList()}}>Add Guest</button>
                </div>
            </div>
        )

    }
}