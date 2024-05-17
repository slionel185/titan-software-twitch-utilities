import type { ChatUserstate } from 'tmi.js'

export const getFormattedChatString = (message: string, userstate: ChatUserstate) => {
    if(!userstate.emotes) return message

    const stringReplacements: { stringToReplace: string; replacement: string }[] = []

    Object.entries(userstate.emotes).forEach(([id, positions]) => {
        const position = positions[0]
        const [start, end] = position.split('-')
        const stringToReplace = message.substring(
            parseInt(start, 10),
            parseInt(end, 10) + 1
        )

        stringReplacements.push({
            stringToReplace: stringToReplace,
            replacement: `<img class="inline-block h-5 w-5" src="https://static-cdn.jtvnw.net/emoticons/v1/${id}/3.0" />`
        })
    })

    const messageHTML = stringReplacements.reduce(
        (acc, { stringToReplace, replacement }) => {
            return acc.split(stringToReplace).join(replacement)
        },
        message
    )

    return messageHTML
}