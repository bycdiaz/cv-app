function EditSection(props) {

  return (
    <form>
      <div>Current Section: {props.currentTab}</div>
      {getLabels().map(label => {
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
    return getCurrentFormState(props.currentTab)[label].toString() || '';
  }

  function getCurrentFormState(currentTab) {
    return props.currentFormState[currentTab];
  };

  function getCurrentSetStateFunction() {
    return props.currentSetStateFunction[props.currentTab];
  }

  function handleOnChange(updatedValue, label) {
    const currentFormState = getCurrentFormState(props.currentTab);
    const currentSetStateFunction = getCurrentSetStateFunction();
    const newFormState = {
      ...currentFormState,
      [label]: updatedValue
    };

    currentSetStateFunction(newFormState);
  }
}

export default EditSection
