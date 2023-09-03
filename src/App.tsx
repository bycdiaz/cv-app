import { useState } from "react";
import Header from "./components/Header"
import SectionTabs from "./components/SectionTabs"
import { EducationFields, PersonalDetailFields, Section, WorkExperienceFields } from "./types";
import EditSection from "./components/EditSection";


function App() {
  const [currentTab, setCurrentTab] = useState<Section>('personal-details');
  const [personalDetails, setPersonaldetails] = useState<PersonalDetailFields>({
    'full-name': '',
    'email': '',
    'phone-number': ''
  });

  const [education, setEducation] = useState<EducationFields>({
    'school-name': '',
    'major': '',
    'graduation-year': ''
  });

  const [workExperience, setWorkExperience] = useState<WorkExperienceFields>({
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

  function handleTabClick(section: Section) {
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
