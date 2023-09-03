import { EducationFields, PersonalDetailFields, Section, StateFunction, WorkExperienceFields } from "../types";

function EditSection(
  props: {
    currentTab: Section;
    currentSetStateFunction:
    {
      'personal-details': StateFunction<PersonalDetailFields>;
      'education': StateFunction<EducationFields>;
      'work-experience': StateFunction<WorkExperienceFields>;
    }
    currentFormState: {
      'personal-details': PersonalDetailFields;
      'education': EducationFields;
      'work-experience': WorkExperienceFields;
    }
  }
) {

  return (
    <form>
      <div>Current Section: {props.currentTab}</div>
      {getLabels()?.map(label => {
        return (
          <div
            className="input-container"
            key={label}
          >
            <label
            >
              {label}
            </label>
            <input
              type="text"
              value={getCurrentFieldValue(label)}
              onChange={(event) => handleOnChange(event.target.value, label)}
            />
          </div>
        )
      })}
      <input type="submit" value="Submit" />
    </form>
  );

  function getLabels() {
    return Object.keys(getCurrentFormState(props.currentTab) as PersonalDetailFields);
  }

  function getCurrentFieldValue(label: string): string {
    const state = getCurrentFormState(props.currentTab);

    if (state === undefined) {
      return '';
    }

    if (props.currentTab === 'personal-details') {
      return (state as PersonalDetailFields)[label as keyof PersonalDetailFields]?.toString() || '';
    }

    if (props.currentTab === 'education') {
      return (state as EducationFields)[label as keyof EducationFields]?.toString() || '';
    }

    if (props.currentTab === 'work-experience') {
      return (state as WorkExperienceFields)[label as keyof WorkExperienceFields]?.toString() || '';
    }

    return '';
  }

  function getCurrentFormState(currentTab: Section) {
    if (currentTab === 'personal-details') {
      return props.currentFormState[currentTab];
    } else if (currentTab === 'education') {
      return props.currentFormState[currentTab];
    } else if (currentTab === 'work-experience') {
      return props.currentFormState[currentTab];
    }

  };

  function getCurrentSetStateFunction() {
    const currentTab = props.currentTab;

    if (currentTab === 'personal-details') {
      return props.currentSetStateFunction['personal-details'];
    } else if (currentTab === 'education') {
      return props.currentSetStateFunction['education'];
    } else if (currentTab === 'work-experience') {
      return props.currentSetStateFunction['work-experience'];
    }
  }

  function handleOnChange(updatedValue: string, label: string) {
    const currentTab = props.currentTab;
    if (currentTab === 'education') {
      const currentFormState = getCurrentFormState(currentTab) as EducationFields;
      const currentSetStateFunction = getCurrentSetStateFunction() as StateFunction<EducationFields>;

      const newFormState = {
        ...currentFormState,
        [label]: updatedValue
      };

      currentSetStateFunction(newFormState);
    } else if (currentTab === 'personal-details') {
      const currentFormState = getCurrentFormState(currentTab) as PersonalDetailFields;
      const currentSetStateFunction = getCurrentSetStateFunction() as StateFunction<PersonalDetailFields>;

      const newFormState = {
        ...currentFormState,
        [label]: updatedValue
      };

      currentSetStateFunction(newFormState);
    } else if (currentTab === 'work-experience') {
      const currentFormState = getCurrentFormState(currentTab) as WorkExperienceFields;
      const currentSetStateFunction = getCurrentSetStateFunction() as StateFunction<WorkExperienceFields>;

      const newFormState = {
        ...currentFormState,
        [label]: updatedValue
      };

      currentSetStateFunction(newFormState);
    }

  }
}

export default EditSection
