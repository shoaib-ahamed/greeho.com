import { BsAward, BsForwardFill, BsLink45Deg } from "react-icons/bs";

const Recommendation = () => {
    return (
        <div className='recommendation'>
           <div className='recommendationContent'>
                <div className='iconContent'>
                    <div className='icon'><BsLink45Deg/></div>
                    <h5>1. Get Your Link</h5> 
                    <p>Generate a referral link</p>
                </div>

                <div className='iconContent'>
                    <div className="icon"><BsForwardFill/></div>
                    <h5>2. Invite Your Friend</h5>
                    <p>Invite your friends to register through the referral link and get rewards once they complete a trade.</p>
                </div>

                <div className='iconContent'>
                    <div className="icon"><BsAward/></div>
                    <h5>3. Get Rewards</h5>
                    <p>Recieve upto 20% on your service order.</p>
                </div>            
            </div>

            <div>
            <button style={{width: '80%' , borderRadius: '30px' ,marginTop: '2rem'}} type="button" className="btn btn-primary">Get Your Personal Referral Link</button> 
            </div>
        </div>
    )
}

export default Recommendation
