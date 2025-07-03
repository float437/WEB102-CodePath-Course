import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [showAnswer,setShowAnswer] = useState(false);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

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

  // console.log("Current Count: " + count)
  // console.log("Flashcard length " + flashcards.length)
  // console.log("Current Card : " + flashcards[count].Question)
  const safeCount = Math.max(0, Math.min(count, flashcards.length - 1));
  var currentCard = flashcards[safeCount];

  const handleInput = (e) =>{
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === flashcards[count].Answer){
      // change the background of the textarea to light green for one second
      changeTextAreaBackground('correct');
      setTimeout(() => {changeTextAreaBackground('correct')}, 1000);
    }else{
      // change background of textarea to light red for one second
      changeTextAreaBackground('incorrect');
      setTimeout(() => {changeTextAreaBackground('incorrect')}, 1000);
    }
  }

  const changeTextAreaBackground = (correct) =>{
    let textArea = document.getElementById('answerBox');
    textArea.classList.toggle(correct);
  }

  const greyOut = (id) =>{
    let greyButton = document.getElementById(`${id}`);
    textArea.classList.toggle('greyedOut');
  }
  

  const nextCard = () => {
    let prevButton = document.getElementById('leftButton');
    let nextButton = document.getElementById('rightButton');
    setCount((count) => {
      const newCount = count >= flashcards.length-1 ? flashcards.length-1 : count + 1;
        // console.log("Before Next Count: " + newCount)
        if(prevButton.classList.contains('greyedOut') && newCount >= 0){
                  // console.log("After Next Count: " + newCount)
                  prevButton.classList.remove('greyedOut')
        }
        if(!nextButton.classList.contains('greyedOut') && newCount == flashcards.length -1){
          nextButton.classList.add('greyedOut')
        }

      return newCount
    })
    //when going to next card, question should always be shown first
    setShowAnswer(false)
  }

  const prevCard = () => {
      // need to check the buttons class list to see if it has the greyedOut class, else count as normal
      let prevButton = document.getElementById('leftButton');
      let nextButton = document.getElementById('rightButton');
    
      setCount((count) => {
        const newCount = count <= 0 ? 0 : count - 1;
        
        if(!prevButton.classList.contains('greyedOut') && newCount <= 0){
          prevButton.classList.add('greyedOut')
        }
        if(nextButton.classList.contains('greyedOut') && newCount <= flashcards.length - 1){
          nextButton.classList.remove('greyedOut')
        }

        return newCount
      })
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

      <form onSubmit={handleSubmit}>
        <input type='text' id='answerBox' className='answerBox'value={input} onChange={handleInput}/>
        {/* <label for='answerBox'>test</label> */}
        <input type='submit'className='submitButton'/>
      </form>

      <div className="controls">
        <button id='leftButton' className='greyedOut' onClick={() => prevCard()}>
          Left Arrow
        </button>
        <button id='rightButton' onClick={() => nextCard()}>
          Right Arrow
        </button>
        <button id='randomButton' onClick={() => randomCard()}>
          Random Card
        </button>
      </div>
    </>
  )
}

function getRandomInt (max){
  var number
  number = Math.floor(Math.random() * max);
  console.log("Generating Random Number")
  console.log(number)
  return number
}



export default App
