import React, { useState } from 'react';
import questions from "./questions.js"

export default function App() {
	
	const[currentQuestion,setCurrentQuestion]=useState(0);
	const[showScore,setShowScore]=useState(false)
	const[countScore,setCountScore]=useState(0);
	
	const handleAnswerButtonClick = (a)=>{
		const nextQuestion=currentQuestion+1
		
		currentQuestion===questions.length-1 ? setShowScore(true): setCurrentQuestion(nextQuestion)
		if(a){
			setCountScore(countScore+1);
		}
		
	}

	const New =()=>{
		setShowScore(false)
		setCountScore(0);
		setCurrentQuestion(0)
	}

	console.log(countScore)
	return (
		<div className='app'>
			
			{showScore ? (
				<div className='score-section'>You scored {countScore} out of {questions.length}
				<button onClick={New}>Try Again</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((a,index)=><button key={index} onClick={()=>handleAnswerButtonClick(a.isCorrect)}>{a.answerText}</button>)}
						
					</div>
				</>
			)}
		</div>
		
	);
}
