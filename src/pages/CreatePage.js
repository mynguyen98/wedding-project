import React, { useState, useCallback } from 'react'
import { MyTextInput } from '@/components/input'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormValidate from '@/utils/FormValidate';
import { Alias } from '@/commons/Constant.ts'
import Loading from '@/components/Loading'
import { Button } from '@/components/button';
import Languages from '@/commons/Languages';
import { BUTTON_STYLES } from '@/commons/Constant.ts';
import { ImageUpload } from '@/components/imageUpload';
import ImgUploadIcon from '@/components/icons/ImgUploadIcon';
import arrayMove from "array-move-e5";
import { RadioButton } from '@/components/RadioButton';


const CreatePage = () => {

    const navigate = useNavigate();

    const [imagesCover, setImagesCover] = useState([]);
    const [images, setImages] = useState([]);

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
                    Alias.mypage, {
                    state: {
                        tokenParam: true
                    }
                }
                );
            }, 1500);

        }

    }, [name, pwd]);

    const renderImageUploadSingle = useCallback((title, images, desc, onChange) => {

        return <div className='uploading_single_img_group'>
            <h2>{title}</h2>
            <ImageUpload
                icon={<ImgUploadIcon />}
                maxnumber={1}
                images={images}
                maxW={'100%'}
                height={300}
                desc={desc}
                onChange={onChange}
            />
        </div>

    }, [])

    const renderRadio = useCallback((id, label, value, onChange) => {

        return <div className='options_select'>
            <RadioButton
                id={id}
                label={label}
                value={value}
                onChange={onChange}
            />
        </div>

    }, [])

    const onChange = (imageList) => {
        setImages(imageList);
    };

    const onChangeCoverImage = (imageList) => {
        setImagesCover(imageList);
    };

    const onSortEnd = useCallback((oldIndex, newIndex) => {
        setImages((array) => arrayMove(array, oldIndex, newIndex));
    }, []);

    return (
        <div className='Createpage'>
            <Loading />
            <div className='header_editpage'>
                <div className='header header_edit'>
                    <Button
                        label={Languages.common.cancel}
                    />
                    <div className='btn_group_r'>
                        <Button
                            label={Languages.common.saveDraf}
                            buttonStyle={BUTTON_STYLES.GRAY}
                        />
                        <Button
                            label={Languages.common.continue}
                            buttonStyle={BUTTON_STYLES.PINK}
                            textStyle={BUTTON_STYLES.WHITE}
                        />
                    </div>
                </div>
            </div>
            <div className='my_input_form_data_group'>
                <div className='container mx-auto'>
                    <div className='upload_represent_box'>
                        <div className='md:grid md:grid-cols-3 md:gap-5'>
                            <div className='col-span-2'>
                                {renderImageUploadSingle(Languages.text.chooseCoverImage, imagesCover, Languages.text.bigsize, onChangeCoverImage)}
                            </div>
                            {renderImageUploadSingle(Languages.text.chooseThumbs, images, Languages.text.smallsize, onChange)}
                        </div>
                    </div>
                    <div className='effect_image_options'>
                        <div className='title'>
                            {Languages.text.effectImage}
                        </div>

                        {renderRadio('none', 'none', 'none')}
                        {renderRadio('none', 'none', 'none')}
                        {renderRadio('none', 'none', 'none')}
                        {renderRadio('none', 'none', 'none')}

                    </div>
                </div>

            </div>
        </div>
    )
}


export default CreatePage
