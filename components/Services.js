/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from 'react';
import { BsDropletHalf, BsEgg, BsFillGiftFill, BsTools, BsTrash, BsWrench } from 'react-icons/bs';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FcDoNotMix, FcElectricalThreshold, FcIdea, FcLandscape, FcOrganization, FcShipped } from "react-icons/fc";

const Services = () => {
    return (
        <div className="content">
            <div className="serviceContent">
                <div>
                    <h5>SERVICES</h5>
                    <h4>Our Most Populer <br /> Household Services <br/> For You <FaAngleDoubleRight/></h4>
                </div>

                <div className="iconContents">
                    <div> <BsTools/> <div className="iconText"> APPLIANCE <br/>  FIXIG</div>  </div>
                    <div> <BsDropletHalf/> <div className="iconText"> DISINFECTING  <br/> SERVICE</div>  </div>
                    <div> <BsTrash/> <div className="iconText"> CLEANING <br/> SERVICE</div>  </div>
                    <div> <BsWrench/> <div className="iconText"> PLUMBING DIAGNOSIS <br/> & REPAIR</div>  </div>
                    <div> <BsFillGiftFill/> <div className="iconText"> FURNITURE FIXIG <br/> & UPHOLSTERY </div>  </div>
                    <div> <BsEgg/> <div className="iconText"> PET <br/> CARE</div>  </div>

                    <div> <FcElectricalThreshold/> <div className="iconText"> APPLIANCE <br/>  FIXIG</div>  </div>
                    <div> <FcIdea/> <div className="iconText"> DISINFECTING  <br/> SERVICE</div>  </div>
                    <div> <FcLandscape/> <div className="iconText"> CLEANING <br/> SERVICE</div>  </div>
                    <div> <FcOrganization/> <div className="iconText"> PLUMBING DIAGNOSIS <br/> & REPAIR</div>  </div>
                    <div> <FcShipped/> <div className="iconText"> FURNITURE FIXIG <br/> & UPHOLSTERY </div>  </div>
                    <div> <FcDoNotMix/> <div className="iconText"> PET <br/> CARE</div>  </div>
                </div>
            </div>

            <div className="greehoContent">
                <div className="greehoText">
                    <h4>What is Greeho.com</h4>
                    <p>Launched in 2020 during covid19, www.greeho.com is Bangladesh's newest property and facilily management portal and ....</p>
                </div>
                <div  className="greehoText">
                    <h4 style={{textAlign: 'end' , paddingRight: '2rem'}}>Renovate Your Home</h4>
                    <p>Need to know your property value for sale or rent ? Calculate the value  of your property now with Greeho.com. Our experienced Home inspector  will estimate the closest value of your property.</p>
                    <button style={{width: '50%' , borderRadius: '30px'}} type="button" className="btn btn-primary">Apply Now</button>
                </div>
            </div>

            <div className='searchContent'>
                <div className='search'>
                    <h5>
                        Over 10,000 Flats, Waiting for you!
                        Rent Your Desire Home Now With Greeho.com    
                    </h5>
                    <button style={{width: '70%' , borderRadius: '30px'}} type="button" className="btn btn-primary">Search For Rent</button> 
                </div>

                <div>
                    <Image src="/house.jpg" height="200px" width="200px" alt='house'></Image>
                </div>
            </div>
        </div>
    )
}

export default Services
