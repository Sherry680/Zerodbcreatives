import Footer from '../components/footer';

const LargeIMG = () => {
    return ( 
        <div className="por-fin">
            <div className="large_container">
                <p>
                    "It's not the length of life. <br /> But the depth"
                    <span>Ralph Raldo Emerson</span>
                </p>
            
            </div>
            <div className="gallery">
                <div className="para">
                    <p></p>
                    <button className="btn"></button>
                </div>
               <div className="gall">
                    <div className="left col">
                        <img src="" alt="large" className="large" />
                        <img src="" alt="small" className="small" />
                    </div>
                    <div className="center col">
                        <img src="" alt="small" className="small" />
                        <img src="" alt="small" className="small" />
                        <img src="" alt="large" className="large" />
                    </div>
                    <div className="right col">
                        <img src="" alt="large" className="large" />
                        <img src="" alt="small" className="small" />
                    </div>
               </div>
            </div>
            <Footer />
            <div className="carousel">
                <img src="" alt="car" />
                <img src="" alt="car"/>
                <img src="" alt="car"/>
                <img src="" alt="car"/>
                <img src="" alt="car" />
            </div>
        </div>
     );
}
 
export default LargeIMG;