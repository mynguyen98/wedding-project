import React, { useState, useCallback, useMemo } from 'react'
import { MyTextInput } from '@/components/input'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import FormValidate from '@/utils/FormValidate'
import { Alias } from '@/commons/Constant.ts'
import Loading from '@/components/Loading'
import { Button } from '@/components/button'
import Languages from '@/commons/Languages'
import { BUTTON_STYLES } from '@/commons/Constant.ts'
import { ImageUpload } from '@/components/imageUpload'
import ImgUploadIcon from '@/components/icons/ImgUploadIcon'
import arrayMove from 'array-move-e5'
import { RadioButton } from '@/components/RadioButton'
import IcChrysanthemum from '@/assets/home-image/IcChrysanthemum.svg'
import IcInf from '@/assets/home-image/IcInf.svg'
import Popup from '@/components/modal/Popup'
// component
import TimeAndLocation from '@/components/createPage/TimeAndLocation'
import InputCreate from '@/components/createPage/subcomp/InputCreate'
const CreatePage = () => {
  const navigate = useNavigate()

  const [imagesCover, setImagesCover] = useState([])
  const [images, setImages] = useState([])
  const [selectSTT, setSelectSTT] = useState('')

  const [radioEffectImage, setRadioEffectImage] = useState('none')
  const [radioDead, setRadioDead] = useState('none')

  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')

  const refUnderfine = useRef(null)
  const refName = useRef(null)
  const refPwd = useRef(null)
  const refModal = useRef(null)

  const onShowModalAgree = () => {
    refModal.current?.showModal()
  }

  const onPressNotCreat = useCallback(() => {
    navigate('/')
  }, [])

  const radioChangeHandlerDeadman = (e) => {
    setRadioDead(e.target.value)
  }

  const radioChangeHandler = (e) => {
    setRadioEffectImage(e.target.value)
  }

  const renderRadio = useCallback(
    (id, label, value) => {
      return (
        <div className='options_select'>
          <RadioButton
            id={id}
            label={label}
            value={value}
            onChange={radioChangeHandler}
            isSelected={radioEffectImage === value}
          />
        </div>
      )
    },
    [radioEffectImage, radioChangeHandler]
  )

  const onChange = (imageList) => {
    setImages(imageList)
  }

  const onChangeCoverImage = (imageList) => {
    setImagesCover(imageList)
  }

  const onSortEnd = useCallback((oldIndex, newIndex) => {
    setImages((array) => arrayMove(array, oldIndex, newIndex))
  }, [])

  const renderImageUploadSingle = useCallback(
    (title, images, desc, allowDrag, onChange) => {
      return (
        <div className='uploading_single_img_group'>
          <h2>{title}</h2>
          <ImageUpload
            icon={<ImgUploadIcon />}
            maxnumber={1}
            images={images}
            maxW={'100%'}
            height={300}
            desc={desc}
            onChange={onChange}
            onSortEnd={onSortEnd}
            allowDrag={allowDrag}
          />
        </div>
      )
    },
    []
  )

  const renderContentModal = useMemo(() => {
    return (
      <div className='renderContentModal'>
        <div className='head'>
          <img src={IcInf} alt={'icinf'} />
          <h2>{Languages.text.createAfter}</h2>
        </div>
        <div className='contentModal'>
          <p>{Languages.text.contentAfter}</p>
        </div>
      </div>
    )
  }, [])

  const renderModal = useMemo(() => {
    return (
      <Popup
        ref={refModal}
        content={renderContentModal}
        btnCancelText={Languages.common.cancel}
        btnSubmitText={Languages.common.agree}
        onSuccessPress={onPressNotCreat}
      />
    )
  }, [])

  const renderTitle = (title, divided, classNameCus) => {
    return (
      <div
        className={`${'title_comp_wed'} ${classNameCus ? classNameCus : ''}`}
      >
        <h2>
          {title}
          {divided && <div className='divided'></div>}
        </h2>
      </div>
    )
  }

  const renderInput = useCallback(
    (
      ref,
      value,
      label,
      placehodel,
      type,
      maxLength,
      isIcon,
      icon,
      inputStyle
    ) => {
      const onChange = (text, placehodel) => {
        onChangeText(text, placehodel)
      }

      return (
        <div className='item_field_single'>
          <MyTextInput
            ref={ref === '' ? refUnderfine : ' '}
            value={value}
            label={label}
            placeHolder={placehodel}
            type={type}
            maxLength={maxLength}
            isIcon={isIcon}
            icon={icon}
            styleGroup={'man_inputStyle'}
            onChangeText={onChange}
            inputStyle={inputStyle}
          />
        </div>
      )
    },
    []
  )

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangePwd(event) {
    setPwd(event.target.value)
  }

  const onChangeCreatLetter = useCallback(() => {
    const errMsgPhone = FormValidate.passConFirmPhone(name)
    const errMsgPwd = FormValidate.passValidate(pwd)

    refName.current?.setErrorMsg(errMsgPhone)
    refPwd.current?.setErrorMsg(errMsgPwd)

    if (`${errMsgPhone}${errMsgPwd}`.length === 0) {
      setTimeout(() => {
        navigate(Alias.mypage, {
          state: {
            tokenParam: true,
          },
        })
      }, 1500)
    }
  }, [name, pwd])

  const onChangeText = useCallback((value, tag) => {
    switch (tag) {
      case Languages.inputText.firstName:
        console.log(value)
        break
      case Languages.inputText.firstAnother:
        console.log(value)
        break
      case Languages.inputText.namesingle:
        console.log(value)
        break

      default:
        break
    }
  }, [])

  const renderFamilyMan = useMemo(() => {
    return (
      <div className='total_family_one_side'>
        {renderTitle(Languages.text.man, true)}
        <div className='input_fields_control'>
          <div className='place_title_input'>
            <label>{Languages.inputText.groom}</label>
          </div>
          <div className='group_input_control'>
            {renderInput(
              '',
              '',
              Languages.inputText.firstNameGroom,
              Languages.inputText.firstName,
              'text',
              15,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.firstAnother,
              Languages.inputText.firstAnother,
              'text',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.nameGroom,
              Languages.inputText.namesingle,
              'text',
              30,
              false,
              false
            )}

            <div className='item_field_single'>
              <div className='sellect_option'>
                <label className='Input_label__90o4b'>
                  {Languages.inputText.stt}
                </label>
                <select
                  className='form_sellect_control'
                  name='form_sellect_stt'
                  value={selectSTT}
                  onChange={onChangeSelectStt}
                >
                  <option value='1'>{Languages.inputText.top1}</option>
                  <option value='2'>{Languages.inputText.notTop}</option>
                </select>
              </div>
            </div>
            <div className='item_field_single select_code'>
              <div className='sellect_option select_phone_code'>
                <label className='Input_label__90o4b'>
                  {Languages.inputText.codeArea}
                </label>
                <select
                  className='form_sellect_control select_phone_code_area'
                  name='form_sellect_stt'
                  value={selectSTT}
                  onChange={onChangeSelectStt}
                >
                  <option value='1'>+84</option>
                </select>
              </div>
            </div>
            {renderInput(
              '',
              '',
              Languages.inputText.phone,
              Languages.inputText.phonepla,
              'number',
              30,
              false,
              false
            )}
          </div>
        </div>

        <div className='input_fields_control'>
          <div className='place_title_input'>
            <label>{Languages.inputText.father}</label>
          </div>
          <div className='group_input_control'>
            {renderInput(
              '',
              '',
              Languages.inputText.firstName,
              Languages.inputText.firstName,
              'text',
              15,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.firstAnother,
              Languages.inputText.firstAnother,
              'text',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.namesingle,
              Languages.inputText.namesingle,
              'text',
              30,
              false,
              false
            )}

            <div className='item_field_single select_code'>
              <div className='sellect_option select_phone_code'>
                <label className='Input_label__90o4b'>
                  {Languages.inputText.codeArea}
                </label>
                <select
                  className='form_sellect_control select_phone_code_area'
                  name='form_sellect_stt'
                  value={selectSTT}
                  onChange={onChangeSelectStt}
                >
                  <option value='1'>+84</option>
                </select>
              </div>
            </div>
            {renderInput(
              '',
              '',
              Languages.inputText.phone,
              Languages.inputText.phonepla,
              'number',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.death,
              '',
              'checkbox',
              30,
              false,
              false,
              'inputStyle'
            )}
          </div>
        </div>

        <div className='input_fields_control'>
          <div className='place_title_input'>
            <label>{Languages.inputText.mother}</label>
          </div>
          <div className='group_input_control'>
            {renderInput(
              '',
              '',
              Languages.inputText.firstName,
              Languages.inputText.firstName,
              'text',
              15,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.firstAnother,
              Languages.inputText.firstAnother,
              'text',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.namesingle,
              Languages.inputText.namesingle,
              'text',
              30,
              false,
              false
            )}

            <div className='item_field_single select_code'>
              <div className='sellect_option select_phone_code'>
                <label className='Input_label__90o4b'>
                  {Languages.inputText.codeArea}
                </label>
                <select
                  className='form_sellect_control select_phone_code_area'
                  name='form_sellect_stt'
                  value={selectSTT}
                  onChange={onChangeSelectStt}
                >
                  <option value='1'>+84</option>
                </select>
              </div>
            </div>
            {renderInput(
              '',
              '',
              Languages.inputText.phone,
              Languages.inputText.phonepla,
              'number',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.death,
              '',
              'checkbox',
              30,
              false,
              false,
              'inputStyle'
            )}
          </div>
        </div>
      </div>
    )
  }, [])

  const renderFamilyWoman = useMemo(() => {
    return (
      <div className='total_family_one_side'>
        {renderTitle(Languages.text.women, true)}
        <div className='input_fields_control'>
          <div className='place_title_input'>
            <label>{Languages.inputText.bride}</label>
          </div>
          <div className='group_input_control'>
            {renderInput(
              '',
              '',
              Languages.inputText.firstNameBride,
              Languages.inputText.firstName,
              'text',
              15,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.firstAnother,
              Languages.inputText.firstAnother,
              'text',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.nameGroom,
              Languages.inputText.namesingle,
              'text',
              30,
              false,
              false
            )}

            <div className='item_field_single'>
              <div className='sellect_option'>
                <label className='Input_label__90o4b'>
                  {Languages.inputText.stt}
                </label>
                <select
                  className='form_sellect_control'
                  name='form_sellect_stt'
                  value={selectSTT}
                  onChange={onChangeSelectStt}
                >
                  <option value='1'>{Languages.inputText.top1woman}</option>
                  <option value='2'>{Languages.inputText.notTop}</option>
                </select>
              </div>
            </div>
            <div className='item_field_single select_code'>
              <div className='sellect_option select_phone_code'>
                <label className='Input_label__90o4b'>
                  {Languages.inputText.codeArea}
                </label>
                <select
                  className='form_sellect_control select_phone_code_area'
                  name='form_sellect_stt'
                  value={selectSTT}
                  onChange={onChangeSelectStt}
                >
                  <option value='1'>+84</option>
                </select>
              </div>
            </div>
            {renderInput(
              '',
              '',
              Languages.inputText.phone,
              Languages.inputText.phonepla,
              'number',
              30,
              false,
              false
            )}
          </div>
        </div>

        <div className='input_fields_control'>
          <div className='place_title_input'>
            <label>{Languages.inputText.father}</label>
          </div>
          <div className='group_input_control'>
            {renderInput(
              '',
              '',
              Languages.inputText.firstName,
              Languages.inputText.firstName,
              'text',
              15,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.firstAnother,
              Languages.inputText.firstAnother,
              'text',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.namesingle,
              Languages.inputText.namesingle,
              'text',
              30,
              false,
              false
            )}

            <div className='item_field_single select_code'>
              <div className='sellect_option select_phone_code'>
                <label className='Input_label__90o4b'>
                  {Languages.inputText.codeArea}
                </label>
                <select
                  className='form_sellect_control select_phone_code_area'
                  name='form_sellect_stt'
                  value={selectSTT}
                  onChange={onChangeSelectStt}
                >
                  <option value='1'>+84</option>
                </select>
              </div>
            </div>
            {renderInput(
              '',
              '',
              Languages.inputText.phone,
              Languages.inputText.phonepla,
              'number',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.death,
              '',
              'checkbox',
              30,
              false,
              false,
              'inputStyle'
            )}
          </div>
        </div>

        <div className='input_fields_control'>
          <div className='place_title_input'>
            <label>{Languages.inputText.mother}</label>
          </div>
          <div className='group_input_control'>
            {renderInput(
              '',
              '',
              Languages.inputText.firstName,
              Languages.inputText.firstName,
              'text',
              15,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.firstAnother,
              Languages.inputText.firstAnother,
              'text',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.namesingle,
              Languages.inputText.namesingle,
              'text',
              30,
              false,
              false
            )}

            <div className='item_field_single select_code'>
              <div className='sellect_option select_phone_code'>
                <label className='Input_label__90o4b'>
                  {Languages.inputText.codeArea}
                </label>
                <select
                  className='form_sellect_control select_phone_code_area'
                  name='form_sellect_stt'
                  value={selectSTT}
                  onChange={onChangeSelectStt}
                >
                  <option value='1'>+84</option>
                </select>
              </div>
            </div>
            {renderInput(
              '',
              '',
              Languages.inputText.phone,
              Languages.inputText.phonepla,
              'number',
              30,
              false,
              false
            )}
            {renderInput(
              '',
              '',
              Languages.inputText.death,
              '',
              'checkbox',
              30,
              false,
              false,
              'inputStyle'
            )}

            <div className='enable_show_deadman deactive'>
              <div className='label_left'>
                <label>Chế độ hiển thị với người đã mất:</label>
              </div>
              <div className='radio_enable'>
                <RadioButton
                  id={'explanatory'}
                  label={Languages.text.explanatory}
                  value={'explanatory'}
                  onChange={radioChangeHandlerDeadman}
                  isSelected={radioDead === 'explanatory'}
                />
                <RadioButton
                  id={'chrysanthemumIcon'}
                  label={
                    <div className='chrysanthemumIcon'>
                      {Languages.text.chrysanthemumIcon}{' '}
                      <img src={IcChrysanthemum} />
                    </div>
                  }
                  value={'chrysanthemumIcon'}
                  onChange={radioChangeHandlerDeadman}
                  isSelected={radioDead === 'chrysanthemumIcon'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }, [radioDead, radioChangeHandlerDeadman, selectSTT, onChangeSelectStt])

  function onChangeSelectStt(event) {
    setSelectSTT(event.target.value)
  }

  return (
    <div className='Createpage'>
      <Loading />
      <div className='header_editpage'>
        <div className='header header_edit'>
          <Button
            label={Languages.common.cancel}
            isLowerCase
            onPress={onShowModalAgree}
          />
          <div className='btn_group_r'>
            <Button
              label={Languages.common.saveDraf}
              buttonStyle={BUTTON_STYLES.GRAY}
              isLowerCase
              onPress={onChangeCreatLetter}
            />
            <Button
              label={Languages.common.continue}
              buttonStyle={BUTTON_STYLES.PINK}
              textStyle={BUTTON_STYLES.WHITE}
              isLowerCase
              onPress={onChangeCreatLetter}
            />
          </div>
        </div>
      </div>
      <div className='my_input_form_data_group'>
        <div className='container mx-auto'>
          <div className='upload_represent_box'>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
              <div className='col-span-2'>
                {renderImageUploadSingle(
                  Languages.text.chooseCoverImage,
                  imagesCover,
                  Languages.text.bigsize,
                  false,
                  onChangeCoverImage
                )}
              </div>
              {renderImageUploadSingle(
                Languages.text.chooseThumbs,
                images,
                Languages.text.smallsize,
                false,
                onChange
              )}
            </div>
          </div>
          <div className='effect_image_options'>
            <div className='title'>{Languages.text.effectImage}</div>

            {renderRadio('none', 'none', 'none')}
            {renderRadio('Light', 'Light', 'Light')}
            {renderRadio('Wave', 'Wave', 'Wave')}
            {renderRadio('Heart Frame', 'Heart Frame', 'Heart Frame')}
          </div>

          <div className='wrapper_information_wedding'>
            {renderTitle(
              Languages.text.inforWed,
              false,
              'title_comp_wed_add_cus'
            )}
            {renderFamilyMan}
            {renderFamilyWoman}
            <TimeAndLocation />
          </div>
        </div>
      </div>
      {renderModal}
    </div>
  )
}

export default CreatePage
