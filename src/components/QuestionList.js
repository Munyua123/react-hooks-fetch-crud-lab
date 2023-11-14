import React from "react";
import QuestionItem from "./QuestionItem";
import { useState } from "react";
import { useEffect } from "react";

function QuestionList() {
    const baseUrl = "http://localhost:3002/questions"
  const [questionData, setQuestionData] = useState([])

  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => setQuestionData(data))
  }, [])

const displayData = questionData.map(item => {
  
  return(
    <QuestionItem 
    key={item.id}
    id={item.id}
    prompt={item.prompt}
    answers={item.answers}
    correctIndex={item.correctIndex}
    />
  )
})
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {displayData}
      </ul>
    </section>
  );
}

export default QuestionList;
