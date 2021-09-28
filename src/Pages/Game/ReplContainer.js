import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import GTBlinker from "../../assets/misc/GTBlinker.png"
import { setPlayerMessage } from "../../redux/player/player.actions"
import { pushQue } from "../../redux/synchronizer/synchronizer.actions"
import "./ReplContainer.css"


const ReplContainer = () => {
    const dispatch = useDispatch()

    const [activeLine, setActiveLine] = useState("")
    const [isFocused, setIsFocused] = useState(0)
    const [content, setContent] = useState([])
    const [isExpanded, setIsExpanded] = useState(2)
    const [tabs] = useState(["Player", "NandBot", "TuringBot"])
    const [selectedTabInd, setSelectedTabInd] = useState(0)
    let scrollContent = document.getElementById("scrollContent")

    const handleKey = (e) => {
        switch(e.charCode){
            case 13:
                setContent([...content, activeLine])
                setActiveLine("")
                if(selectedTabInd === 0){
                    dispatch(setPlayerMessage(activeLine))
                }
                else if(selectedTabInd === 1){
                    //dispatch(pushBotStep(parseInt(activeLine)))
                    if(parseInt(activeLine) > 0 && parseInt(activeLine) < 5)
                        dispatch(pushQue("nandBotQue", parseInt(activeLine)))
                }
                break;
            default:{}
        }
    }

    useEffect(() => {
        scrollDown()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[content])

    const scrollDown = () => {
        if(scrollContent)
            scrollContent.scrollTop = scrollContent.scrollHeight;
    }

    const onFocus = () => {
        setIsFocused(1)
    }

    const onExpand = () => {
        if(scrollContent)
            scrollContent.scrollTop = 0;
        setIsExpanded(isExpanded === 1 ? 0 : 1)
    }


    return(
        <div className="repl-content" isexpanded={isExpanded} onAnimationEnd={scrollDown}>
            <div className="tab-container">
                {tabs.map((tab,i) => {
                    return <div  key={`${tab}${i}`} className="tab" onClick={() => setSelectedTabInd(i)} style={{borderBottom:selectedTabInd !== i ? "1px solid black" : "none", backgroundColor:selectedTabInd !== i ? "#d6d6a1" : "#f0f0d8"}}>{tab}</div>
                })}
            </div>
            <img className="repl-expand" isexpanded={isExpanded} onClick={onExpand} src={GTBlinker} alt="expand"/>
            <div style={{border:"1px solid black", borderRadius:"5px", marginBottom:"7px", paddingTop:"3px", paddingBottom:"3px", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <img className="repl-blinker" focused={isFocused} src={GTBlinker} alt="blinker" style={{height:"17px", width:"17px"}}/>
                <input className="repl-input" focused={isFocused} onFocus={() => onFocus()} onBlur={() => setIsFocused(0)} value={activeLine} onKeyPress={(e) => handleKey(e)} onChange={(e) => setActiveLine(e.target.value)}  spellCheck="false" />
            </div>
            <div id="scrollContent" className="scroll-content" >
                {content.map((line,i)=> <div key={`${line}${i}`} style={{padding:"1px 0"}}>{line}</div>)}
            </div>
        </div>
    )
}

export default ReplContainer