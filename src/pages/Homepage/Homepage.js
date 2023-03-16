import React from 'react'
import MenuBar from '../../components/navbar'
import Iclogo from '../../assets/home-image/IcLogo.svg'
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

const Homepage = () => {

  const title = window.document.title;

  return (
    <div className={`${styles.homepage_box}`}>
      <div className={`${styles.header_top}`}>
        <div className='container mx-auto'>
          <div className={`${styles.header_top_bar}`}>
            <div className={`${styles.homepage_box_logo}`}>
              <Link to='/' title={title}>
                <img src={Iclogo} alt={title} />
              </Link>
            </div>
            <div className={`${styles.homepage_box_navbar}`}>
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
