import React, { useEffect, useState } from "react";
import "./Tabs.css";

const ClosedTab = () => {
  const [allDataTab, setAllDataTab] = useState([]);

  useEffect(() => {
    fetch("./api/allTabData.json")
      .then((res) => res.json())
      .then((data) => setAllDataTab(data.value));
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Service Call ID</th>
            <th>Subject</th>
            <th>Customer Code</th>
            <th>Customer Name</th>
            <th>Internal SerialNum</th>
            <th>Item Code</th>
            <th>Item Description</th>
            <th>Status</th>
            <th>Call Type</th>
            <th>Problem Type</th>
          </tr>
        </thead>
        <tbody>
          {allDataTab?.map((data) => (
            <tr>
              <td>{data?.ServiceCallID}</td>
              <td>{data?.Subject}</td>
              <td>{data?.CustomerCode}</td>
              <td>{data?.CustomerName}</td>
              <td>{data?.InternalSerialNum}</td>
              <td>{data?.ItemCode}</td>
              <td>{data?.ItemDescription}</td>
              <td>{data?.Status}</td>
              <td>{data?.CallType}</td>
              <td>{data?.ProblemType}</td>
            </tr>
          ))}
          {/* <tr>
            <td>25459</td>
            <td>3/13/2023</td>
            <td>
              <div className="bade_tag">NA</div>
            </td>
            <td>Marissa Manicure</td>
            <td>Tamp Driver</td>
            <td>
              <div className="td_type_content">
                <span>Express</span>
                <span>25%</span>
              </div>
            </td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>
              <div className="td_btn_container">
                <button className="btn btn-outline-success">Complete</button>
                <button className="btn btn-outline-danger">Scuff</button>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ClosedTab;
