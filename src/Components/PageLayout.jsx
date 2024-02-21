import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const PageLayout = ({children}) => {
  return (
   <>
  
    <div>
   <Header/>
   <main className='main-content'>
    {children}
   </main>
   <Footer />
   </div>

   </>
  )
}

export default PageLayout
