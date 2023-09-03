export const sections = ['personal-details', 'education', 'work-experience'] as const;
export type Section = typeof sections[number];

export const sectionKeysToStrings = {
  'personal-details': 'Personal Details',
  education: 'Education',
  'work-experience': 'Work Experience',
}

export const sectionStrings = Object.values(sectionKeysToStrings) as Section[];

type Email = string;
type PhoneNumber = number;
type Year = number;

export type PersonalDetailFields = {
  'full-name': string;
  'email': Email | '';
  'phone-number': PhoneNumber | '';
}

export type EducationFields = {
  'school-name': string;
  'major': string;
  'graduation-year': Year | '';
}

export type WorkExperienceFields = {
  'company-name': string;
  'position-title': string;
  'start-date': Date | undefined;
  'end-date': Date | undefined;
}

export type StateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

export type StateFunctions = {
  'personal-details': StateFunction<PersonalDetailFields>,
  'education': StateFunction<EducationFields>,
  'work-experience': StateFunction<WorkExperienceFields>,
}