import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [showAnswer,setShowAnswer] = useState(false)
  const [count, setCount] = useState(0)
  var pressedStart = false

const flashcards = [
    {Question: "What is the longest river in the world?", Answer: "Nile River"},
    {Question: "What is the highest mountain in the world?", Answer: "Mount Everest"},
    {Question: "What is the largest desert in the world?", Answer: "Sahara Desert"},
    {Question: "What is the smallest continent?", Answer: "Australia"},
    {Question: "What is the most populous country in the world?", Answer: "India"},
    {Question: "What ocean is the deepest?", Answer: "Pacific Ocean"},
    {Question: "What is the capital of Japan?", Answer: "Tokyo"},
    {Question: "What is the longest mountain range in the world?", Answer: "Andes Mountains"},
    {Question: "What is the largest island in the world?", Answer: "Greenland"},
    {Question: "What is the driest continent on Earth?", Answer: "Antarctica"}
];

  // const currentCard =  pressedStart ? {"Start!": "Press the Right Arrow"} : flashcards[count]
  console.log("Current Count: " + count)
  console.log("Flashcard length " + flashcards.length)
  console.log("Current Card : " + flashcards[count].Question)
  const safeCount = Math.max(0, Math.min(count, flashcards.length - 1));
  var currentCard = flashcards[safeCount];
  

  const nextCard = () => {
    setCount((count) => 
          count >= flashcards.length-1 ? count = 1 : count + 1
          )
    //when going to next card, question should always be shown first
    setShowAnswer(false)
  }

  const prevCard = () => {
    setCount((count) => 
            count <= 0 ? count = flashcards.length-1 : count - 1
            )
    //when going to next card, question should always be shown first
    setShowAnswer(false)
  }

  const randomCard = () =>{
    setCount((count) => 
          count = getRandomInt(flashcards.length))
    setShowAnswer(false)
  }

  const flipCard = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <>
      <h2>FlashCard Geography</h2>
      <h4>Test your basic geography skills with these simple flashcards!</h4>
      <div>
        Card {count + 1} out of {flashcards.length}.
      </div>
      <br/>
      
      <Card 
        cardQuestion = {currentCard.Question} 
        cardAnswer = {currentCard.Answer}
        flipCard = {flipCard}
        showAnswer = {showAnswer}
      />
      <div className="controls">
        <button onClick={() => prevCard()}>
          Left Arrow
        </button>
        <button onClick={() => nextCard()}>
          Right Arrow
        </button>
        <button onClick={() => randomCard()}>
          Random Card
        </button>
      </div>
    </>
  )
}

//<Card cardQuestion={cardQuestion} cardAnswer={cardAnswer}/>

function getRandomInt (max){
  var number
  number = Math.floor(Math.random() * max);
  console.log("Generating Random Number")
  console.log(number)
  return number
}



export default App
