import { useState } from "react";
import Header from "./components/Header"
import SectionTabs from "./components/SectionTabs"
import EditSection from "./components/EditSection";

export const sections = ['personal-details', 'education', 'work-experience'];

function App() {
  const [currentTab, setCurrentTab] = useState(sections[0]);
  const [personalDetails, setPersonaldetails] = useState({
    'full-name': '',
    'email': '',
    'phone-number': ''
  });

  const [education, setEducation] = useState({
    'school-name': '',
    'major': '',
    'graduation-year': ''
  });

  const [workExperience, setWorkExperience] = useState({
    'company-name': '',
    'position-title': '',
    'start-date': undefined,
    'end-date': undefined
  });

  return (
    <div>
      <Header
        pageTitle={"CV App"}
      />
      <SectionTabs
        activeSection={currentTab}
        onSectionClick={handleTabClick}
      />
      <EditSection
        currentTab={currentTab}
        currentSetStateFunction={currentFormStateFunction()}
        currentFormState={currentFormState()}
      />
    </div>
  )

  function handleTabClick(section) {
    setCurrentTab(section);
  }

  function currentFormStateFunction() {
    return {
      'personal-details': setPersonaldetails,
      'education': setEducation,
      'work-experience': setWorkExperience
    };
  }

  function currentFormState() {
    return {
      'personal-details': personalDetails,
      'education': education,
      'work-experience': workExperience
    };
  }
}

export default App
