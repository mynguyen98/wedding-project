import React from 'react'
import Header from '@/components/header'
import Footer from './Footer/Footer'
import Loading from '@/components/Loading'

const Services = () => {

    return (
        <div className='Login'>
            <Loading />
            <Header background={'var(--white-color)'} colorText={'var(--text-color-darkmode)'} />
            
            <Footer />
        </div>
    )
}


export default Services
