import React from 'react'
import useStyles from './FooterStyles';

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            Footer
        </div>
    )
}

export default Footer
