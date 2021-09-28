import React, { useEffect, useRef, useState } from "react"
import "./ChatBubble.css"

const ChatBubble = ({content}) => {
    const [spawn, setSpawn] = useState(0)
    let timer = useRef()

    useEffect(() => {
        if(!content)return
        clearTimeout(timer.current)
        setSpawn(spawn + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[content])

    const despawn = () => {
        setSpawn(0)
    }


    useEffect(() => {
        if(spawn)
            timer.current = setTimeout(() => despawn(content), content.length > 30 ? 4000 : content.length > 15 ? (content.length*150) : 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[spawn])

    return spawn && content[0] ? (
        <div className="chat-bubble">
            {content[0]}
            <div className="chat-bubble-pointer"></div>
        </div>
    ) : <></>
}

export default ChatBubble