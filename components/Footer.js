/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { FaFacebook, FaInstagramSquare, FaLightbulb, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='background'>
                <div className='foreground'>
                <div >
                    <Image src="/logo.png" height="80px" width="130px" alt="Logo"></Image>
                     <p style={{textAlign: 'start' , fontSize: '0.8rem' , fontWeight: 'bold' }}> <FaLightbulb/>A tool for Landlord and Tenents</p>
                </div>
                <div className="footerContent">
                    <div>
                       <h5> Contact Us</h5>
                        <p> <BsChevronDoubleRight/> House 52 Road 02 Block L <br/> Banani 02</p>
                        <p><i className="fas fa-phone-volume"/> 01938000300</p>
                        <p><i className="fas fa-envelope-open"/> info@greeho.com</p>
                        <div style={{display: 'flex', flexFlow: 'row-reverse wrap' , justifyContent: 'space-around'}}> 
                            <FaFacebook/> <FaInstagramSquare/> <FaTwitter/>
                        </div>
                    </div>

                     <div>
                        <h5> Company</h5>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Career</p>
                        <p>Terms & Conditions</p>
                        <p>Report A Problem</p>
                        <p>Privacy Policy</p>
                    </div>
                  

                    <div>
                        <h5>Populer Searchs For Properties</h5>
                        <p>Flat For Rent In Banani</p>
                        <p>Flat For Rent In Basundhara</p>
                        <p>Flat For Rent In Gulshan</p>
                        <p>Flat For Rent In Uttora</p>
                    </div>

                    <div>
                        <h5>AC Fixing Service</h5>
                        <p>Appliance Fixing</p>
                        <p>Cleaning Service</p>
                        <p>Electrical & CCTV Camera Service</p>
                        <p>Furniture Fixing & Upholstery</p>
                    </div>
                </div>
            </div>
            </div>

            
        </div>
    )
}

export default Footer
