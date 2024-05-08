import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

const questions = [
  {
    id: 1234,
    question: "what language is react based on?",
    answer: "react",
  },
  {
    id: 3453,
    question: "WHat is my name?",
    answer: "react",
  },

  {
    id: 6854,
    question: "what language is react based on?",
    answer: "react",
  },
  {
    id: 6343,
    question: "what language is react based on?",
    answer: "react",
  },
  {
    id: 9623,
    question: "what language is react based on?",
    answer: "react",
  },
  {
    id: 6853,
    question: "what language is react based on?",
    answer: "react",
  },
];

function Flashcards() {
  const [selectedid, setSelectedid] = useState(null);

  
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
}
