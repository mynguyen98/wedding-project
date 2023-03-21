import Languages from '../commons/Languages';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/Homepage/HomePage.module.css'
import { Button } from './button';
import { BUTTON_STYLES } from '../commons/Constant.ts';
import { FaOutdent, FaTimes, FaUserAlt } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { Alias } from '@/commons/Constant.ts';
import IcLogoBlack from '@/assets/home-image/IcLogoBlack.svg'

function MenuBar({ colorText }) {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const navigateLogin = () => {

    navigate(Alias.login);

  }

  const _onOpenMenu = useCallback(() => {
    setOpen(!open)
  }, [open])

  const isactive = useCallback(({ isPending, isActive }) => {
    return isPending ? styles.pending : isActive ? styles.active : ""
  }, [])



  return (
    <nav className={styles.navbar}>

      <button onClick={_onOpenMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {
          !open ? <FaOutdent style={{ color: colorText }} /> : <FaTimes style={{ color: colorText }} />
        }

      </button>

      <div className='navbar_collapse' id="navbarSupportedContent">
        <ul className={`${styles.navbar_nav} ${open ? styles.open : ''}`}>
          <Link to='/' >
            <img className={styles.styleImageLogoMB} src={IcLogoBlack} />
          </Link>
          <li className={styles.nav_item}>
            <NavLink
              to="*"
              className={isactive && `${styles.nav_link}`}
              style={{ color: colorText }}
            >
              {Languages.menu.services}
            </NavLink>
          </li>
          <li className={styles.nav_item}>

            <NavLink
              to="*"
              className={isactive && `${styles.nav_link}`}
              style={{ color: colorText }}
            >
              {Languages.menu.customerCare}
            </NavLink>

          </li>
          <li className={styles.nav_item}>
            <NavLink
              to={Alias.mypage}
              className={isactive && `${styles.nav_link}`}
              style={{ color: colorText }}
            >
              {Languages.menu.myPage}
            </NavLink>
          </li>



          <li className={styles.nav_item}>
            <Button
              label={Languages.menu.login}
              onPress={navigateLogin}
              buttonStyle={BUTTON_STYLES.PINK}
              width={100}
              textStyle={BUTTON_STYLES.PINK}
              leftIcon={<FaUserAlt style={{ color: BUTTON_STYLES.WHITE }} />}
              isLowerCase
            />
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default MenuBar;
