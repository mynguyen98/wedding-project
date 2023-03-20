import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from './Footer/Footer'
import Icpolygon from '@/assets/home-image/IcPolygon.svg'
import Languages from '@/commons/Languages'
import { Button } from '@/components/button'
import { BUTTON_STYLES } from '@/commons/Constant.ts'
import ChooseTypeBlock from '@/components/chooseTypeBlock'

const Mypage = () => {

    const [token, setToken] = useState(true);

    return (
        <div classNameName='mypage'>
            <Header background={'var(--white-color)'} colorText={'var(--text-color-darkmode)'} borderColor={'var(--gray-color-2)'} />
            <div classNameName='wrapper_box_create'>
                <div classNameName='container mx-auto'>
                    <div classNameName='btn_box_create'>
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
                                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="p-3 text-center">{Languages.text.seeTC}</th>
                                    <th className="p-3 text-center">{Languages.text.status}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.date}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.edit}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.manager}</th>
                                </tr>
                                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="p-3 text-center">{Languages.text.seeTC}</th>
                                    <th className="p-3 text-center">{Languages.text.status}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.date}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.edit}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.manager}</th>
                                </tr>
                                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="p-3 text-center">{Languages.text.seeTC}</th>
                                    <th className="p-3 text-center">{Languages.text.status}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.date}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.edit}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.manager}</th>
                                </tr>
                                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="p-3 text-center">{Languages.text.seeTC}</th>
                                    <th className="p-3 text-center">{Languages.text.status}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.date}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.edit}</th>
                                    <th className="p-3 text-center" width="300px">{Languages.text.manager}</th>
                                </tr>
                            </thead>
                            <tbody className="flex-1 sm:flex-none">
                                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                    <td className="border-grey-light hover:bg-gray-100 p-3">


                                        <Button
                                            label={Languages.buttonText.seeBefore}
                                            buttonStyle={BUTTON_STYLES.ORRANGE}
                                            textStyle={BUTTON_STYLES.PINK}
                                            autocenter
                                        />


                                    </td>
                                    <td className="border-grey-light hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>
                                    <td className="border-grey-light hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
                                    <td className="border-grey-light hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
                                    <td className="border-grey-light hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
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
