import React, { useCallback, useMemo } from 'react';
import styles from './blockUI.module.css'
import { BUTTON_STYLES } from '../../commons/Constant.ts';
import { Button } from '../button';

function BlockUI({
    backgroundColor,
    isLeft,
    isright,
    isbutton,
    onPress,
    buttonStyle,
    width,
    img,
    styleImg,
    title,
    label,
    children
}) {

    const _onPress = useCallback(() => {
        onPress?.(label);
    }, [label, onPress]);

    const getContainerStyle = useMemo(() => {

        let containerStyle = styles.yellowsButton;

        switch (backgroundColor) {

            case BUTTON_STYLES.YELLOWS:
                containerStyle = styles.yellowsButton;
                break;

            case BUTTON_STYLES.WHITE:
                containerStyle = styles.whiteButton;
                break;

            default:
                containerStyle = styles.greenButton;
                break;
        }

        return `${styles.container} ${containerStyle}`;
    }, [buttonStyle]);

    return (
        <div className={getContainerStyle}>

            <div className='container mx-auto'>

                <div className='grid grid-cols-2 gap-4'>
                    {
                        isLeft && <div className={styles.blockUIimage}>
                            <img src={img} className={styleImg} alt={title} />
                        </div>
                    }
                    <div>
                        <div className={styles.blockUIText}>
                            <h2 className={styles.blockUIhead}>
                                {title}
                            </h2>
                            <div className={styles.blockUIContent}>
                                {children}
                            </div>
                            {
                                isbutton && <Button
                                    label={label}
                                    buttonStyle={buttonStyle}
                                    width={width}
                                    onPress={_onPress}
                                />
                            }
                        </div>
                    </div>
                    {
                        isright && <div className={styles.blockUIimage}>
                            <img src={img} className={styleImg} alt={title} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default BlockUI;
