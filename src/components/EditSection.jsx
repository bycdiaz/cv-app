function EditSection({
  currentTab,
  currentFormState,
  currentSetStateFunction,
  setEditMode
}) {

  return (
    <form>
      <div>Current Section: {currentTab}</div>
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
      <input type="submit" value="Preview" onClick={e => {
        e.preventDefault();
        setEditMode(false);
      }}/>
    </form>
  );

  function getLabels() {
    return Object.keys(getCurrentFormState(currentTab));
  }

  function getCurrentFieldValue(label) {
    const currentValue = getCurrentFormState(currentTab)[label];

    if (currentValue !== undefined) {
      return currentValue;
    }
    
    return '';
  }

  function getCurrentFormState(currentTab) {
    return currentFormState[currentTab];
  };

  function getCurrentSetStateFunction() {
    return currentSetStateFunction[currentTab];
  }

  function handleOnChange(updatedValue, label) {
    getCurrentSetStateFunction()({
      ...getCurrentFormState(currentTab),
      [label]: updatedValue
    });
  }
}

export default EditSection
