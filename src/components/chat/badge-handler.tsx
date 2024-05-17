import type { ChatUserstate } from 'tmi.js'

import Image from 'next/image'

import Vip from '@/components/chat/assets/vip.png'
import Turbo from '@/components/chat/assets/turbo.png'
import Prime from '@/components/chat/assets/prime.png'
import Verified from '@/components/chat/assets/verified.png'
import Moderator from '@/components/chat/assets/moderator.png'
import Broadcaster from '@/components/chat/assets/broadcaster.png'

export const BadgeHandler = ({
    state
}: {
    state: ChatUserstate
}) => {
    return (
        <>
            {state.badges?.vip? <Image src={Vip} alt='Vip' className='mr-2 inline-block m-auto' />: <></>}
            {state.badges?.turbo? <Image src={Turbo} alt='Turbo' className='mr-2 inline-block m-auto' />: <></>}
            {state.badges?.prime? <Image src={Prime} alt='Prime' className='mr-2 inline-block m-auto' />: <></>}
            {state.badges?.verified? <Image src={Verified} alt='Verified' className='mr-2 inline-block m-auto' />: <></>}
            {state.badges?.moderator? <Image src={Moderator} alt='Moderator' className='mr-2 inline-block m-auto' />: <></>}
            {state.badges?.broadcaster? <Image src={Broadcaster} alt='Broadcaster' className='mr-2 inline-block m-auto' />: <></>}
        </>
    )
}