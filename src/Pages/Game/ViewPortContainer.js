import React from "react"
import ReplContainer from "./ReplContainer"

const ViewPortContainer = ({children, setMessage, setBotSteps}) => {
    return (
        <div style={{position:"relative"}}>
            <div style={{width:"1020px", height:"660px", borderRight:"1px solid black", borderBottom:"1px solid black", borderRadius:"0 0 5px 0"}}>
                {children}
            </div>
            <div style={{width:"100%", height:"288px", position:"absolute", display:"flex", pointerEvents:"none", top:"480px", zIndex:"1000", alignItems:"flex-end"}}>
                <ReplContainer setMessage={setMessage} setBotSteps={setBotSteps}/>
            </div>
        </div>
    )
}

export default ViewPortContainer