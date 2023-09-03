import { sectionKeysToStrings, sections } from "../types";

function SectionTabs({
  activeSection,
  onSectionClick
}) {
  return (
    sections.map(tab =>
      <button
        onClick={() => onSectionClick(tab)}
        key={tab}
        className={buttonClasses(tab)}
      >
        {sectionKeysToStrings[tab]}
      </button>
    )
  )

  function buttonClasses(tab) {
    let classes = `${tab}`;

    if (activeSection === tab) {
      classes += ` active`
    }

    return classes;
  }
}

export default SectionTabs
