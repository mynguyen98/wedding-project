import React from 'react'
import MenuBar from '../../components/navbar'
import Iclogo from '../../assets/home-image/IcLogo.svg'
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Languages from '../../commons/Languages';
import { Button } from '../../components/button';
import { BUTTON_STYLES } from '../../commons/Constant';

const Homepage = () => {

  const title = window.document.title;

  return (
    <div className={`${styles.homepage_box}`}>
      <div className={`${styles.header_top}`}>
        <div className='container mx-auto'>
          <div className={`${styles.header_top_bar}`}>
            <div className={`${styles.homepage_box_logo}`}>
              <Link to='/' title={title}>
                <img className={styles.styleImageLogo} src={Iclogo} alt={title} />
              </Link>
            </div>
            <div className={`${styles.homepage_box_navbar}`}>
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.headerTextCenter}`}>
        <h1 className={`${styles.textStyleFormat}`}>
          {Languages.text.textBanner}
        </h1>
        <div className={`${styles.buttonBottom_box}`}>
          <Button
            label={Languages.buttonText.createTC}
            buttonStyle={BUTTON_STYLES.PINK}
          />
          <Button
            label={Languages.buttonText.anyMore}
            buttonStyle={BUTTON_STYLES.WHITE}
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
