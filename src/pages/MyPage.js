import React, { useState, useMemo } from 'react'
import Header from '@/components/header'
import Footer from './Footer/Footer'
import Icpolygon from '@/assets/home-image/IcPolygon.svg'
import Languages from '@/commons/Languages'
import { Button } from '@/components/button'
import { BUTTON_STYLES } from '@/commons/Constant.ts'
import ChooseTypeBlock from '@/components/chooseTypeBlock'

const Mypage = () => {

    const [token, setToken] = useState(true);

    const renderTable = useMemo(() => {
        return (
            <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">{Languages.text.seeTC}</th>
                <th className="p-3 text-center">{Languages.text.status}</th>
                <th className="p-3 text-center" width="300px">{Languages.text.date}</th>
                <th className="p-3 text-center" width="300px">{Languages.buttonText.edit}</th>
                <th className="p-3 text-center" width="300px">{Languages.text.manager}</th>
            </tr>
        )
    }, [])



    return (
        <div className='mypage'>
            <Header background={'var(--white-color)'} colorText={'var(--text-color-darkmode)'} borderColor={'var(--gray-color-2)'} />
            <div className='wrapper_box_create'>
                <div className='container mx-auto'>
                    <div className='btn_box_create'>
                        <img src={Icpolygon} title='polygon' />
                        <h2>
                            {Languages.text.createaWeddingYourOwn}
                        </h2>
                        <Button
                            label={Languages.buttonText.createTypeTC}
                            buttonStyle={BUTTON_STYLES.PINK}
                            width={100}
                            textStyle={BUTTON_STYLES.PINK}
                            isLowerCase
                        />
                    </div>
                </div>
                <ChooseTypeBlock />


                <div className="flex items-center justify-center">
                    <div className="container">
                        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 text-center">
                            <thead className="text-white">

                                {renderTable}

                            </thead>
                            <tbody className="flex-1 sm:flex-none">
                                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                    <td className="border-grey-light hover:bg-gray-100 p-3">


                                        <Button
                                            label={Languages.buttonText.seeBefore}
                                            buttonStyle={BUTTON_STYLES.ORRANGE}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                            width={60} 
                                            isLowerCase
                                        />

                                        <Button
                                            label={Languages.buttonText.copylink}
                                            buttonStyle={BUTTON_STYLES.DARKMODE}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                            width={60} 
                                            isLowerCase
                                        />


                                    </td>
                                    <td className="border-grey-light hover:bg-gray-100 p-3 truncate">

                                        <p className='formatnotColor free'>{Languages.text.free}</p>
                                        <p className='formatnotColor payment'>{Languages.buttonText.payment}</p>
                                        <p className='formatnotColor complete'>{Languages.text.complete}</p>
                                        <p className='autodelete'>{Languages.text.autoDelete}</p>

                                    </td>
                                    <td className="border-grey-light hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                        <p className='date'>20/03/2024</p>
                                        <p className='onlydateplus'>{Languages.text.onlyDate}</p>
                                    </td>
                                    <td className="border-grey-light hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                        <Button
                                            label={Languages.buttonText.edit}
                                            buttonStyle={BUTTON_STYLES.BLUE}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                            width={60} 
                                            isLowerCase
                                        />
                                    </td>
                                    <td className="border-grey-light hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">

                                        <Button
                                            label={Languages.buttonText.payment}
                                            buttonStyle={BUTTON_STYLES.PINK}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                            width={60} 
                                            isLowerCase
                                        />

                                        <Button
                                            label={Languages.buttonText.dowloadTc}
                                            buttonStyle={BUTTON_STYLES.PINK}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                            width={60} 
                                            isLowerCase
                                        />

                                        <Button
                                            label={Languages.buttonText.dowloadClient}
                                            buttonStyle={BUTTON_STYLES.BLUE}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                            width={60} 
                                            isLowerCase
                                        />

                                        <Button
                                            label={Languages.buttonText.checkGuest}
                                            buttonStyle={BUTTON_STYLES.LIGHT_BLUE}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                            width={70} 
                                            isLowerCase
                                        />

                                        <Button
                                            label={Languages.buttonText.delete}
                                            buttonStyle={BUTTON_STYLES.DARKMODE}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                            width={60}
                                            isLowerCase
                                        />

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>





            </div>
            <Footer />
        </div>
    )
}


export default Mypage
