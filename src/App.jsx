import { useState } from "react";
import Header from "./components/Header"
import SectionTabs from "./components/SectionTabs"
import EditSection from "./components/EditSection";
import Preview from "./components/Preview";

export const sections = ['personal-details', 'education', 'work-experience'];

function App() {
  const [currentTab, setCurrentTab] = useState(sections[0]);
  const [editMode, setEditMode] = useState(true);
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
      {mainContent()}
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

  function mainContent() {
    if (editMode) {
      return (
        <>
          <SectionTabs
            activeSection={currentTab}
            onSectionClick={handleTabClick}
          />
          <EditSection
            currentTab={currentTab}
            currentSetStateFunction={currentFormStateFunction()}
            currentFormState={currentFormState()}
            setEditMode={setEditMode}
          />
        </>
      )
    } else {
      return (
        <Preview
          currentFormState={currentFormState()}
          setEditMode={setEditMode}
        /> 
      )
    }
  }
}

export default App
