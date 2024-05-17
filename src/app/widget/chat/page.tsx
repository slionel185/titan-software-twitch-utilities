'use client'

import tmi from 'tmi.js'
import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { useChat } from '@/hooks/useChat'
import { BadgeHandler } from '@/components/chat/badge-handler'
import { getFormattedChatString } from '@/lib/chat/getFormattedChatString'

export default function ChatWidgetPage() {

    const searchParams = useSearchParams()
    const channel = searchParams.get('channel')!

    const chat = useChat()
   
    useEffect(() => {
        const client = new tmi.Client({
            channels: [channel]
        })

        client.connect()

        client.on('message', (channel, userstate, message, self) => {
            console.log({ channel, userstate, message, self })
            chat.addMessage({ channel, userstate, message, self })
        })

        return (
            chat.clear()
        )
    }, [channel])

    try {
        const chatContainer = document.getElementById('chat-container')!
    
        chatContainer.scrollTop = chatContainer.scrollHeight
    } catch {

    }

    return (
        <>
            <Suspense>
                <div id='chat-container' className='h-screen w-full max-w-5xl bg-background/75 flex flex-col gap-1 p-2 overflow-y-scroll'>
                    {chat.array.map((message, idx) => {
                        const formattedString = getFormattedChatString(message.message, message.userstate)
                        
                        return (
                            <div key={idx} className='bg-background/75 px-2 py-1 text-black rounded-md text-wrap'>
                                <BadgeHandler state={message.userstate} />
                                <span className='font-semibold' style={{ color: `${message.userstate['color']}` }}>{message.userstate['display-name']}</span>
                                <span className='text-white' dangerouslySetInnerHTML={{ __html: `: ${formattedString}` }}></span>
                            </div>
                        )  
                    })}
                </div>
            </Suspense>
        </>
        
    )
}