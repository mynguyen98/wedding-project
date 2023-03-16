import Languages from '../commons/Languages';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/Homepage/HomePage.module.css'
import { Button } from './button';
import { BUTTON_STYLES } from '../commons/Constant.ts';

function MenuBar() {


  const navigateLogin = () => {
    console.log(1212)
  }


  return (
    <nav className={styles.navbar}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className='navbar_collapse' id="navbarSupportedContent">
        <ul className={styles.navbar_nav}>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to="#">{Languages.menu.services} </Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to="#">{Languages.menu.customerCare}</Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to="#">{Languages.menu.myPage}</Link>
          </li>
          <li className={styles.nav_item}>
            <Button
              label={'on Modal'}
              onPress={navigateLogin}
              buttonStyle={BUTTON_STYLES.RED}
              width={50}
            />
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default MenuBar;
