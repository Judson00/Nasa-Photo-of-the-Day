import React from "react";

import styles from 'styled-components';
//components
import Description from "./Description.js";
import ImageContainer from "./ImageContainer.js";
import ChangeDate from "./ChangeDate.js";

const CardDiv = styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`

function Card(props) {
  const { image, date, title, exp, changeDate } = props;
  return (
    <CardDiv className="cardContainer">
      <ImageContainer image={image} />
      <Description title={title} date={date} exp={exp} />
      <ChangeDate changeDate={changeDate} />
    </CardDiv>
  );
}

export default Card;
