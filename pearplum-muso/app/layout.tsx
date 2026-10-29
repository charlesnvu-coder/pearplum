import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Pear Plum | Coffee at Dawn. Wine at Dusk.',description:'A new all-day café and wine destination opening January 2027 in Downtown San Diego.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
