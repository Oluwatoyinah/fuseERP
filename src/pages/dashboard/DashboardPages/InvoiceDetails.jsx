import React from "react";
import { Link } from "react-router-dom";
import FileUpload from "../../../components/FileUpload";
import Button from "../../../components/shared/Button";
import { dashboardIcons } from "../../../data-store/store";

const {
  Cached,
  GreenCheck,
  BlackCheck,
  BlueCheck,
  SelectArrowDown,
  StickyNote,
  BlueAdd,
} = dashboardIcons;

const InvoiceDetails = () => {
  return (
    <div className="invoice-details-page">
      <div className="row gx-0">
        <div className="col-xxl-9 col-xl-8">
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
              <form action="" className="row auth-form">
                <div className="col-md-8 mb-4">
                  <div class="input-box">
                    <input
                      type="text"
                      name="invoice_name"
                      autocomplete="off"
                      required
                    />
                    <label for="email" class="label-name">
                      <span class="label-text">Invoice Name </span>
                    </label>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div class="input-date-box">
                    <input
                      type="date"
                      name="date"
                      autocomplete="off"
                      required
                    />
                    <label for="email" class="label-name">
                      <span class="label-text"> Invoice Date </span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-12 mb-4">
                  <div class="input-box">
                    <input
                      type="text"
                      name="invoice_title"
                      autocomplete="off"
                      required
                    />
                    <label for="email" class="label-name">
                      <span class="label-text">Invoice Title </span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-12 mb-4">
                  <div class="input-textarea-box">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Enter a title"
                    ></textarea>

                    <label for="email" class="label-name">
                      <span class="label-text">Invoice Title </span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-7 col-md-6 mb-4">
                  <div class="input-select-box">
                    <select name="" id="">
                      <option value="">Select When Due</option>
                    </select>

                    <label for="email" class="label-name">
                      <span class="label-text">Invoice Due Date</span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 mb-4">
                  <div class="input-date-box">
                    <input
                      type="date"
                      name="date"
                      autocomplete="off"
                      required
                    />
                    <label for="email" class="label-name">
                      <span class="label-text"> Date Date </span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div class="input-select-box">
                    <select name="" id="">
                      <option value="">Select Preferred Currency</option>
                    </select>

                    <label for="email" class="label-name">
                      <span class="label-text">Currency </span>
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="divider"></div>
                </div>

                <div className="mb-5">
                  <div className="item row gx-0">
                    <div className=" mb-2 col-xl-6 col-lg-12">
                      <div className="item-header">
                        <h6>Item Details</h6>
                      </div>

                      <div className="item-body">
                        <div className="col-xl-11">
                          <div class="input-box">
                            <input
                              type="text"
                              name=""
                              autocomplete="off"
                              placeholder="Enter item Description"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mb-2">
                      <div className="item-header">
                        <h6>Quantity</h6>
                      </div>
                      <div className="item-body">
                        <div className="col-md-11">
                          <div class="input-box">
                            <input
                              type="number"
                              name=""
                              autocomplete="off"
                              placeholder="0.00"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mb-2">
                      <div className="item-header">
                        <h6>Unit Price</h6>
                      </div>
                      <div className="item-body">
                        <div className="col-md-11">
                          <div class="input-box">
                            <input
                              type="number"
                              name=""
                              autocomplete="off"
                              placeholder="0.00"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mb-2">
                      <div className="item-header">
                        <h6>Amount</h6>
                      </div>
                      <div className="item-body">
                        <div className="col-md-11">
                          <div class="input-box">
                            <input
                              type="number"
                              name=""
                              autocomplete="off"
                              placeholder="0.00"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Button
                      buttonText="Add Another Line Item"
                      frontIconImgSrc={BlueAdd}
                      bgColor="transparent"
                      textColor="#2563eb"
                      IconWidth={20}
                      extraStyle={{ fontWeight: "700", padding: " 5px 0" }}
                    />
                  </div>

                  <div className="total-box">
                    <p>Subtotal</p>
                    <p>0.00</p>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="row mb-3">
                    <div className="col-lg-8 col-md-10 ms-auto tax-details">
                      <div className="mb-3">
                        <h6>TAX(Select all that applies)</h6>
                        <div className="d-flex gap-5 align-items-center">
                          <div className="">
                            <div className="d-flex gap-2 align-items-center">
                              <input type="checkbox" checked />
                              <label htmlFor="">Value Added Tax (VAT)</label>
                            </div>
                          </div>
                          <div className="">
                            <div className="d-flex gap-2 align-items-center">
                              <input type="checkbox" />
                              <label htmlFor="">Withholding Tax (WTH)</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h6 className="text-uppercase">Withholding tax</h6>
                        <div className="row gy-3">
                          <div className="col-md-4">
                            <div class="input-select-box">
                              <select name="" id="">
                                <option value="">Percentage</option>
                              </select>

                              {/* <label for="email" class="label-name">
                                <span class="label-text">Invoice Due Date</span>
                              </label> */}
                            </div>
                          </div>
                          <div className="col-md-4 col-6">
                            <div class="input-box">
                              <input
                                type="number"
                                name="number"
                                autocomplete="off"
                                placeholder="0.00"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-4 col-6">
                            <div class="input-box">
                              <input
                                type="number"
                                name="number"
                                autocomplete="off"
                                placeholder="0.00"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h6 className="text-uppercase">
                          Shipping Fee (Optional)
                        </h6>
                        <div class="input-box">
                          <input
                            type="number"
                            name="number"
                            autocomplete="off"
                            placeholder="0.00"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="total-box">
                    <p>Total</p>
                    <p>0.00</p>
                  </div>
                </div>

                <div className="">
                  <div>
                    <h3 className="sub-title mb-2">Additional Items</h3>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div class="input-box">
                      <input
                        type="text"
                        name="invoice_name"
                        autocomplete="off"
                        required
                      />
                      <label for="email" class="label-name">
                        <span class="label-text">Invoice Note </span>
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div class="input-textarea-box">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Enter terms & condition"
                      ></textarea>

                      <label for="email" class="label-name">
                        <span class="label-text">Terms & Condition</span>
                      </label>
                    </div>
                  </div>

                  <div className="col-12 mb-5">
                    <h6 className="text-uppercase upload-label mb-2">
                      Attach a supporting Document
                    </h6>
                    <div>
                      <FileUpload />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4">
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
