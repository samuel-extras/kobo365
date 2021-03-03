import React from "react";
import { Link, useLocation } from "react-router-dom";


const  UserSideBar=()=>{
    const location = useLocation();
	const activeLocation =()=>{
		if (location.pathname === "/"){
			return "dashboard"
		}else{

			return location.pathname.substring(1)
		}
	}
    return(
        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
							<aside className="sidebar sidebar-user">
								<div className="card ctm-border-radius shadow-sm">
									<div className="card-body py-4">
										<div className="row">
											<div className="col-md-12 mr-auto text-left">
												<div className="custom-search input-group">
													<div className="custom-breadcrumb">
														<ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
															<li className="breadcrumb-item d-inline-block">
															
															<Link to="/" className="text-dark">Home</Link></li>
															<li className="breadcrumb-item d-inline-block active">{activeLocation()}</li>
														</ol>
														<h4 className="text-dark">Admin Dashboard</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="user-card card shadow-sm bg-white text-center ctm-border-radius">
									<div className="user-info card-body">
										<div className="user-avatar mb-4">
											<img src="/img-9.jpg" alt="User Avatar" className="img-fluid rounded-circle" width="100"/>
										</div>
										<div className="user-details">
											<h4><b>Welcome Admin</b></h4>
											<p>{new Date().toDateString()}</p>
										</div>
									</div>
								</div>
								<div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
									<div className="card-body">
										<ul className="list-group">
											<li className="list-group-item text-center active button-5"><a href="index.html" className="text-white">Admin Dashboard</a></li>
											<li className="list-group-item text-center button-6"><a className="text-dark" href="employees-dashboard.html">Employees Dashboard</a></li>
										</ul>
									</div>
								</div>
							</aside>
						</div>
    )
}
export default UserSideBar;