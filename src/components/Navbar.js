import { useEffect } from 'react';
import logo from '../assets/images/logo.jpeg'

export default function Navbar() {
    const handleClick = (e) => {
        e.preventDefault();
        document.body.classList.toggle('navbar-toggle');
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm dashboard-navbar blue-bg sticky-top">
                <div className="container-fluid p-0">
                    <div className="col-md-12 d-flex">
                        <div className="col-md-2 navbar-logo">
                            <a className="navbar-brand" href="/">
                                <img src={logo} />
                            </a>
                            <span className='bars-icon' onClick={handleClick}><i className="fas fa-bars"></i></span>
                        </div>
                        <div className="col-md-10 d-flex right-search-navbar">
                            <div className="col-md-3">
                                <form className="d-flex">
                                    <div className="search-header">
                                        <span className="search-icon"><i className="fas fa-search"></i></span>
                                        <input className="form-control" type="text" placeholder="Search" />
                                    </div>
                                </form>
                            </div>
                            <div className="navbar-right ms-auto d-flex align-items-center">
                                <div className="header-notification">
                                    <i className="far fa-bell"></i>
                                    <span className="badge rounded-pill bg-danger">5</span>
                                </div>
                                <div className="profile-info">
                                    <img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                        className="user-img" />
                                    <span className="">Mohit Sharma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}