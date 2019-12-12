import React from "react";

//components
import Description from "./Description.js";
import ImageContainer from "./ImageContainer.js";
import ChangeDate from "./ChangeDate.js";

function Card(props) {
  const { image, date, title, exp, changeDate } = props;
  return (
    <div className="cardContainer">
      <ImageContainer image={image} />
      <Description title={title} date={date} exp={exp} />
      <ChangeDate changeDate={changeDate} />
    </div>
  );
}

export default Card;
