import { Section } from "../types";

function SectionTabs(
  props: {
    tabs: Section[];
    activeSection: Section;
    onSectionClick: (section: Section) => void;
  }
) {
  return (
    props.tabs.map(tab =>
      <button
        onClick={() => props.onSectionClick(tab)}
        key={tab}
        className={buttonClasses(tab)}
      >
        {tab}
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
