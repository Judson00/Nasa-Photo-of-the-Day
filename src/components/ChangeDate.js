import React from "react";

function ChangeDate({ changeDate }) {
  return (
    <div className="description-date">
      <label htmlFor="date">
        <input type="date" name="date" id="date" />
      </label>
      <button onClick={changeDate}>Change Date</button>
    </div>
  );
}

export default ChangeDate;