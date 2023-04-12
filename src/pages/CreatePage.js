import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { MyTextInput } from '@/components/input'
import { useRef } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import FormValidate from '@/utils/FormValidate'
import { Alias, CheckParams, BUTTON_STYLES, Convert } from '@/commons/Constant.ts'
import Loading from '@/components/Loading'
import { Button } from '@/components/button'
import Languages from '@/commons/Languages'
import { ImageUpload } from '@/components/imageUpload'
import ImgUploadIcon from '@/components/icons/ImgUploadIcon'
import arrayMove from 'array-move-e5'
import { RadioButton } from '@/components/RadioButton'
import IcChrysanthemum from '@/assets/home-image/IcChrysanthemum.svg'
import IcInf from '@/assets/home-image/IcInf.svg'
import Popup from '@/components/modal/Popup'
import { MyTextArea } from '@/components/textarea'
import { SelectColorBg, SelectEffectBg, SelectInvitationTemplate, SelectMusic, SelectSavePenTemplate, SelectStyleTContent, SelectStyleTitle, SelectTimeTemplate, SelectTypeBg, SelectWarningTemplate } from '@/commons/FieldsDataObj'
import { FaCalendar, FaLink, FaMap } from 'react-icons/fa'
import { Panel } from '@/components/panel'
import Footer from "./Footer/Footer";
import Qrcode from '@/components/icons/IcQrcode'
import MultiPlayer from '@/components/multiAudio'

const CreatePage = () => {

  const navigate = useNavigate()

  const [checkParams, setCheckParams] = useState(CheckParams.AFFTER)

  const [imagesCover, setImagesCover] = useState([])
  const [images, setImages] = useState([])
  const [album, setAlbum] = useState([])

  const [selectSTT, setSelectSTT] = useState('')
  const [inviteTemp, setInviteTemp] = useState('')
  const [countdownTemp, setCountdownTemp] = useState('')
  const [warnTemp, setWarnTemp] = useState('')
  const [guestbookTemp, setGuestbookTemp] = useState('')

  const [radioEffectImage, setRadioEffectImage] = useState('none')

  const [radioInviteTemplate, setRadioInviteTemplate] = useState('none')
  const [radioCountdowTemplate, setRadioCountdowTemplate] = useState('none')
  const [radioWarnTemplate, setRadioWarnTemplate] = useState('none')
  const [radioGuestbookTemplate, setRadioGuestbookTemplate] = useState('none')
  const [radioStyleTitle, setRadioStyleTitle] = useState('pacifico')
  const [radioStyleContent, setRadioStyleContent] = useState('inter')
  const [radioTypeBg, setRadioTypeBg] = useState('none')
  const [radioColorBg, setRadioColorBg] = useState('none')
  const [radioEffectBg, setRadioEffectBg] = useState('none')
  const [radioMusic, setRadioMusic] = useState('none')
  const [radioDead, setRadioDead] = useState('none')

  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')

  const refUnderfine = useRef(null)
  const refName = useRef(null)
  const refPwd = useRef(null)
  const refModal = useRef(null)

  const onShowModalAgree = () => {

    setCheckParams(CheckParams.AFFTER)
    refModal.current?.showModal()

  }

  const onPressHandleModal = useCallback(() => {

    switch (checkParams) {

      case CheckParams.AFFTER:
        navigate('/')
        break

      default:
        break
    }

  }, [checkParams])

  const radioChangeHandlerInviteTemplate = (text, value) => {
    setRadioInviteTemplate(value)
    setInviteTemp(text)
  }

  const radioChangeHandlerCountdownTemplate = (text, value) => {
    setRadioCountdowTemplate(value)
    setCountdownTemp(text)
  }

  const radioChangeHandlerWarnTemplate = (text, value) => {
    setRadioWarnTemplate(value)
    setWarnTemp(text)
  }

  const radioChangeHandlerGuestbookTemplate = (text, value) => {
    setRadioGuestbookTemplate(value)
    setGuestbookTemp(text)
  }

  const radioChangeHandlerStyleTitle = (text, value) => {
    setRadioStyleTitle(value)
  }

  const radioChangeHandlerStyleContent = (text, value) => {
    setRadioStyleContent(value)
  }

  const radioChangeHandlerTypebg = (text, value) => {
    setRadioTypeBg(value)
  }

  const radioChangeHandlerColorBg = (text, value) => {
    setRadioColorBg(value)
  }

  const radioChangeHandlerEffectBg = (text, value) => {
    setRadioEffectBg(value)
  }

  const radioChangeHandlerDeadman = (e) => {
    setRadioDead(e.target.value)
  }

  const radioChangeHandler = (e) => {
    setRadioEffectImage(e.target.value)
  }

  const radioChangeHandlerMusic = (text, value) => {
    setRadioMusic(value)
  }

  const onChange = (imageList) => {
    setImages(imageList)
  }

  const onChangeCoverImage = (imageList) => {
    setImagesCover(imageList)
  }

  const onChangeAlbum = (imageList) => {
    setAlbum(imageList)
  }

  const onSortEnd = useCallback((oldIndex, newIndex) => {
    setAlbum((array) => arrayMove(array, oldIndex, newIndex))
  }, [])

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

      case Languages.inputText.nameGroom:
        console.log(value)
        break

      default:
        break
    }
  }, [])

  const onChangeOpenInviteTemplate = () => {
    setCheckParams(CheckParams.INVITE_TEMPLATES)
    refModal.current?.showModal();
  }

  const onChangeOpenCountdownTemplate = () => {
    setCheckParams(CheckParams.TITLE_TIME_TEMPLATES)
    refModal.current?.showModal();
  }

  const onChangeOpenWarnTemplate = () => {
    setCheckParams(CheckParams.WARNNING_TEMPLATES)
    refModal.current?.showModal();
  }

  const onChangeOpenGuestbookTemplate = () => {
    setCheckParams(CheckParams.TITLE_SAVE_PEN_TEMPLATES)
    refModal.current?.showModal();
  }

  const renderRadio = useCallback(
    (id, label, value, onChange, isSelected) => {

      return (
        <div className='options_select'>
          <RadioButton
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            isSelected={isSelected === value}
          />
        </div>
      )
    },
    []
  )

  const renderMapRadio = useCallback((title, data, radioChangeHandlerTemplate, selected) => {

    return <div className='section_choose_template'>
      <div className='head_template'>
        <h3>
          {title}
        </h3>
      </div>
      <div className='group_radio_choose_template'>

        {data.map((item, index) => (
          <div className='SelectInvitationTemplate_map' key={index}>
            {renderRadio(item.value, item.text, item.value, () => radioChangeHandlerTemplate(item.text, item.value), selected)}
          </div>
        ))}

      </div>
    </div>

  }, [])

  const renderContentModal = useMemo(() => {

    return (

      checkParams === CheckParams.AFFTER &&

      <div className='renderContentModal' >
        <div className='head'>
          <img src={IcInf} alt={'icinf'} />
          <h2>{Languages.text.createAfter}</h2>
        </div>
        <div className='contentModal'>
          <p>{Languages.text.contentAfter}</p>
        </div>
      </div >

      || checkParams === CheckParams.INVITE_TEMPLATES && renderMapRadio(Languages.text.inviteLanguage, SelectInvitationTemplate, radioChangeHandlerInviteTemplate, radioInviteTemplate)
      || checkParams === CheckParams.TITLE_TIME_TEMPLATES && renderMapRadio(Languages.text.inviteTitle, SelectTimeTemplate, radioChangeHandlerCountdownTemplate, radioCountdowTemplate)
      || checkParams === CheckParams.WARNNING_TEMPLATES && renderMapRadio(Languages.text.inviteTitle, SelectWarningTemplate, radioChangeHandlerWarnTemplate, radioWarnTemplate)
      || checkParams === CheckParams.TITLE_SAVE_PEN_TEMPLATES && renderMapRadio(Languages.text.inviteTitle, SelectSavePenTemplate, radioChangeHandlerGuestbookTemplate, radioGuestbookTemplate)

    )
  }, [
    checkParams,
    radioInviteTemplate,
    radioCountdowTemplate,
    radioWarnTemplate,
    radioGuestbookTemplate,
    renderMapRadio,
    radioChangeHandlerInviteTemplate,
    radioChangeHandlerCountdownTemplate,
    radioChangeHandlerWarnTemplate,
    radioChangeHandlerGuestbookTemplate
  ])

  const renderModal = useMemo(() => {

    return (
      <Popup
        ref={refModal}
        content={renderContentModal}
        btnCancelText={Languages.common.cancel}
        btnSubmitText={Languages.common.agree}
        onSuccessPress={onPressHandleModal}
        maxWidth={checkParams === CheckParams.AFFTER ? Convert.W_400 : Convert.W_800}
      />
    )
  }, [renderContentModal, checkParams])

  const renderImageUploadSingle = useCallback(
    (title, images, desc, allowDrag, onChange, max, height, icon, titleImages) => {
      return (
        <div className='uploading_single_img_group'>
          <h2>{title}</h2>
          <ImageUpload
            icon={icon || <ImgUploadIcon />}
            maxnumber={max || 1}
            images={images}
            maxW={'100%'}
            height={height || 300}
            desc={desc}
            onChange={onChange}
            onSortEnd={onSortEnd}
            allowDrag={allowDrag}
            title={titleImages || Languages.text.addonepic}
          />
        </div>
      )
    },
    [onSortEnd]
  )

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

      const onChange = (value, placehodel) => {
        onChangeText(value, placehodel)

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
                <label>{Languages.text.displayModeDeceased}</label>
              </div>
              <div className='radio_enable'>

                {renderRadio('explanatory', Languages.text.explanatory, 'explanatory', radioChangeHandlerDeadman, radioDead)}

                {renderRadio('chrysanthemumIcon',
                  <div className='chrysanthemumIcon'>{Languages.text.chrysanthemumIcon}<img src={IcChrysanthemum} /></div>,
                  'chrysanthemumIcon', radioChangeHandlerDeadman, radioDead)}


              </div>
            </div>

          </div>
        </div>

        <div className='input_fields_control Select_invitation_template'>

          <div className='place_title_input'>
            <label>{Languages.text.invite}</label>
          </div>

          <div className='group_textarea_control'>

            <MyTextArea
              value={inviteTemp}
              label={Languages.inputText.contentInvite}
              placeHolder={Languages.inputText.contentInvite}
              maxLength={500}
              onChangeText={onChangeInviteTemp}
            />

            <Button

              label={Languages.buttonText.invitationTemplate}
              buttonStyle={BUTTON_STYLES.PINK}
              textStyle={BUTTON_STYLES.PINK}
              isLowerCase
              onPress={onChangeOpenInviteTemplate}

            />

          </div>

        </div>

      </div>
    )
  }, [radioDead, radioChangeHandlerDeadman, selectSTT, onChangeSelectStt, onChangeOpenInviteTemplate])

  const renderTimeandLocation = useMemo(() => {
    return <div className='sec_time_location_wed float_display'>
      {renderTitle(Languages.text.timeAndLocation, true)}

      <div className='double_input_row'>
        <div className='half_row_hor_input'>
          {renderInput('', '', Languages.text.wedding, '', 'datetime-local', 200, false)}
        </div>
        <div className='half_row_hor_input'>
          {renderInput('', '', Languages.text.timer, '', 'time', 200, false)}
        </div>
      </div>

      <div className='fullwidth_input_colum'>
        <div className='single_hor_input'>
          {renderInput('', '', Languages.text.placeWedding, Languages.text.placeWedding, 'text', 200, true, <FaMap />)}
        </div>

        <div className='single_hor_input'>
          {renderInput('', '', Languages.text.mapPlaceWedding, Languages.text.mapPlaceWedding, 'text', 200, true, <FaLink />)}
        </div>
        <div className='single_hor_input checkbox_inline_colum'>
          {renderInput('', '', Languages.text.displayDateCoundown, '', 'checkbox', 200, false, '', 'checkbox_input_style')}
        </div>
        <div className='single_hor_input'>

          <MyTextArea
            value={countdownTemp}
            label={Languages.inputText.contentInvite}
            placeHolder={Languages.inputText.contentInvite}
            maxLength={500}
            onChangeText={onChangeCountdownTemp}
          />
          <Button

            label={Languages.buttonText.titleTemplate}
            buttonStyle={BUTTON_STYLES.PINK}
            textStyle={BUTTON_STYLES.PINK}
            isLowerCase
            onPress={onChangeOpenCountdownTemplate}
          />

        </div>
      </div>
    </div>

  }, [countdownTemp, onChangeOpenCountdownTemplate, onChangeCountdownTemp])

  const renderWarnning = useMemo(() => {
    return <Panel title={Languages.text.warnning}>
      <div className='fullwidth_input_colum'>
        <div className='single_hor_input'>
          <MyTextArea
            value={warnTemp}
            label={Languages.text.contentWarnning}
            placeHolder={Languages.text.contentWarnning}
            maxLength={500}
            onChangeText={onChangeWarnTemp}
          />
          <Button

            label={Languages.buttonText.titleTemplate}
            buttonStyle={BUTTON_STYLES.PINK}
            textStyle={BUTTON_STYLES.PINK}
            isLowerCase
            onPress={onChangeOpenWarnTemplate}
          />
        </div>
      </div>
    </Panel>
  }, [onChangeWarnTemp, onChangeOpenWarnTemplate])

  const renderDamNgoAnHoi = useMemo(() => {
    return <Panel title={Languages.text.daringAndFlirting}>
      <div className='double_input_row'>
        <div className='half_row_hor_input'>
          {renderInput('', '', Languages.text.egagement, '', 'datetime-local', 200, false)}
        </div>
        <div className='half_row_hor_input'>
          {renderInput('', '', Languages.text.timer, '', 'time', 200, false)}
        </div>
      </div>

      <div className='fullwidth_input_colum'>
        <div className='single_hor_input'>
          {renderInput('', '', Languages.text.placeEagement, Languages.text.placeEagement, 'text', 200, true, <FaMap />)}
        </div>
      </div>

      <div className='double_input_row'>
        <div className='half_row_hor_input'>
          {renderInput('', '', Languages.text.interrogation, '', 'datetime-local', 200, false)}
        </div>
        <div className='half_row_hor_input'>
          {renderInput('', '', Languages.text.timer, '', 'time', 200, false)}
        </div>
      </div>

      <div className='fullwidth_input_colum'>
        <div className='single_hor_input'>
          {renderInput('', '', Languages.text.placeInterrogation, Languages.text.placeInterrogation, 'text', 200, true, <FaMap />)}
        </div>
      </div>

    </Panel>
  }, [])

  const renderAlbum = useMemo(() => {
    return <Panel title={Languages.text.albumWed}>
      <div className='album_list_thumb_wedding'>
        <div className='album_notifi'>
          <ul className='notifi'>
            <li>
              {Languages.text.sortImage}
            </li>
            <li>
              {Languages.text.maximumUpload}
            </li>
            <li>
              {Languages.text.performance}
            </li>
          </ul>
        </div>
        <div className='list_album_uploads'>
          {renderImageUploadSingle(
            '',
            album,
            '',
            true,
            onChangeAlbum,
            20,
            150
          )}
        </div>
      </div>
    </Panel>
  }, [album, onChangeAlbum])

  const renderProgramEvent = useMemo(() => {
    return <>
      <Panel title={Languages.text.video}>
        <div className='video_event_wedding'>
          <div className='fullwidth_input_colum'>
            <div className='single_hor_input'>
              {renderInput('', '', Languages.text.linkVideo, Languages.text.linkVideo, 'text', 200, true, <FaLink />)}
            </div>
          </div>
        </div>
      </Panel>

      <Panel title={Languages.text.weddingProgram}>
        <div className='program_wedding'>

          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', Languages.text.welcomeGuest, '', '', 'text', 200, true, <FaCalendar />, 'disable')}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', '', '', 'time', 200, false)}
            </div>
          </div>

          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', Languages.text.celebrate, '', '', 'text', 200, true, <FaCalendar />, 'disable')}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', '', '', 'time', 200, false)}
            </div>
          </div>

          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', Languages.text.dinner, '', '', 'text', 200, true, <FaCalendar />, 'disable')}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', '', '', 'time', 200, false)}
            </div>
          </div>

          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', Languages.text.music, '', '', 'text', 200, true, <FaCalendar />, 'disable')}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', '', '', 'time', 200, false)}
            </div>
          </div>

        </div>
      </Panel>
    </>
  }, [])

  const renderBanking = useMemo(() => {
    return <Panel title={Languages.text.informationBanking}>

      <div className='section_banking_groom'>
        <h2>{Languages.text.man}</h2>

        <div className='inforBank_one_per'>
          <div className='fullwidth_input_colum'>
            <div className='single_hor_input'>
              {renderInput('', '', Languages.inputText.groom, Languages.inputText.groom, 'text', 200, true)}
            </div>
          </div>
          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.accountHolder, Languages.text.accountHolder, 'text', 200, false)}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.serinumber, Languages.text.serinumber, 'number', 14, false)}
            </div>
          </div>
          <div className='list_album_uploads'>
            {renderImageUploadSingle(
              '',
              album,
              '',
              true,
              onChangeAlbum,
              1,
              150,
              <Qrcode />,
              Languages.text.qrcode
            )}
          </div>
        </div>

        <div className='inforBank_one_per'>
          <div className='fullwidth_input_colum'>
            <div className='single_hor_input'>
              {renderInput('', '', Languages.inputText.father, Languages.inputText.father, 'text', 200, true)}
            </div>
          </div>
          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.accountHolder, Languages.text.accountHolder, 'text', 200, false)}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.serinumber, Languages.text.serinumber, 'number', 14, false)}
            </div>
          </div>
          <div className='list_album_uploads'>
            {renderImageUploadSingle(
              '',
              album,
              '',
              true,
              onChangeAlbum,
              1,
              150,
              <Qrcode />,
              Languages.text.qrcode
            )}
          </div>
        </div>

        <div className='inforBank_one_per'>
          <div className='fullwidth_input_colum'>
            <div className='single_hor_input'>
              {renderInput('', '', Languages.inputText.mother, Languages.inputText.mother, 'text', 200, true)}
            </div>
          </div>
          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.accountHolder, Languages.text.accountHolder, 'text', 200, false)}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.serinumber, Languages.text.serinumber, 'number', 14, false)}
            </div>
          </div>
          <div className='list_album_uploads'>
            {renderImageUploadSingle(
              '',
              album,
              '',
              true,
              onChangeAlbum,
              1,
              150,
              <Qrcode />,
              Languages.text.qrcode
            )}
          </div>
        </div>


      </div>

      <div className='section_banking_groom'>
        <h2>{Languages.text.women}</h2>

        <div className='inforBank_one_per'>
          <div className='fullwidth_input_colum'>
            <div className='single_hor_input'>
              {renderInput('', '', Languages.inputText.bride, Languages.inputText.bride, 'text', 200, true)}
            </div>
          </div>
          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.accountHolder, Languages.text.accountHolder, 'text', 200, false)}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.serinumber, Languages.text.serinumber, 'number', 14, false)}
            </div>
          </div>
          <div className='list_album_uploads'>
            {renderImageUploadSingle(
              '',
              album,
              '',
              true,
              onChangeAlbum,
              1,
              150,
              <Qrcode />,
              Languages.text.qrcode
            )}
          </div>
        </div>

        <div className='inforBank_one_per'>
          <div className='fullwidth_input_colum'>
            <div className='single_hor_input'>
              {renderInput('', '', Languages.inputText.father, Languages.inputText.father, 'text', 200, true)}
            </div>
          </div>
          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.accountHolder, Languages.text.accountHolder, 'text', 200, false)}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.serinumber, Languages.text.serinumber, 'number', 14, false)}
            </div>
          </div>
          <div className='list_album_uploads'>
            {renderImageUploadSingle(
              '',
              album,
              '',
              true,
              onChangeAlbum,
              1,
              150,
              <Qrcode />,
              Languages.text.qrcode
            )}
          </div>
        </div>

        <div className='inforBank_one_per'>
          <div className='fullwidth_input_colum'>
            <div className='single_hor_input'>
              {renderInput('', '', Languages.inputText.mother, Languages.inputText.mother, 'text', 200, true)}
            </div>
          </div>
          <div className='double_input_row'>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.accountHolder, Languages.text.accountHolder, 'text', 200, false)}
            </div>
            <div className='half_row_hor_input'>
              {renderInput('', '', Languages.text.serinumber, Languages.text.serinumber, 'number', 14, false)}
            </div>
          </div>
          <div className='list_album_uploads'>
            {renderImageUploadSingle(
              '',
              album,
              '',
              true,
              onChangeAlbum,
              1,
              150,
              <Qrcode />,
              Languages.text.qrcode
            )}
          </div>
        </div>


      </div>

    </Panel>
  }, [album, onChangeAlbum])

  const renderMusic = useMemo(() => {

    return <div className='sec_group_panel_collape'>
      <Panel title={Languages.text.music}>
        <div className='custom_display_sec_radio_music'>
          {renderMapRadio('', SelectMusic, radioChangeHandlerMusic, radioMusic)}
          <MultiPlayer
            urls={[
              'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
              'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
              'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            ]}
          />
        </div>
      </Panel>
    </div>

  }, [radioMusic, radioChangeHandlerMusic])

  const renderConfirmAttend = useMemo(() => {
    return <Panel title={Languages.text.confirmAttend}>

      <div className='sec_panel_use_feature_attend fullwidth_input_colum'>
        <div className='title'>
          {Languages.text.useFeatureAttend}
        </div>
        <div className='single_hor_input checkbox_inline_colum'>
          {renderInput('', '', Languages.text.use, '', 'checkbox', '', false, '', 'checkbox_input_style')}
        </div>
        <div className='details_attend'>
          <p>
            {Languages.text.attend} <b>{Languages.text.confirmAttend}</b>{Languages.text.enableAttend}
          </p>
          <p>{Languages.text.readChart}</p>
        </div>
      </div>

    </Panel>
  }, [])

  const renderGuestbook = useMemo(() => {

    return <Panel title={Languages.text.guestbook}>

      <div className='sec_panel_use_feature_attend fullwidth_input_colum'>
        <div className='title'>
          {Languages.text.useGuestbook}
        </div>
        <div className='single_hor_input checkbox_inline_colum'>
          {renderInput('', '', Languages.text.use, '', 'checkbox', '', false, '', 'checkbox_input_style')}
        </div>
        <div className='double_input_row'>
          <div className='half_row_hor_input'>
            {renderInput('', '', Languages.text.settingPwd, Languages.text.settingPwd, 'password', 200, false)}
          </div>
          <div className='half_row_hor_input'>
            <span>
              {Languages.text.minPwd}
            </span>
          </div>
        </div>
        <div className='details_attend'>
          <span>{Languages.text.obligatory}</span>
        </div>
        <div className='single_hor_input'>
          <MyTextArea
            value={guestbookTemp}
            label={Languages.inputText.contentInvite}
            placeHolder={Languages.inputText.contentInvite}
            maxLength={500}
            onChangeText={onChangeGuestbookTemp}
          />
          <Button

            label={Languages.buttonText.titleTemplate}
            buttonStyle={BUTTON_STYLES.PINK}
            textStyle={BUTTON_STYLES.PINK}
            isLowerCase
            onPress={onChangeOpenGuestbookTemplate}

          />
        </div>
      </div>

    </Panel>

  }, [guestbookTemp, onChangeOpenGuestbookTemplate, onChangeGuestbookTemp])

  const renderOpenStartEffect = useMemo(() => {

    return <Panel title={Languages.text.startEffect}>

      <div className='sec_panel_use_feature_attend fullwidth_input_colum'>
        <div className='title'>
          {Languages.text.checkedUseStartEffect}
        </div>
        <div className='single_hor_input checkbox_inline_colum'>
          {renderInput('', '', Languages.text.use, '', 'checkbox', '', false, '', 'checkbox_input_style')}
        </div>
      </div>

    </Panel>

  }, [])

  const renderComponentStyle = useCallback((classstyle, title, data, onChangeRadio, state) => {
    return <div className={`${'option_type_container'}  ${classstyle}`} >
      <div className='option_title_head'>
        <h5>
          {title}
        </h5>
      </div>
      <div className='option_select custom_style_radio'>
        {renderMapRadio('', data, onChangeRadio, state)}
      </div>
    </div>
  }, [])

  const renderTextStyle = useMemo(() => {

    return <Panel title={Languages.text.textStyleFont}>

      <div className='sec_options_select_type'>

        {renderComponentStyle('option_title', Languages.text.chooseFontTitle, SelectStyleTitle, radioChangeHandlerStyleTitle, radioStyleTitle)}
        {renderComponentStyle('option_content', Languages.text.chooseFontContent, SelectStyleTContent, radioChangeHandlerStyleContent, radioStyleContent)}

      </div>

    </Panel>

  }, [radioStyleTitle, radioStyleContent, radioChangeHandlerStyleContent, radioChangeHandlerStyleTitle])

  const renderEffectBgStyle = useMemo(() => {

    return <Panel title={Languages.text.effectBg}>

      <div className='sec_options_select_type'>

        {renderComponentStyle('option_type_bg', Languages.text.typeBg, SelectTypeBg, radioChangeHandlerTypebg, radioTypeBg)}
        {renderComponentStyle('option_color_bg', Languages.text.colorBg, SelectColorBg, radioChangeHandlerColorBg, radioColorBg)}
        {renderComponentStyle('option_effect_bg', Languages.text.effectBg, SelectEffectBg, radioChangeHandlerEffectBg, radioEffectBg)}

      </div>

    </Panel>

  }, [radioEffectBg, radioColorBg, radioTypeBg, radioChangeHandlerTypebg, radioChangeHandlerColorBg, radioChangeHandlerEffectBg])

  const renderBuyPackageProduct = useMemo(() => {

    return <div className='sec_group_panel_collape'>
      <Panel title={Languages.text.packageProduct}>
        <div className='wrap_package_product'>
          <div className='item_field_single'>
            <div className='sellect_option'>
              <label className='Input_label__90o4b'>
                {Languages.text.packagePro}
              </label>
              <select
                className='form_sellect_control'
                name='form_sellect_stt'
              >
                <option value='1'>{Languages.inputText.top1}</option>
                <option value='2'>{Languages.inputText.notTop}</option>
              </select>
            </div>
          </div>
        </div>
      </Panel>
    </div>

  }, [])

  const renderProductAnother = useMemo(() => {

    return <div className='sec_group_panel_collape'>
      <Panel title={Languages.text.anotherPro}>
        <div className='wrap_package_product_another'>

        </div>
      </Panel>
    </div>

  }, [])

  const renderReferralCode = useMemo(() => {

    return <div className='sec_group_panel_collape'>
      <Panel title={Languages.text.referralCode}>
        <div className='wrap_package_referralcode'>
          <div className='fullwidth_input_colum'>
            <div className='single_hor_input'>
              {renderInput('', '', Languages.text.referralCode, Languages.text.referralCode, 'text', 200, false)}
            </div>
          </div>

        </div>
      </Panel>
    </div>

  }, [])

  function onChangeSelectStt(event) {
    setSelectSTT(event.target.value)
  }

  function onChangeInviteTemp(event) {
    setInviteTemp(event.target.value)
  }

  function onChangeCountdownTemp(event) {
    setCountdownTemp(event.target.value)
  }

  function onChangeWarnTemp(event) {
    setWarnTemp(event.target.value)
  }

  function onChangeGuestbookTemp(event) {
    setGuestbookTemp(event.target.value)
  }


  const onChangeSaveSetting = useCallback(() => {
    console.log('save settings')
  }, [])


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

            {renderRadio('none', 'none', 'none', radioChangeHandler, radioEffectImage)}
            {renderRadio('Light', 'Light', 'Light', radioChangeHandler, radioEffectImage)}
            {renderRadio('Wave', 'Wave', 'Wave', radioChangeHandler, radioEffectImage)}
            {renderRadio('Heart Frame', 'Heart Frame', 'Heart Frame', radioChangeHandler, radioEffectImage)}

          </div>

          <div className='wrapper_information_wedding'>

            {renderTitle(
              Languages.text.inforWed,
              false,
              'title_comp_wed_add_cus'
            )}

            {renderFamilyMan}
            {renderFamilyWoman}
            {renderTimeandLocation}

            <div className='sec_group_panel_collape float_display'>

              {renderDamNgoAnHoi}
              {renderAlbum}
              {renderProgramEvent}
              {renderWarnning}
              {renderBanking}
              {renderMusic}
              {renderConfirmAttend}
              {renderGuestbook}
              {renderOpenStartEffect}
              {renderTextStyle}
              {renderEffectBgStyle}
              {renderBuyPackageProduct}
              {renderProductAnother}

              {renderReferralCode}

              <div className='savesetting_btn'>
                <Button
                  label={Languages.buttonText.saveSettings}
                  buttonStyle={BUTTON_STYLES.PINK}
                  textStyle={BUTTON_STYLES.PINK}
                  autocenter
                  onPress={onChangeSaveSetting}
                />
              </div>
              <div className='wrap_flop_note_using float_display'>
                <div className='box_note_using'>
                  <ul>
                    <li>
                      {Languages.text.changePlan}
                    </li>
                    <li>
                      {Languages.text.useMax7day}
                    </li>
                    <li>
                      {Languages.text.useActive90day}
                    </li>
                    <li>
                      {Languages.text.contactSupport}
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {renderModal}
      <Footer />
    </div>
  )
}

export default CreatePage
