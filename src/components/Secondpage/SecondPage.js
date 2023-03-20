import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AllTab from "./AllTab";
import OpenTab from "./OpenTab";
import ClosedTab from "./ClosedTab";
import "./SecondPage.css";

const SecondPage = () => {
  const [key, setKey] = useState("all");

  return (
    <div className="container tabs_wrapper">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabs_container"
      >
        <Tab eventKey="all" title="All" className="tab">
          <AllTab />
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

export default SecondPage;
