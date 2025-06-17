import React from "react";

import style from "./CV.module.css";

const CV = () => {

    const handleOpenPdf = () => {
        window.open(process.env.PUBLIC_URL + '/files/pavlokasyanovcv.pdf', '_blank');
      };
 
    return (
        <button className={style.openCVBtn} onClick={handleOpenPdf}>
            CV
        </button>
    );
};


export default CV;


// var pathToFile = "...";
//downloadFile(file) {
    //location.href = pathToFile + file;
//}