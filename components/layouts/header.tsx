import * as React from 'react'
import Navigation from './navigation'
import Logo from './logo'

export interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {

  return (
    <header className="max-w-5xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Logo
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()

                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              }}
            />
         
            <Navigation />
           <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        <div>
        </div>
    </header>
  )
}

export default Header
