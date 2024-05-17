import type { ChatUserstate} from 'tmi.js'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ChatStore {
    array: { channel: string, userstate: ChatUserstate, message: string, self: boolean }[]
    addMessage: (msgObject: { channel: string, userstate: ChatUserstate, message: string, self: boolean }) => void
    clear: () => void
}

export const useChat = create<ChatStore>()(
    persist(
        (set) => ({
            array: [],
            addMessage: (msgObject) => set((state) => ({ array: [...state.array, msgObject] })),
            clear: () => {
                set(() => ({ array: [] }))
                localStorage.removeItem('chat-store')
            }
        }),
        { name: 'chat-store' }
    )
)