import React from "react";

interface Props {}
interface States {}

class Accountdetails extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h2 className="nav">Account Details</h2>
        </div>
        <div>
          <div className="AccountDetails_Container">
            <div>
              <div>
                <div className="AccountDetails_MainBox">
                  <div className="AccountDetails_InnerDiv">
                    <span>
                      <h4>General Setting </h4>
                    </span>
                    <div style={{ padding: 20 }}>
                      <img className=" imgFluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png" alt="cardimage" />
                    </div>
                    <span>
                      <h5 style={{ paddingBottom: 20 }}>Change Avatar</h5>
                    </span>
                    <div>
                      <input type="text" placeholder="First name" id="" className="formControl form-control" />
                    </div>
                    <div>
                      <input type="text" placeholder="Last name" id="" className="formControl" />
                    </div>
                    <div>
                      <input type="text" placeholder="Enail" id="" className="formControl" />
                    </div>
                  </div>
                </div>

                <div className="AccountDetails_MainBox">
                  <div className="AccountDetails_InnerDiv">
                    <span>
                      <h4>Password Setting </h4>
                    </span>
                    <div>
                      <div>
                        <input type="password" placeholder="Current Password" id="" className="formControl" />
                      </div>
                      <div>
                        <input type="password" placeholder="New Password" id="" className="formControl" />
                      </div>
                      <div>
                        <input type="password" placeholder="Re-enter New password" id="" className="formControl" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="AccountDetails_CheckboxesDiv">
                    <h4 className="d-flex justify-content-center">Email notifiction</h4>
                    <div style={{ paddingTop: 30 }}>
                      <div className="AccountDetails_Checkboxes">
                        <input className="checkmark form-check-Input" type="checkbox" value="" id="Verifaction" />
                        <label className="form-check-label" htmlFor="Verifaction">
                          Verifaction expire soon
                        </label>
                      </div>

                      <div className="AccountDetails_Checkboxes">
                        <input className="checkmark form-check-Input " type="checkbox" value="" id="WeeklyReport" />
                        <label className="form-check-label" htmlFor="WeeklyReport">
                          Weekly reports
                        </label>
                      </div>

                      <div className="AccountDetails_Checkboxes">
                        <input className="checkmark form-check-Input " type="checkbox" value="" id="DataZooReports" />
                        <label className="form-check-label" htmlFor="DataZooReports">
                          DataZoo Reports & updates
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttonDiv">
                  <button className="">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accountdetails;
