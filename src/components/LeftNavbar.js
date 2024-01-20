import { Link, NavLink } from "react-router-dom"

function LeftNavbar() {
    return (
        <>
            <div className="left-navbar col-md-2 blue-bg">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-city"></i>
                            {/* <Link to="onboarding" className="nav-link" data-bs-toggle="collapse">Onboarding</Link> */}
                            <NavLink to="onboarding/business-kyc" className="nav-link">Onboarding</NavLink>
                            <i className="fas fa-angle-down"></i>
                        </div>
                        <div id="onboarding" className="collapse show">
                            <ul className="nav submenu">
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <NavLink to="onboarding/business-kyc" className="nav-link">Business KYC</NavLink>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <NavLink to="onboarding/management-kyc" className="nav-link">Management KYC</NavLink>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <NavLink to="onboarding/business-financials" className="nav-link" href="#">Business Financials</NavLink>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Loan Details</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">ENach</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Approval</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">ESign</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Disbursal</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="far fa-folder"></i>
                            <a href="#documents" className="nav-link" data-bs-toggle="collapse">Loan Documents</a>
                            <i className="fas fa-angle-down"></i>
                        </div>

                        <div id="documents" className="collapse">
                            <ul className="nav submenu">
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Aadhar Card</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">PAN Card</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-sticky-note"></i>
                            <a className="nav-link" href="#">Notes</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-history"></i>
                            <a className="nav-link" href="#">Log History</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-users"></i>
                            <a className="nav-link" href="#">Users</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-cog"></i>
                            <a className="nav-link" href="#">Settings</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LeftNavbar