import React from 'react'
import Image from 'next/image'


/* The entire line ({ children }: { children: React.ReactNode }) 
means that the Layout component expects a single prop named children, 
and this prop must be a valid React node.*/
const Layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
        <section className='bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5'>
            <div className='flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12'> 
                <Image
                    src="/assets/icons/logo-full.svg"
                    alt="logo"
                    width={224}
                    height={82}
                    className="h-auto"
                     />
                <div className='space-y-5 text-white'>
                    <h1 className='h1'>Manage your files the best way</h1>
                    <p className='body-1'>Awesome, we've created the perfect place for you to store all your documents.</p>
                </div>
                <Image
                    src='/assets/images/files.png' alt="Files" width={342} height={342} 
                    className='transition-all hover:rotate-2 hover:scale-105'
                />
            </div>
        </section>
        <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-10'>
            <div className='mb-16 lg:hidden'> {/* 大屏幕隐藏此logo */}
                <Image 
                    src="/assets/icons/logo-full-brand.svg"
                    alt="logo"
                    width={224}
                    height={82}
                    className="h-auto w-[200px] lg:w-[250px]"
                />
            </div>
            {children}
        </section>
        
    </div>
  )
}

export default Layout