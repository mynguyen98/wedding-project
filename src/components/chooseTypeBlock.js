import React from 'react';
import { Button } from './button';
import { BUTTON_STYLES } from '@/commons/Constant.ts';
import Languages from '@/commons/Languages';
import itemImage from '@/assets/home-image/item.png'

function ChooseTypeBlock() {

    return (
        <div className='section_wrap_type_ds'>

            <div className='container mx-auto'>
                <div className='head text-center'>
                    <h2>
                        {Languages.text.typeDs}
                    </h2>
                </div>
                <div className='slide-track scroll-item-horizontal slide-group-item'>
                    <div className='slide-item'>
                        <div className='box-image'>
                            <img src={itemImage} title={'item'} />
                        </div>
                        <div className='title'>
                            <span>Mẫu 35</span>
                            <h3>Mùa hè kỉ niệm</h3>
                        </div>
                    </div>
                    <div className='slide-item'>
                        <div className='box-image'>
                            <img src={itemImage} title={'item'} />
                        </div>
                        <div className='title'>
                            <span>Mẫu 35</span>
                            <h3>Mùa hè kỉ niệm</h3>
                        </div>
                    </div>
                    <div className='slide-item'>
                        <div className='box-image'>
                            <img src={itemImage} title={'item'} />
                        </div>
                        <div className='title'>
                            <span>Mẫu 35</span>
                            <h3>Mùa hè kỉ niệm</h3>
                        </div>
                    </div>
                    <div className='slide-item'>
                        <div className='box-image'>
                            <img src={itemImage} title={'item'} />
                        </div>
                        <div className='title'>
                            <span>Mẫu 35</span>
                            <h3>Mùa hè kỉ niệm</h3>
                        </div>
                    </div>

                    <div className='slide-item'>
                        <div className='box-image'>
                            <img src={itemImage} title={'item'} />
                        </div>
                        <div className='title'>
                            <span>Mẫu 35</span>
                            <h3>Mùa hè kỉ niệm</h3>
                        </div>
                    </div>
                    
                </div>
                <div className='bottom-button-click center'>
                    <Button
                        label={Languages.buttonText.seeAll}
                        buttonStyle={BUTTON_STYLES.PINK}
                        isLowerCase
                    />
                </div>
            </div>

        </div>
    );
}

export default ChooseTypeBlock;
