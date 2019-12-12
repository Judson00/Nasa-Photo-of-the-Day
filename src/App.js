import React, { useState, useEffect } from "react";

//components
import Card from "./components/Cards.js";

//api
import axios from "axios";

//style
import "./App.css";

import styled from 'styled-components';

const PageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

function App() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState([]);
  const [exp, setExp] = useState([]);
  const [title, setTitle] = useState([]);

  //Handler to be attached to an input field
  const changeDate = newDate => {
    setDate(newDate);
  };

  //useEffect
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=nsgoV8jb5FEeibHFBrKf2IpoDDWzanILaYUbaiCJ`
      )
      .then(res => {
        setImage(res.data.url);
        setExp(res.data.explanation);
        setTitle(res.data.title);
        setDate(res.data.date);
      })
      .catch(err => console.log(err));
  }, [date]);

  return (
    <PageDiv className="App">
      <h1>Photo of the Day!</h1>
        <Card
          image={image}
          date={date}
          title={title}
          exp={exp}
          changeDate={() => changeDate(document.getElementById("date").value)}
        />
    </PageDiv>
  );
}

export default App;