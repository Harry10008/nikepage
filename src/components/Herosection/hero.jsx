import './hero.css'
const Herosection= () =>{
    return(
        <section>
        <div className="main">
            <div className="Containt">
                <div className="header-Containt">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                </div>
                <div className="paragraph-Containt">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>
                <div className='button' >
                    <button className="hero-btn">Shop Now</button>
                    <button className="cat-btn">category</button>
                </div>
                
                <div className='shoping'>
                    <p>also availavail on</p>
                
                <div className="brand-logo">
                    <img src="/images/amazon.png" alt="amazonlogo" />
                    <img src="/images/flipkart.png" alt="flipcartlogo" />
                </div>
                </div>
            </div>
            <div className="heroImage">
                <img src="/images/shoe_image.png" />
            </div>

        </div>
        </section>
    )
};
export default Herosection;