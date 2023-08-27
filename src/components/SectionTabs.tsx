import { Section, sectionKeysToStrings, sections } from "../types";

function SectionTabs(
  props: {
    activeSection: Section;
    onSectionClick: (section: Section) => void;
  }
) {
  return (
    sections.map(tab =>
      <button
        onClick={() => props.onSectionClick(tab)}
        key={tab}
        className={buttonClasses(tab)}
      >
        {sectionKeysToStrings[tab]}
      </button>
    )
  )

  function buttonClasses(tab: Section): string {
    let classes = `${tab}`;

    if (props.activeSection === tab) {
      classes += ` active`
    }

    return classes;
  }
}

export default SectionTabs
