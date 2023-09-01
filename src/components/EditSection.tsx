import { EducationFields, PersonalDetailFields, Section, WorkExperienceFields } from "../types";

function EditSection(
  props: {
    currentTab: Section;
    currentSetStateFunction:
    React.Dispatch<React.SetStateAction<PersonalDetailFields>> |
    React.Dispatch<React.SetStateAction<EducationFields>> |
    React.Dispatch<React.SetStateAction<WorkExperienceFields>>
    currentFormState: PersonalDetailFields | EducationFields | WorkExperienceFields
  }
) {

  return (
    <form onSubmit={() => {
      console.log('wow');
      return undefined;
    }}>
      <div>Current Section: {props.currentTab}</div>
      {/* <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label> */}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default EditSection
