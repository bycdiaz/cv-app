import { useState } from "react";
import Header from "./components/Header"
import SectionTabs from "./components/SectionTabs"
import { EducationFields, PersonalDetailFields, Section, WorkExperienceFields } from "./types";


// TODO Create reusable form component that can accept any of the states below
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
    </div>
  )

  function handleTabClick(section: Section) {
    setCurrentTab(section);
  }
}

export default App
