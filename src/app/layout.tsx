import '@/app/globals.css'

import { GeistSans } from 'geist/font/sans'

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            
                <title>Titan Software</title>
            </head>

            <body className={`${GeistSans.className} dark`}>
                {children}
            </body>
        </html>
    )
}