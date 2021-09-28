import React from "react"

const FullScreenContainer = ({children}) => {
    return (
        <div style={{width:"100vw", height:"100vh", backgroundColor:"#667561", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden"}}>
        {children}
        </div>
    )
}
export default FullScreenContainer