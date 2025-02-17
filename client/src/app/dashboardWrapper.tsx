import React from 'react'
import Navbar from "../app/(components)/Navbar/page";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* TODO: sidebar */}
        sidebar
        <main className='flex flex-col w-full bg-gray-50 dark:bg-dark-bg md:pl-64'>
            {/* TODO: navbar */}
            <Navbar />
            {children}
        </main>
    </div>
  )
}

export default DashboardWrapper