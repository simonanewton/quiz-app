import React from "react";
import LoadingScreen from 'react-loading-screen';
// import "./index.css";

function Loading() {
    return (
        <LoadingScreen
            loading={true}
            bgColor='white'
            spinnerColor='orange'
            logoSrc='./assets/icon.png'
            textColor='orange'
            text='example'
        >

        </LoadingScreen>
    );
}

export default Loading;
