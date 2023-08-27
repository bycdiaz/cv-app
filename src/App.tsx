import { useState } from "react";
import Header from "./components/Header"
import SectionTabs from "./components/SectionTabs"
import { Section } from "./types";

function App() {
  const [currentTab, setCurrentTab] = useState<Section>('personal-details');

  return (
    <div>
      <Header
        pageTitle={"CV App"}
      />
      <SectionTabs
        tabs={['personal-details', 'education', 'work-experience']}
        activeSection={currentTab}
        onSectionClick={handleTabClick}
      />
    </div>
  )

  function handleTabClick(section: Section) {
    setCurrentTab(section);
  }
}

export default App
