import React from "react";
import Button from "../../../components/shared/Button";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { dashboardIcons } from "../../../data-store/store";
import { Link } from "react-router-dom";

const { Add, View, More, Search, SelectArrowDown, Export } = dashboardIcons;

const Invoice = () => {
  return (
    <div className="invoice-page">
      <div className="page-header-box d-flex flex-column flex-md-row justify-content-between gap-2 align-items-start py-0 my-4">
        <div>
          <h3>Purchase Order</h3>
          <p>
            You currently have <span className="special">26</span> purchase
            orders{" "}
          </p>
        </div>

        <div>
          <Button
            buttonText="Create New Purchase Order"
            frontIconImgSrc={Add}
            bgColor="#2563EB"
            textColor="#fff"
            borderRadius={4}
            IconWidth={20}
            extraStyle={{
              boxShadow: "0px 4px 6px 0px rgba(37, 99, 235, 0.10);",
            }}
          />
        </div>
      </div>

      <div className="invoice-page-table">
        <div>
          <div className="table-features d-flex flex-column flex-xl-row gap-3 justify-content-between">
            <div className="d-flex align-items-center gap-1 order-2 order-xl-1">
              <div className="search-box">
                <img src={Search} alt="" />
                <input
                  placeholder="Search by vendor name, id, amount..."
                  type="text"
                />
              </div>

              <div className="status-box">
                <img src={SelectArrowDown} className="arrow" alt="" />
                <select name="" id="">
                  <option value="">Status</option>
                </select>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 order--1 order-xl-2 justify-content-end justify-content-xl-start">
              <p className="sort">Sort</p>
              <div className="date-added">
                <img src={SelectArrowDown} className="arrow" alt="" />
                <select name="" id="">
                  <option value="">Date Added</option>
                </select>
              </div>

              <div className="export">
                <img src={SelectArrowDown} className="arrow" alt="arrow-icon" />
                <img src={Export} className="export" alt="export-icon" />
                <select name="" id="">
                  <option value="">PDF</option>
                  <option value="Excel">Excel</option>
                </select>
              </div>
            </div>
          </div>
          <div class="table-responsive main-table my-4">
            <table class="w-100">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th scope="col">#Purchase Order</th>
                  <th scope="col">Date created</th>
                  <th scope="col">Vendor name</th>
                  <th scope="col">Expected delivery date</th>
                  <th scope="col">Purchase Order Amount</th>
                  <th scope="col">Outstanding balance</th>
                  <th scope="col">Status</th>
                  <th scope="col">
                    <img src={View} height={30} width={30} alt="" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill(1)
                  .map((_, i) => (
                    <tr key={i}>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td class="tx-blue">PO-000026</td>
                      <td>Dec. 14, 2022 8:32 AM</td>
                      <td>DeliverPal</td>
                      <td>Dec. 19, 2022 8:32 AM</td>
                      <td>&#x20A6; 170,000.00</td>
                      <td>&#x20A6; 170,000.00</td>
                      <td>
                        <span class="status-bar bg-transparent-blue tx-blue d-flex gap-1 align-items-center justify-content-center">
                          <span className="dot bg-blue"></span>
                          <span className="text">Issued</span>
                        </span>
                      </td>
                      <td>
                        <Link to={`invoice/${i + 1}`}>
                          <img src={More} alt="" height={30} width={30} />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="table-pagination d-flex gap-2 justify-content-between pb-3 flex-column flex-sm-row">
            <div className="page d-flex align-items-center gap-2 order-2 order-sm-1 justify-content-end justify-content-sm-start">
              <p>Page 1 of 3</p>

              <div className=" d-flex align-items-center gap-2">
                <button className="prev-btn" disabled>
                  <FaAngleLeft />
                </button>
                <div className=" d-flex align-items-center gap-1">
                  <div className="page-number active">1</div>
                  <div className="page-number">2</div>
                  <div className="page-number">3</div>
                </div>
                <button className="next-btn">
                  <FaAngleRight />
                </button>
              </div>
            </div>
            <div className="show d-flex align-items-center gap-2 order-1 order-sm-2 justify-content-end">
              <p>Show</p>
              <div className="show-select">
                <img src={SelectArrowDown} className="arrow" alt="" />
                <select name="" id="">
                  <option value="">10 rows</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
