import React, { memo } from 'react';

import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { BoxSingInfo } from '~/component';

const cx = classNames.bind(styles);

function ItemSongInfo({ imageSong, name, singer, heightStyle, isActive, onClick }) {
    // const [isActive, setIsActive] = useState(false);

    return (
        <div className={cx('wrapper')} style={{ height: `${heightStyle}rem` }}>
            <BoxSingInfo imageSong={imageSong} name={name} singer={singer} isActive={isActive} onClick={onClick} />
        </div>
    );
}

export default memo(ItemSongInfo);