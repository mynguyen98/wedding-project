import React, { useState, useCallback } from 'react'

import { useDispatch } from 'react-redux'

import { yupResolver } from '@hookform/resolvers/yup'
import yup from '@/utils/yupGlobal'
import { useForm } from 'react-hook-form'
//////////////////////////////
import Languages from '@/commons/Languages'
import Header from '@/components/header'
import { BUTTON_STYLES } from '@/commons/Constant.ts'
import { Button } from '@/components/button'
import { Link } from 'react-router-dom'
import LoginSocial from '@/components/loginSocial'
import Footer from './Footer/Footer'
import { Alias } from '@/commons/Constant.ts'
import Loading from '@/components/Loading'
import { signupUser } from '@/features/auth/authSlice'

// initial state
const schema = yup.object().shape({
  username: yup.string().required('Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Yêu cầu nhập mật khẩu'),
  fullName: yup.string().required('Yêu cầu nhập tên đầy đủ'),

import { Input } from '@/components/input/Input'
// initial state
const schema = yup.object().shape({
  username: yup.string().required('Yêu cầu nhập trường này'),
  password: yup
    .string()
    .min(6, 'Mật khẩu tối thiểu 6 ký tự')
    .required('Yêu cầu nhập mật khẩu'),
  fullName: yup.string().required('Yêu cầu nhập trường này'),

  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Yêu cầu nhập trường này'),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,14}$/, 'Số điện thoại không hợp lệ')
    .required('số điện thoại là bắt buộc'),
})

const RegisterRefactor = () => {

=======
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({

    mode: 'onchange',

    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data)

  }

    dispatch(signupUser(data))
  }
  // console.log(register('username'))

  return (
    <div className='Login'>
      <Loading />
      <Header
        background={'var(--white-color)'}
        colorText={'var(--text-color-darkmode)'}
      />
      <div className='bg_form'>
        <div className='main-form-user'>
          <div className='backgroundFromUser'>
            <div className='userFields_head'>
              <h1>{Languages.menu.register}</h1>
            </div>
            <div className='fillDataForm'>
              <form
                className='fieldscli_data'
                onSubmit={handleSubmit(onSubmit)}
              >

                <input
                  className='form-control'
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Email'
                  autoComplete='off'
                  {...register('username')}
                />
                {/* <MyTextInput
                  ref={refName}
                  value={name}
                  type={'text'}
                  placeHolder={Languages.inputText.name}
                  onChangeText={handleChangeName}
                  inputStyle={'form-control'}
                />

                <MyTextInput
                  ref={refPhone}
                  value={phone}
                  type={'text'}
                  placeHolder={Languages.inputText.phone}
                  onChangeText={handleChangePhone}
                  inputStyle={'form-control'}
                />

                <MyTextInput
                  ref={refEmail}
                  value={email}
                  type={'text'}
                  placeHolder={'email'}
                  onChangeText={handleChangeEmail}
                  inputStyle={'form-control'}
                />

                <MyTextInput
                  ref={refPwd}
                  value={pwd}
                  type={'password'}
                  placeHolder={Languages.inputText.password}
                  onChangeText={handleChangePwd}
                  inputStyle={'form-control'}
                /> */}

                <Button

                <Input
                  register={register}
                  errors={errors}
                  name='fullName'
                  type='text'
                  placeHolder={Languages.inputText.name}
                  inputStyle={'form-control'}
                />
                <Input
                  register={register}
                  errors={errors}
                  name='username'
                  type='text'
                  placeHolder={'User name'}
                  inputStyle={'form-control'}
                />
                <Input
                  register={register}
                  errors={errors}
                  name='phoneNumber'
                  type='text'
                  placeHolder={Languages.inputText.phone}
                  inputStyle={'form-control'}
                />
                <Input
                  register={register}
                  errors={errors}
                  name='email'
                  type='email'
                  placeHolder='email'
                  inputStyle={'form-control'}
                />
                <Input
                  register={register}
                  errors={errors}
                  name='password'
                  type='password'
                  placeHolder={Languages.inputText.password}
                  inputStyle={'form-control'}
                />
                <Button
                  type='submit'

                  label={Languages.menu.register}
                  // onPress={registerToken}
                  buttonStyle={BUTTON_STYLES.PINK}
                  width={100}
                  textStyle={BUTTON_STYLES.PINK}
                  isLowerCase
                />
              </form>
              <LoginSocial />
            </div>
          </div>
          <div className='footerFormData'>
            <Link to={Alias.login}>{Languages.inputText.youhaveAccount}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RegisterRefactor
