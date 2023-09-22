import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/shared/Button";
import { dashboardIcons } from "../../../data-store/store";

const {
  Cached,
  GreenCheck,
  BlackCheck,
  BlueCheck,
  SelectArrowDown,
  StickyNote,
} = dashboardIcons;

const InvoiceDetails = () => {
  return (
    <div className="invoice-details-page">
      <div className="row">
        <div className="col-xl-9">
          <div className="first-box">
            <div className="first-box-tab">
              <div className=" d-flex align-items-center gap-2">
                <Link to="../">
                  <span className="icon">
                    <img src={StickyNote} alt="" />
                  </span>
                  <span className="text">Invoice</span>
                </Link>
                <img src={SelectArrowDown} alt="" />
                <p>Invoice New Service Invoice</p>
              </div>
            </div>

            <div className="invoice-details-header mb-4">
              <h4>Invoice Details</h4>
              <p>
                Enter the invoice details below to start creating your invoice
              </p>
            </div>

            <div className="invoice-details-body">
              <form action="" className="row">
                <div className="col-lg-8 mb-3">
                  <div>
                    <label htmlFor="">Invoice Number</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-3 ">
          <div className="second-box d-none d-xl-block">
            <div className="second-box-header">
              {" "}
              <h5>Create New Service Invoice</h5>
            </div>

            <div className="second-box-body">
              <p>
                <span className="icon">
                  <img src={GreenCheck} alt="" />
                </span>{" "}
                <span className="text tx-green">Customer Details</span>
              </p>

              <p>
                <span className="icon">
                  <img src={BlueCheck} alt="" />
                </span>{" "}
                <span className="text tx-blue">Invoice Details</span>
              </p>

              <p>
                <span className="icon">
                  <img src={BlackCheck} alt="" />
                </span>{" "}
                <span className="text tx-grey-1">Preview</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bar d-flex flex-column flex-sm-row gap-3 align-items-center justify-content-between">
        <div className="bottom-bar-one d-flex gap-2 align-items-center ">
          <spam className="icon">
            <img src={Cached} alt="" />
          </spam>
          <span className="text">Make recurring</span>
        </div>
        <div className="d-flex gap-3">
          <Button
            buttonText="Save as Draft"
            bgColor="#EFF6FF"
            borderColor="#2563EB"
            textColor="#2563EB"
            borderRadius={4}
          />{" "}
          <Button
            buttonText="Proceed to Preview"
            bgColor="#2563EB"
            textColor="#fff"
            borderRadius={4}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
