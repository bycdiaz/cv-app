function Preview({ 
  currentFormState,
  setEditMode
 }) {
   return (
    <>
      {cvValues()}
      <button onClick={() => setEditMode(true)}>Edit</button>
    </>
  );

  function cvValues() {
    return (
      Object.entries(currentFormState).map(([section, properties]) => {
        return (
          <div key={section}>
            {Object.entries(properties).map(([label, value]) => {
              return (
                <div key={label}>
                  <h3>{label}</h3>
                  <p>{value}</p>
                </div>
              )
            })}
          </div>
        )
      })
    )
  }
}

export default Preview
