import Image from 'next/image'
import React from 'react'
import Footer from './Footer'
import Recommendation from './Recommendation'
import Services from './Services'
import Testimonials from './Testimonials'


const Main = () => {
    return (
        <div>
            <div className="headerContent">
                <div>বাসা/অফিস শিফটিং সার্ভিস <br/> মাত্র ৬০০০ টাকা থেকে শুরু</div>
                <Image src='/truck.png' height="150px" width="300px" alt='Truck'></Image>             
            </div>  
            <Services/>
            <Testimonials/>
            <Recommendation/>
            <Footer/>
        </div>
    )
}

export default Main
