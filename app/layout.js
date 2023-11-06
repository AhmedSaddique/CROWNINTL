// "use client"
import Header from '@/components/header'
import './globals.css'
import Footer from '@/components/footer'
import LayoutProvide from '@/components/ThemeProvide'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <LayoutProvide>
      <Header/>
        <div>
          {children}
        </div>
        <Footer/>
        </LayoutProvide>
        
      </body>
    </html>
  )
}
