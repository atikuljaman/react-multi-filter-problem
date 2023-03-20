import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AllTab from "./AllTab";
import OpenTab from "./OpenTab";
import ClosedTab from "./ClosedTab";
import { IoIosArrowDown } from "react-icons/io";
import "./Tabs.css";

const AllDataTabs = () => {
  const [key, setKey] = useState("all");
  const [sortByFilterDropDown, setSortByFilterDropDown] = useState(false);
  const [problemTypeDropDown, setProblemTypeDropDown] = useState(false);
  const [callTypeDropDown, setCallTypeDropDown] = useState(false);
  const [itemDescriptionDropDown, setItemDescriptionDropDown] = useState(false);
  const [itemCodeDropDown, setItemCodeDropDown] = useState(false);
  const [internalSerialNumDropDown, setInternalSerialNumDropDown] =
    useState(false);
  const [customerNameDropDown, setCustomerNameDropDown] = useState(false);
  const [customerCodeDropDown, setCustomerCodeDropDown] = useState(false);

  const [sortByFilter, setSortByFilter] = useState("");
  const [problemTypeFilter, setProblemTypeFilter] = useState("");
  const [callTypeFilter, setCallTypeFilter] = useState("");
  const [itemDescriptionFilter, setItemDescriptionFilter] = useState("");
  const [itemCodeFilter, setItemCodeFilter] = useState("");
  const [internalSerialNumFilter, setInternalSerialNumFilter] = useState("");
  const [customerNameFilter, setCustomerNameFilter] = useState("");
  const [customerCodeFilter, setCustomerCodeFilter] = useState("");

  const [allData, setAllData] = useState([]);

  ////////////////////////////////////////////////////////////////////////
  const [filteredCusCodeData, setFilteredCusCodeData] = useState(null);
  const [filteredCusNameData, setFilteredCusNameData] = useState(null);
  const [filteredIntSerNumData, setFilteredIntSerNumData] = useState(null);

  // FUNCTION FOR FILTERING CUSTOMER CODE DATA
  const handleCustomerCodeFilterChange = (filterText) => {
    setCustomerCodeFilter(filterText);
    setCustomerCodeDropDown(false);

    const updateData = allData.filter((data) => {
      return data.CustomerCode === filterText;
    });

    if (updateData) {
      return setFilteredCusCodeData(updateData);
    }
  };

  // FUNCTION FOR FILTERING CUSTOMER NAME DATA
  const handleCustomerNameFilterChange = (filterText) => {
    setCustomerNameFilter(filterText);
    setCustomerNameDropDown(false);

    const updateData = allData.filter((data) => {
      return data.CustomerName === filterText;
    });

    if (updateData) {
      return setFilteredCusNameData(updateData);
    }
  };

  // FUNCTION FOR FILTERING CUSTOMER NAME DATA
  const handleInternalSerialNumFilterChange = (filterText) => {
    setInternalSerialNumFilter(filterText);
    setInternalSerialNumDropDown(false);

    const updateData = allData.filter((data) => {
      return data.InternalSerialNum === filterText;
    });

    if (updateData) {
      return setFilteredIntSerNumData(updateData);
    }
  };

  const handleItemCodeFilterChange = (filterText) => {
    setItemCodeFilter(filterText);
    setItemCodeDropDown(false);

    const updateData = allData.filter((data) => {
      return data.ItemCode === filterText;
    });

    if (updateData) {
      // return setFilterData(updateData);
    }
  };

  const handleItemDescriptionFilterChange = (filterText) => {
    setItemDescriptionFilter(filterText);
    setItemDescriptionDropDown(false);

    const updateData = allData.filter((data) => {
      return data.ItemDescription === filterText;
    });

    if (updateData) {
      // return setFilterData(updateData);
    }
  };

  const handleCallTypeFilterChange = (filterText) => {
    setCallTypeFilter(filterText);
    setCallTypeDropDown(false);

    const updateData = allData.filter((data) => {
      return data.CallType === filterText;
    });

    if (updateData) {
      // return setFilterData(updateData);
    }
  };

  const handleProblemTypeFilterChange = (filterText) => {
    setProblemTypeFilter(filterText);
    setProblemTypeDropDown(false);

    const updateData = allData.filter((data) => {
      return data.ProblemType === filterText;
    });

    if (updateData) {
      // return setFilterData(updateData);
    }
  };

  const handleSortByFilterChange = (filterText) => {
    setSortByFilter(filterText);
    setSortByFilterDropDown(false);
  };

  useEffect(() => {
    fetch("./api/allTabData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data.value);
      });
  }, []);

  return (
    <div className="container tabs_wrapper">
      <div className="filter_wrapper">
        <div className="filter_container">
          <div
            className="filter_header"
            onClick={() => {
              setCustomerCodeDropDown(!customerCodeDropDown);
              setCustomerNameDropDown(false);
              setInternalSerialNumDropDown(false);
              setItemCodeDropDown(false);
              setItemDescriptionDropDown(false);
              setCallTypeDropDown(false);
              setProblemTypeDropDown(false);
              setSortByFilterDropDown(false);
            }}
          >
            <div className="filter_header_left">
              <p>Customer Code</p>
              <span>{customerCodeFilter}</span>
            </div>
            <IoIosArrowDown className="arrow_icon" />
          </div>

          {customerCodeDropDown && (
            <div className="filter_body">
              <ul>
                {allData.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      handleCustomerCodeFilterChange(data?.CustomerCode)
                    }
                  >
                    {data?.CustomerCode}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter_container">
          <div
            className="filter_header"
            onClick={() => {
              setCustomerNameDropDown(!customerNameDropDown);
              setCustomerCodeDropDown(false);
              setInternalSerialNumDropDown(false);
              setItemCodeDropDown(false);
              setItemDescriptionDropDown(false);
              setCallTypeDropDown(false);
              setProblemTypeDropDown(false);
              setSortByFilterDropDown(false);
            }}
          >
            <div className="filter_header_left">
              <p>Customer Name</p>
              <span>{customerNameFilter}</span>
            </div>
            <IoIosArrowDown className="arrow_icon" />
          </div>

          {customerNameDropDown && (
            <div className="filter_body">
              <ul>
                {allData?.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      handleCustomerNameFilterChange(data?.CustomerName)
                    }
                  >
                    {data?.CustomerName}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter_container">
          <div
            className="filter_header"
            onClick={() => {
              setInternalSerialNumDropDown(!internalSerialNumDropDown);
              setCustomerNameDropDown(false);
              setCustomerCodeDropDown(false);
              setItemCodeDropDown(false);
              setItemDescriptionDropDown(false);
              setCallTypeDropDown(false);
              setProblemTypeDropDown(false);
              setSortByFilterDropDown(false);
            }}
          >
            <div className="filter_header_left">
              <p>Internal SerialNum</p>
              <span>{internalSerialNumFilter}</span>
            </div>
            <IoIosArrowDown className="arrow_icon" />
          </div>

          {internalSerialNumDropDown && (
            <div className="filter_body">
              <ul>
                {allData?.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      handleInternalSerialNumFilterChange(
                        data?.InternalSerialNum
                      )
                    }
                  >
                    {data?.InternalSerialNum}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter_container">
          <div
            className="filter_header"
            onClick={() => {
              setItemCodeDropDown(!itemCodeDropDown);
              setInternalSerialNumDropDown(false);
              setCustomerNameDropDown(false);
              setCustomerCodeDropDown(false);
              setItemDescriptionDropDown(false);
              setCallTypeDropDown(false);
              setProblemTypeDropDown(false);
              setSortByFilterDropDown(false);
            }}
          >
            <div className="filter_header_left">
              <p>Item Code</p>
              <span>{itemCodeFilter}</span>
            </div>
            <IoIosArrowDown className="arrow_icon" />
          </div>

          {itemCodeDropDown && (
            <div className="filter_body">
              <ul>
                {allData.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleItemCodeFilterChange(data?.ItemCode)}
                  >
                    {data?.ItemCode}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter_container">
          <div
            className="filter_header"
            onClick={() => {
              setItemDescriptionDropDown(!itemDescriptionDropDown);
              setItemCodeDropDown(false);
              setInternalSerialNumDropDown(false);
              setCustomerNameDropDown(false);
              setCustomerCodeDropDown(false);
              setCallTypeDropDown(false);
              setProblemTypeDropDown(false);
              setSortByFilterDropDown(false);
            }}
          >
            <div className="filter_header_left">
              <p>Item Description</p>
              <span>{itemDescriptionFilter}</span>
            </div>
            <IoIosArrowDown className="arrow_icon" />
          </div>

          {itemDescriptionDropDown && (
            <div className="filter_body">
              <ul>
                {allData?.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      handleItemDescriptionFilterChange(data?.ItemDescription)
                    }
                  >
                    {data?.ItemDescription}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter_container">
          <div
            className="filter_header"
            onClick={() => {
              setCallTypeDropDown(!callTypeDropDown);
              setItemDescriptionDropDown(false);
              setItemCodeDropDown(false);
              setInternalSerialNumDropDown(false);
              setCustomerNameDropDown(false);
              setCustomerCodeDropDown(false);
              setProblemTypeDropDown(false);
              setSortByFilterDropDown(false);
            }}
          >
            <div className="filter_header_left">
              <p>Call Type</p>
              <span>{callTypeFilter}</span>
            </div>
            <IoIosArrowDown className="arrow_icon" />
          </div>

          {callTypeDropDown && (
            <div className="filter_body">
              <ul>
                {allData?.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleCallTypeFilterChange(data?.CallType)}
                  >
                    {data?.CallType}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter_container">
          <div
            className="filter_header"
            onClick={() => {
              setProblemTypeDropDown(!problemTypeDropDown);
              setCallTypeDropDown(false);
              setItemDescriptionDropDown(false);
              setItemCodeDropDown(false);
              setInternalSerialNumDropDown(false);
              setCustomerNameDropDown(false);
              setCustomerCodeDropDown(false);
              setSortByFilterDropDown(false);
            }}
          >
            <div className="filter_header_left">
              <p>Problem Type</p>
              <span>{problemTypeFilter}</span>
            </div>
            <IoIosArrowDown className="arrow_icon" />
          </div>

          {problemTypeDropDown && (
            <div className="filter_body">
              <ul>
                {allData?.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      handleProblemTypeFilterChange(data?.ProblemType)
                    }
                  >
                    {data?.ProblemType}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="filter_container">
          <div
            className="filter_header"
            onClick={() => {
              setSortByFilterDropDown(!sortByFilterDropDown);
              setProblemTypeDropDown(false);
              setCallTypeDropDown(false);
              setItemDescriptionDropDown(false);
              setItemCodeDropDown(false);
              setInternalSerialNumDropDown(false);
              setCustomerNameDropDown(false);
              setCustomerCodeDropDown(false);
            }}
          >
            <div className="filter_header_left">
              <p>Sort by</p>
              <span>{sortByFilter}</span>
            </div>
            <IoIosArrowDown className="arrow_icon" />
          </div>

          {sortByFilterDropDown && (
            <div className="filter_body">
              <ul>
                <li onClick={() => handleSortByFilterChange("Subject")}>
                  Subject
                </li>
                <li onClick={() => handleSortByFilterChange("Customer Code")}>
                  Customer Code
                </li>
                <li onClick={() => handleSortByFilterChange("Customer Name")}>
                  Customer Name
                </li>
                <li
                  onClick={() => handleSortByFilterChange("Internal SerialNum")}
                >
                  Internal SerialNum
                </li>
                <li onClick={() => handleSortByFilterChange("Item Code")}>
                  Item Code
                </li>
                <li
                  onClick={() => handleSortByFilterChange("Item Description")}
                >
                  Item Description
                </li>
                <li onClick={() => handleSortByFilterChange("Status")}>
                  Status
                </li>
                <li onClick={() => handleSortByFilterChange("Call Type")}>
                  Call Type
                </li>
                <li onClick={() => handleSortByFilterChange("Problem Type")}>
                  Problem Type
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabs_container"
      >
        <Tab eventKey="all" title="All" className="tab">
          <AllTab
            allData={allData}
            filteredCusCodeData={filteredCusCodeData}
            filteredCusNameData={filteredCusNameData}
            filteredIntSerNumData={filteredIntSerNumData}
          />
        </Tab>
        <Tab eventKey="open" title="Open" className="tab">
          <OpenTab />
        </Tab>
        <Tab eventKey="closed" title="Closed" className="tab">
          <ClosedTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AllDataTabs;
