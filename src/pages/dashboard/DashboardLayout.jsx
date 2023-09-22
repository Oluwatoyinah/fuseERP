import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { dashboardIcons } from "../../data-store/store";

const {
  Logo,
  DashboardSvg,
  HR,
  Inventory,
  Invoice,
  ProjectManagement,
  CustomerRelations,
  Accounting,
  Settings,
  Notification,
  ProfileImg,
  SelectArrowDown,
} = dashboardIcons;

const DashboardLayout = () => {
  const [activeSideNav, setActiveSideNav] = useState(false);
  return (
    <div>
      <div className="container-fluid dashboard d-flex">
        <div
          className={`dashboard-side-nav d-flex flex-column ${
            activeSideNav ? "active" : ""
          }`}
        >
          <div className="dashboard-side-nav-logo-box">
            <img src={Logo} alt="" />

            <div className="close-box d-lg-none">
              <button onClick={() => setActiveSideNav(false)}>close x</button>
            </div>
          </div>

          <div className="dashboard-side-nav-list flex-grow-1 d-flex flex-column justify-content-between">
            <ul>
              <li className="dashboard-side-nav-list-item">
                <NavLink>
                  <span className="icon">
                    <img src={DashboardSvg} alt="" />
                  </span>
                  <span className="text">Dashboard</span>
                </NavLink>
              </li>
              <li className="dashboard-side-nav-list-item">
                <NavLink>
                  <span className="icon">
                    <img src={Invoice} alt="" />
                  </span>
                  <span className="text">Invoice</span>
                </NavLink>
              </li>
              <li className="dashboard-side-nav-list-item">
                <NavLink>
                  <span className="icon">
                    <img src={HR} alt="" />
                  </span>
                  <span className="text">Human Resources</span>
                </NavLink>
              </li>
              <li className="dashboard-side-nav-list-item">
                <NavLink>
                  <span className="icon">
                    <img src={ProjectManagement} alt="" />
                  </span>
                  <span className="text">Project Management</span>
                </NavLink>
              </li>
              <li className="dashboard-side-nav-list-item">
                <NavLink>
                  <span className="icon">
                    <img src={Inventory} alt="" />
                  </span>
                  <span className="text">Inventory</span>
                </NavLink>
              </li>
              <li className="dashboard-side-nav-list-item">
                <NavLink>
                  <span className="icon">
                    <img src={Accounting} alt="" />
                  </span>
                  <span className="text">Accounting</span>
                </NavLink>
              </li>
              <li className="dashboard-side-nav-list-item">
                <NavLink>
                  <span className="icon">
                    <img src={CustomerRelations} alt="" />
                  </span>
                  <span className="text">Customer Relations</span>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li className="dashboard-side-nav-list-item">
                <NavLink>
                  <span className="icon">
                    <img src={Settings} alt="" />
                  </span>
                  <span className="text">Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard-main-content">
          <div className="dashboard-main-content-top-bar d-flex gap-3 align-items-center">
            <div class="d-block d-lg-none">
              <button class="hamburger" onClick={() => setActiveSideNav(true)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="d-flex gap-2 justify-content-between align-items-center flex-grow-1">
              <div className="dashboard-main-content-top-bar-title-box">
                <h2>Invoice</h2>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="dashboard-main-content-top-bar-notification">
                  <img src={Notification} alt="" />
                </div>

                <div className="d-flex gap-1 align-items-center dashboard-main-content-top-bar-profile">
                  <img src={ProfileImg} alt="" />
                  <p>Kolade</p>
                  <img src={SelectArrowDown} style={{ width: "20px" }} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-main-content-body">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
