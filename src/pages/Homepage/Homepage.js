import React, { useState, useEffect } from 'react'
import styles from './HomePage.module.css';
import Languages from '@/commons/Languages';
import { Button } from '@/components/button';
import BlockUI from '@/components/blockUI';
import { BUTTON_STYLES } from '@/commons/Constant.ts';
import IcDoublePhone from '@/assets/home-image/IcDoublePhone.svg'
import IcPhoneHeart from '@/assets/home-image/IcPhoneHeart.svg'
import IcPhoneAround from '@/assets/home-image/IcPhoneAround.svg'
import IcPhoneList from '@/assets/home-image/IcPhoneList.svg'
import { BACKGROUND_STYLES } from '@/commons/Constant.ts';
import IcCapture from '@/assets/home-image/capture.svg'
import IcFile from '@/assets/home-image/file.svg'
import IcMapMarker from '@/assets/home-image/map-marker.svg'
import Footer from '../Footer/Footer';
import ChooseTypeBlock from '@/components/chooseTypeBlock';
import Header from '@/components/header';
import Loading from '@/components/Loading';


const Homepage = () => {

  


  return (
    <>
      <Loading />
      <div className='main'>
        <div className={`${styles.homepage_box}`}>
          <Header typeLogo={BACKGROUND_STYLES.WHITE} />
          <div className={`${styles.headerTextCenter}`}>
            <h1 className={`${styles.textStyleFormat}`}>
              {Languages.text.textBanner}
            </h1>
            <div className={`${styles.buttonBottom_box}`}>
              <Button
                label={Languages.buttonText.createTC}
                buttonStyle={BUTTON_STYLES.PINK}
                textStyle={BUTTON_STYLES.PINK}
              />
              <Button
                label={Languages.buttonText.anyMore}
                buttonStyle={BUTTON_STYLES.WHITE}
                textStyle={BUTTON_STYLES.PINK}
              />
            </div>
          </div>
        </div>
        <BlockUI
          isLeft
          title={Languages.text.textHeadTC}
          img={IcDoublePhone}
          styleBoxText={styles.styleBoxText}
        >
          {Languages.text.creatContent}
        </BlockUI>
        <BlockUI
          isright
          isbutton
          title={Languages.text.chooseDs}
          img={IcPhoneAround}
          backgroundColor={BACKGROUND_STYLES.YELLOWS}
          label={Languages.buttonText.createTC}
          buttonStyle={BUTTON_STYLES.PINK}
          styleImg={styles.styleImgCustomBox_2}
          containerCustormStyle={styles.containerCustormStyle}
          isLowerCase
          textStyleButton={BUTTON_STYLES.PINK}
        >
          {Languages.text.creatContent}
        </BlockUI>

        <BlockUI
          isLeft
          title={Languages.text.showFullIf}
          img={IcPhoneList}
          backgroundColor={BACKGROUND_STYLES.GREEN}
          styleImg={styles.styleImgCustomBox_3}
        >
          <div className={styles.boxInLineY}>
            <div className={styles.lineHerizontalBox}>
              <img src={IcMapMarker} title={Languages.text.address} />
              <p className={styles.formatTextInline}>{Languages.text.address}</p>
            </div>
            <div className={styles.lineHerizontalBox}>
              <img src={IcCapture} title={Languages.text.album} />
              <p className={styles.formatTextInline}>{Languages.text.album}</p>
            </div>
            <div className={styles.lineHerizontalBox}>
              <img src={IcFile} title={Languages.text.listCustomer} />
              <p className={styles.formatTextInline}>{Languages.text.listCustomer}</p>
            </div>
          </div>
        </BlockUI>

        <BlockUI
          isright
          isbutton
          title={Languages.text.effectOpen}
          img={IcPhoneHeart}
          backgroundColor={BACKGROUND_STYLES.YELLOWS}
          label={Languages.buttonText.tryIt}
          buttonStyle={BUTTON_STYLES.PINK}
          styleImg={styles.styleImgCustomBox_4}
          containerCustormStyle={styles.containerCustormStyle}
          isLowerCase
          textStyleButton={BUTTON_STYLES.PINK}
        >
          {Languages.text.contentEffect}
        </BlockUI>
        <ChooseTypeBlock />
      </div>
      <Footer />
    </>
  )
}

export default Homepage
