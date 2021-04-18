import React, { useState } from "react";
import "./style.css";

function Tabs({ tabLabels = [], children }) {
  const [tabs, setTabs] = useState(
    tabLabels.map(tabText => {
      return { class: "tab", text: tabText };
    })
  );

  const [selectedTab, setSelectedTab] = React.useState(null);

  function selectTab(tabText, i) {
    const tabsCopy = tabs.map(t => {
      if (t.text === tabText) {
        t.class = "tab tab-selected";
      } else {
        t.class = "tab";
      }
      return t;
    });

    setSelectedTab(children[i]);
    setTabs(tabsCopy);
  }

  return (
    <>
      <div className="tabs">
        {" "}
        {tabs.map((t, i) => (
          <div className={t.class} onClick={() => selectTab(t.text, i)}>
            {t.text}
          </div>
        ))}
      </div>
      <div style={{ width: "100%", height: "100%", border: "red 1px solid" }}>
        {selectedTab}
      </div>
    </>
  );
}

export default Tabs;
