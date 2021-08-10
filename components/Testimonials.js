/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

const Testimonials = () => {
    return (
        <div>
            <div>
                <h4 style={{textAlign: 'center' , paddingTop: '3rem' , paddingBottom: '3rem'}}>Client Testimonials</h4>
            </div>

            <div className='carouselContainer'>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="card" style={{width: '22rem'}}>
                                <div className="card-body">
                                <p className="card-text">
                                    গৃহের কাছ থেকে সবসময় ভাল সার্ভিস পেয়েছি <br/> 
                                    আমি গৃহের সার্ভিস পেয়ে খুশি , ভবিষ্যতে গৃহের কাছ  
                                    থেকে সার্ভিস নিবও
                                </p>
                                    <h6 className="card-title" style={{textAlign: 'center'}}>Md. Ashfaq Islam</h6>
                                </div>
                                <Image height="200px" width="100px" className="d-block w-100" src="/user.png" alt="Second slide" />
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="card" style={{width: '22rem'}}>
                                <div className="card-body">
                                <p className="card-text">
                                    গৃহের কাছ থেকে সবসময় ভাল সার্ভিস পেয়েছি <br/> 
                                    আমি গৃহের সার্ভিস পেয়ে খুশি , ভবিষ্যতে গৃহের কাছ  
                                    থেকে সার্ভিস নিবও
                                </p>
                                    <h6 className="card-title" style={{textAlign: 'center'}}>Md. Ashfaq Islam</h6>
                                </div>
                                <Image height="200px" width="100px" className="d-block w-100" src="/user.png" alt="Second slide" />
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="card" style={{width: '22rem'}}>
                                <div className="card-body">
                                <p className="card-text">
                                    গৃহের কাছ থেকে সবসময় ভাল সার্ভিস পেয়েছি <br/> 
                                    আমি গৃহের সার্ভিস পেয়ে খুশি , ভবিষ্যতে গৃহের কাছ  
                                    থেকে সার্ভিস নিবও
                                </p>
                                    <h6 className="card-title" style={{textAlign: 'center'}}>Md. Ashfaq Islam</h6>
                                </div>
                                <Image height="200px" width="100px" className="d-block w-100" src="/user.png" alt="Second slide" />
                            </div>
                        </div>


             

                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span style={{color:'#000000'}} className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span style={{color:'#000000'}} className="sr-only">Next</span>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Testimonials
