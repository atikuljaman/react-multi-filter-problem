import React, { useEffect, useState } from "react";
import "./Tabs.css";

const AllTab = ({
  allData,
  filteredCusCodeData,
  filteredCusNameData,
  filteredIntSerNumData,
}) => {
  const [allDataTab, setAllDataTab] = useState([]);

  useEffect(() => {
    if (filteredCusCodeData) {
      setAllDataTab(filteredCusCodeData);
    } else if (filteredCusNameData) {
      setAllDataTab(filteredCusNameData);
    } else if (filteredIntSerNumData) {
      setAllDataTab(filteredIntSerNumData);
    } else {
      setAllDataTab(allData);
    }
  }, [
    allData,
    filteredCusCodeData,
    filteredCusNameData,
    filteredIntSerNumData,
  ]);

  // useEffect(() => {
  //   fetch("./api/allTabData.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllDataTab(data.value));
  // }, [allDataTab]);

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
          {
            allDataTab?.map((data, idx) => (
              <tr key={idx}>
                <td>{data?.ServiceCallID}</td>
                <td>{data?.Subject}</td>
                <td>{data?.CustomerCode}</td>
                <td>{data?.CustomerName}</td>
                <td>{data?.InternalSerialNum}</td>
                <td>{data?.ItemCode}</td>
                <td>{data?.ItemDescription}</td>
                <td>{data?.Status === -3 ? "Pending" : ""}</td>
                <td>{data?.CallType === 3 ? "Email" : ""}</td>
                <td>{data?.ProblemType === 6 ? "Malfunction" : ""}</td>
              </tr>
            ))
            // : allData?.map((data, idx) => (
            //     <tr key={idx}>
            //       <td>{data?.ServiceCallID}</td>
            //       <td>{data?.Subject}</td>
            //       <td>{data?.CustomerCode}</td>
            //       <td>{data?.CustomerName}</td>
            //       <td>{data?.InternalSerialNum}</td>
            //       <td>{data?.ItemCode}</td>
            //       <td>{data?.ItemDescription}</td>
            //       <td>{data?.Status === -3 ? "Pending" : ""}</td>
            //       <td>{data?.CallType === 3 ? "Email" : ""}</td>
            //       <td>{data?.ProblemType === 6 ? "Malfunction" : ""}</td>
            //     </tr>
            //   ))
          }
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

export default AllTab;
