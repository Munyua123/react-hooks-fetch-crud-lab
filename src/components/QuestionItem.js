import React from "react";

function QuestionItem(question ) {
  const baseUrl = "http://localhost:3002/questions"
  function handleDelete() {
    fetch(`${baseUrl}/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
      }
    })
    .then (res => res.json())
    .then(data => console.log(data))
  }

  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
