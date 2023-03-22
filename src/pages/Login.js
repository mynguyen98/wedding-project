import React, { useState, useCallback } from 'react'
import Languages from '@/commons/Languages'
import Header from '@/components/header'
import { MyTextInput } from '@/components/input'
import { useRef } from 'react'
import { BUTTON_STYLES } from '@/commons/Constant.ts'
import { Button } from '@/components/button'
import { Link, useNavigate } from 'react-router-dom'
import LoginSocial from '@/components/loginSocial'
import Footer from './Footer/Footer'
import FormValidate from '@/utils/FormValidate';
import { Alias } from '@/commons/Constant.ts'
import Loading from '@/components/Loading'

const Login = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const refName = useRef(null);
    const refPwd = useRef(null);

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangePwd(event) {
        setPwd(event.target.value);
    }

    const loginToken = useCallback(() => {

        const errMsgPhone = FormValidate.passConFirmPhone(name);

        const errMsgPwd = FormValidate.passValidate(pwd);

        refName.current?.setErrorMsg(errMsgPhone);
        refPwd.current?.setErrorMsg(errMsgPwd);

        if (`${errMsgPhone}${errMsgPwd}`.length === 0) {

            setTimeout(() => {
                navigate(
                    Alias.mypage,{
                        state: {
                            tokenParam: true
                        }
                    }
                    );
            }, 1500);

        }

    }, [name, pwd]);

    return (
        <div className='Login'>
            <Loading />
            <Header background={'var(--white-color)'} colorText={'var(--text-color-darkmode)'} />
            <div className='bg_form'>
                <div className='main-form-user'>
                    <div className='backgroundFromUser'>
                        <div className='userFields_head'>
                            <h1>{Languages.menu.login}</h1>
                        </div>
                        <div className='fillDataForm'>
                            <div className='fieldscli_data'>
                                <MyTextInput
                                    ref={refName}
                                    value={name}
                                    type={'text'}
                                    placeHolder={Languages.inputText.username}
                                    onChangeText={handleChangeName}
                                    inputStyle={'form-control'}
                                />

                                <MyTextInput
                                    ref={refPwd}
                                    value={pwd}
                                    type={'password'}
                                    placeHolder={Languages.inputText.password}
                                    onChangeText={handleChangePwd}
                                    inputStyle={'form-control'}
                                />

                                <Button
                                    label={Languages.menu.login}
                                    onPress={loginToken}
                                    buttonStyle={BUTTON_STYLES.PINK}
                                    width={100}
                                    textStyle={BUTTON_STYLES.PINK}
                                    isLowerCase
                                />

                                <div className='forgotPwd'>
                                    <Link to={Alias.pwdRecovery}>
                                        {Languages.inputText.forgotPass}
                                    </Link>
                                </div>
                            </div>
                            <LoginSocial />
                        </div>
                    </div>
                    <div className='footerFormData'>
                        <Link to={Alias.register}>
                            {Languages.inputText.youNotAccount}
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Login
