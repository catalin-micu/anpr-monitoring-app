import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import React from 'react';
import SignInRes from './signInRes';
import SignInCom from './signInCom';


export function LoginFormRes(props) {
    const {type, openPopup, setOpenPopup} = props;

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <Typography variant="button" color="secondary" align="center">Residential system authentification</Typography>
            </DialogTitle>
            <DialogContent>
                <SignInRes type={type} />
            </DialogContent>
        </Dialog>
    );
};

export function LoginFormCom(props) {
    const {type, openPopup, setOpenPopup} = props;

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <Typography variant="button" color="secondary" align="center">Commercial system authentification</Typography>
            </DialogTitle>
            <DialogContent>
                <SignInCom type={type} />
            </DialogContent>
        </Dialog>
    );
};

//export default LoginForm;