import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import React from 'react';
import SignIn from './signIn';


export default function LoginForm(props) {
    const {type, openPopup, setOpenPopup} = props;

    const handleClose = () => {
        setOpenPopup(false);
    };

    var title = '';
    if (type === 'res') {
        title = 'Residential';
    }
    else {
        title = 'Commercial';
    }

    return (
        <Dialog open={openPopup} onClose={handleClose}>
            <DialogTitle>
                <Typography variant="button" color="secondary" align="center">{title} system authentification</Typography>
            </DialogTitle>
            <DialogContent>
                <SignIn type={type} />
            </DialogContent>
        </Dialog>
    );
};

//export default LoginForm;