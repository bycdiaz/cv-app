function EditSection(props) {

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
    return Object.keys(getCurrentFormState(props.currentTab));
  }

  function getCurrentFieldValue(label) {
    const state = getCurrentFormState(props.currentTab);

    if (state === undefined) {
      return '';
    }

    if (props.currentTab === 'personal-details') {
      return (state)[label].toString() || '';
    }

    if (props.currentTab === 'education') {
      return (state)[label].toString() || '';
    }

    if (props.currentTab === 'work-experience') {
      return (state)[label].toString() || '';
    }

    return '';
  }

  function getCurrentFormState(currentTab) {
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

  function handleOnChange(updatedValue, label) {
    const currentTab = props.currentTab;
    if (currentTab === 'education') {
      const currentFormState = getCurrentFormState(currentTab);
      const currentSetStateFunction = getCurrentSetStateFunction();

      const newFormState = {
        ...currentFormState,
        [label]: updatedValue
      };

      currentSetStateFunction(newFormState);
    } else if (currentTab === 'personal-details') {
      const currentFormState = getCurrentFormState(currentTab);
      const currentSetStateFunction = getCurrentSetStateFunction();

      const newFormState = {
        ...currentFormState,
        [label]: updatedValue
      };

      currentSetStateFunction(newFormState);
    } else if (currentTab === 'work-experience') {
      const currentFormState = getCurrentFormState(currentTab);
      const currentSetStateFunction = getCurrentSetStateFunction();

      const newFormState = {
        ...currentFormState,
        [label]: updatedValue
      };

      currentSetStateFunction(newFormState);
    }

  }
}

export default EditSection
