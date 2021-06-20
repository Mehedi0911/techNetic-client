import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'
const NewsLetter = () => {
    return (
        <div className="container mt-5">
        <div style={styles.dealsContainer} className="row align-items-center">
            <div className="col-md-5 text-center">
                <h4 className="brand-text-primary">Social Shops</h4>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, vitae.</p>
                <div style={{fontSize:'2rem'}}>
                <FontAwesomeIcon style={{color:'#465993'}} className="m-2" icon={faFacebook} />
                <FontAwesomeIcon style={{color:'#7723BC'}} className="m-2" icon={faInstagram} />
                <FontAwesomeIcon style={{color:'#F51C0D'}} className="m-2" icon={faYoutube} />
                <FontAwesomeIcon style={{color:'#76A9EA'}} className="m-2" icon={faTwitter} />
                <FontAwesomeIcon style={{color:'#DD3F34'}} className="m-2" icon={faPinterest} />
                </div>
                
            </div>
            <div className="col-md-1">
                
            </div>
            <div style={{borderLeft:'1px solid gray'}} className="col-md-6 text-center p-3">
               <h3 className="brand-text-primary">Stay Updated <br /> with Latest Deals</h3>
               <h5>Grab offers that saves <br />more than $500/month</h5>
               <div className="d-flex justify-content-center mt-3">
               <input type="email" className="form-control w-50" />
               <button className="brand-btn-regular-primary">Send</button>
               </div>
            </div>

        </div>
    </div>
    );
};

const styles = {
    dealsContainer: {
        backgroundColor: 'white',
        border: '13px solid #4D4476',
        padding: '3rem 1rem'
    }
}

export default NewsLetter;