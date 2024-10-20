import React from "react";

function Filter() {
  const [filterText, setFilterText] = React.useState("");

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div>
      {/* Votre JSX de filtre ici */}
      <input
        type="text"
        value={filterText}
        onChange={handleFilterChange}
        placeholder="Filter movies..."
      />
    </div>
  );
}

export default Filter;
