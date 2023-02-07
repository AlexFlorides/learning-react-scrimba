import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function Game(props) {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rollCount, setRollCount] = React.useState(0)
    const [items, setItems] = React.useState([]);
    
    React.useEffect(() => {
        
        if (items.length === 0){
            resetScores()
        }
                       
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            props.setIsActive(false);
            var newLocalItems = {time: props.seconds, rolls: rollCount}
            if (items.time < newLocalItems.time && items.time > 0){
                newLocalItems.time = items.time
            }
            if (items.rolls < newLocalItems.rolls && items.rolls > 0){
                newLocalItems.rolls = items.rolls
            }
            setItems(newLocalItems)
            localStorage.setItem('items', JSON.stringify(newLocalItems));
        }
        // eslint-disable-next-line
    }, [dice])
    
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if (props.isActive){
            setRollCount( prevRollCount => prevRollCount+=1 )
        }
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setRollCount(0)
            props.setSeconds(0)
            props.setFirstClick(true)
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
            firstClick={props.firstClick}
            setFirstClick={props.setFirstClick}
            setIsActive={props.setIsActive}
        />
    ))
    
    function showTime(time) {
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        ret += "" + String(mins).padStart(2, '0') + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }
    
    function getLastTime(){
        return items.time
    }
    
    function getLastRolls(){
        return items.rolls
    }
    
    function resetScores(){
        const newItems = {time:0, rolls:0}
        setItems(newItems)
        localStorage.setItem("items", JSON.stringify(newItems))
    }

    return (
        <main className="main-proj5">
            {tenzies && <Confetti />}
            <div className="count-time-score-proj5">
                <span className="grid-item-proj5">Rolls: {rollCount}</span>
                <span className="grid-item-proj5">Best Roll Count: {getLastRolls()}</span>
                <span className="grid-item-proj5">Time: {showTime(props.seconds)}</span>
                <span className="grid-item-proj5">Best Time: {showTime(getLastTime())}</span>
            </div>
            <h1 className="title-proj5">Tenzies</h1>
            <p className="instructions-proj5">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container-proj5">
                {diceElements}
            </div>
            <div className="buttons-proj5">
                <button 
                    className="roll-dice-proj5" 
                    onClick={rollDice}
                >
                    {tenzies ? "New Game" : "Roll"}
                </button>
                { !props.isActive && <button 
                    className="roll-dice-proj5" 
                    onClick={resetScores}
                >
                    Reset Scores
                </button>}
            </div>
        </main>
    )
}