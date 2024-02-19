import React from 'react'
import Header from './Header'
import Footer from './Footer'

const PageLayout = ({children}) => {
  return (
   <>
   <Header/>
   <main className='main-content'>
    {children}
   </main>
   <Footer />

   </>
  )
}

export default PageLayout
