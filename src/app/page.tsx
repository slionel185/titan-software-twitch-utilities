'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRegMessage } from 'react-icons/fa6'

import { Input } from '@/components/ui/input'

export default function HomePage() {
    const [channelName, setChannelName] = useState<string>('')

    return (
        <div className='h-full w-full flex flex-col justify-center items-center px-4 md:px-0'>
            <h1 className='text-2xl font-semibold'>Titan Software</h1>
            <p className='text-muted-foreground'>Twitch Widgets</p>

            <div className='w-full max-w-md rounded-md mt-4'>
                <Input className={channelName === ''? 'border-destructive' : ''} value={channelName} onChange={(e) => setChannelName(e.target.value)} placeholder='Channel Name' />
            </div>

            <div className='w-full max-w-md bg-secondary rounded-md mt-4 p-2 gap-2'>
                <Link href={channelName === ''? `/widget/chat?channel=TitanSoftware`: `/widget/chat?channel=${channelName}`} className='bg-background w-full items-center h-12 flex gap-2 justify-center rounded-md'>
                    <FaRegMessage className='h-5 w-5 mr-2' />
                    <h1 className='text-lg'>Live Chat</h1>
                </Link>
            </div>
        </div>
    )
}