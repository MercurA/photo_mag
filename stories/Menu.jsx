import './menu.css'
import React from 'react';

export const Menu = ({}) => {

    const handleDrawer = () => {}

    return (
        <div className={'menuContainer'}>
            <div className={'menuWrapper'} onClick={handleDrawer}>
                <div className={'slideMenuBtn'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={'brandTitle'}>
                    <strong>{"Horea's"}</strong> Photography
                </div>
            </div>
        </div>
    )
}
