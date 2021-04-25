import React, { ReactDOM, Suspense } from 'react'
import Bar from '../components/Bar';
import Ocr from '../components/Ocr';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import SearchEngine from '../components/SearchEngine';



function Features() {
    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (

        <div className="App">
            <div>
                <Bar />
            </div>
            <h3>Translation :{t('title.1')}</h3>
            <h6>Definition: {t('describtion.1')}</h6>
            <h6>Definition: {t('describtion.2')}</h6>
            <br></br>
            <br></br>
            <br></br>
            <div className="Tool">
                <SearchEngine/>
            </div> 
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Features;
