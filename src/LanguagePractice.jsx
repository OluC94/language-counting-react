import { useState } from 'react';
import languageData from './languageData';
import { getRandomElement } from './utils';

export default function LanguagePractice(){
    const [displayNum, setDisplayNum] = useState(getRandomElement(languageData))
    const [enVisible, setEnVisible] = useState(true);
    const [jpVisible, setJpVisible] = useState(true);

    function handleHideLang(e){
        const lang = e.target.getAttribute("id")
        if (lang === 'en-show'){
            setEnVisible(currVal => !currVal)
        }
        if (lang === 'jp-show'){
            setJpVisible(currVal => !currVal)
        }
    }

    function handleRandomLang(lang){

    }

    return (
    <div>
        <div className="button-list">
            <button onClick={() => {}}>
                Left
            </button>
            <button onClick={() => {}}>
                Right
            </button>
            <button onClick={handleHideLang} id='en-show'>
                show/hide English
            </button>
            <button onClick={handleHideLang} id='jp-show'>
                show/hide Japanese
            </button>
            <button onClick={() => {}}>
                random English
            </button>
            <button onClick={() => {}}>
                random Japanese
            </button>
        </div>

        <h1>{enVisible ? displayNum.english : "?"}</h1>

        <h1>{jpVisible ? displayNum.japanese : "?"}</h1>
    </div>)
}