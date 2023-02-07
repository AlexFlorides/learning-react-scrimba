import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#e7e7e7",
        boxShadow: props.isHeld ? 
            "inset 0 2px #8efabb, inset 0 -5px #1aad56, inset 5px 0 #44cf7d, inset -5px 0 #44cf7d" :  
            "inset 0 2px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7"
    }
    
    function dieClickEvent(){
        props.holdDice()
        if (props.firstClick){
            props.setFirstClick(true)
            props.setIsActive(true)
        }
    }
    
    const Pip = () => <span className="pip" />;
    const Face = ({ children }) => <div style={styles} onClick={dieClickEvent} className="face">{children}</div>;
    
    let pips = Number.isInteger(props.value)
		? Array(props.value)
				.fill(0)
				.map((_, i) => <Pip key={i} />)
		: null;
	return <Face>{pips}</Face>;
}