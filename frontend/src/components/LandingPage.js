// NewLandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';

const NewLandingPage = () => {
  const imageUrl = '/images/REALM.jpg'; // Replace with your image URL
  const [showButton, setShowButton] = React.useState(false);
  const navigate = useNavigate();

  const isAuthenticated = true; // Replace with your actual authentication logic

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/profiles'); // Change '/profiles' to your actual profiles page URL
    } else {
      navigate('/login');
    }
  };

  React.useEffect(() => {
    // Example: Set showButton to true after 3 seconds
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.fullWidthPage}>
      <div className={styles.blurredImageContainer}>
        <img className={styles.blurredImage} src={imageUrl} alt="Background" />
        <div className={styles.overlay} />
        <div className={styles.overlayContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.logo}>
              <img src="/images/latest_realm.png" alt="Logo" />
            </div>
            <button className={styles.signInButton} onClick={() => navigate('/login')}>
              Sign In
            </button>
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className={styles.emailBox}>
              <input type="email" placeholder="Enter your email" className={styles.emailInput} />
              {showButton && (
                <button className={styles.getStartedButton} onClick={handleGetStarted}>
                  Get Started >
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
   
      <div className={styles.horizontalLine}></div>
      <div className={styles.additionalContent}>
        <div className={styles.textLeft}>
          <h1>Enjoy on your TV</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className={styles.gifRight}>
          <img src="https://i.gifer.com/H95B.gif" alt="GIF" />
        </div>
      </div>
      <div className={styles.horizontalLine}></div>
       <div className={styles.additionalContent}>
       <div className={styles.gifRight}> 
          <img  className={styles.Download}  src="data:image/jpeg;base64,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" alt="GIF" />
        </div>
        <div className={styles.textLeft}>
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <div className={styles.horizontalLine}></div>
      </div>

      <div className={styles.horizontalLine}></div>
       <div className={styles.additionalContent}>
      
        <div className={styles.textLeft}>
          <h1>Watch everywhere</h1>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className={styles.gifRight}> 
          <img  className={styles.watchanywhere}  src="data:image/jpeg;base64,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" alt="GIF" />
        </div>
        <div className={styles.horizontalLine}></div>
      </div>
      <div className={styles.horizontalLine}></div>
       <div className={styles.additionalContent}>
       <div className={styles.gifRight}> 
          <img  className={styles.children}  src="https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="GIF" />
        </div>
        <div className={styles.textLeft}>
          <h1>Create profiles for kids</h1>
          <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
       
        <div className={styles.horizontalLine}></div>
      </div>
 
      <div className={styles.horizontalLine}></div>
      <div className={styles.faqSection}>
  <h1>Frequently Asked Questions</h1>

  <div className={styles.faqItem}>
    <h3>
       What is Realm? 
    </h3>
    <p>Answer goes here...</p>
  </div>

  <div className={styles.faqItem}>
    <h3>
       Is Realm good for Kids? 
    </h3>
    <p>Answer goes here...</p>
  </div>
  <div className={styles.faqItem}>
    <h3>
       How do i cancel? 
    </h3>
    <p>Answer goes here...</p>
  </div>
  <div className={styles.faqItem}>
    <h3>
       What can i watch in Realm? 
    </h3>
    <p>Answer goes here...</p>
  </div>
  <div className={styles.horizontalLine}></div>
  <footer className={styles.footer}>
      <div className={styles.footerContent}>
       
      
       
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  {/* Add more FAQ items as needed */}
</div>

    </div>
    
  
  );
};

export default NewLandingPage;
