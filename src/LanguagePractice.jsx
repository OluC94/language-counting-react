import { useState } from 'react';
import languageData from './languageData';
import { getRandomElement } from './utils';

export default function LanguagePractice(){
    const [displayNum, setDisplayNum] = useState(getRandomElement(languageData))
    const [enVisible, setEnVisible] = useState(true);
    const [jpVisible, setJpVisible] = useState(true);

    function handleNextNum(e) {
        const change = e.target.getAttribute("id")
        if (change === 'left' && displayNum.count > 0){
            setDisplayNum((currVal) => {
                return languageData.find((elem) => elem.count === currVal.count - 1)
            })
        }
        if (change === 'right' && displayNum.count <10){
            setDisplayNum((currVal) => {
                return languageData.find((elem) => elem.count === currVal.count + 1)
            })
        }
    }

    function handleHideLang(e){
        const lang = e.target.getAttribute("id")
        if (lang === 'en-show'){
            setEnVisible(currVal => !currVal)
        }
        if (lang === 'jp-show'){
            setJpVisible(currVal => !currVal)
        }
    }

    function handleRandomLang(e){
        const lang = e.target.getAttribute("id")
        setDisplayNum(getRandomElement(languageData))
        if (lang === 'en-rand'){
            setEnVisible(true)
            setJpVisible(false)
        }
        if (lang === 'jp-rand'){
            setJpVisible(true)
            setEnVisible(false)
        }
    }

    return (
    <div>
        <div className="button-list">
            <button onClick={handleNextNum} id='left'>
                Left
            </button>
            <button onClick={handleNextNum} id='right'>
                Right
            </button>
            <button onClick={handleHideLang} id='en-show'>
                show/hide English
            </button>
            <button onClick={handleHideLang} id='jp-show'>
                show/hide Japanese
            </button>
            <button onClick={handleRandomLang} id='en-rand'>
                random English
            </button>
            <button onClick={handleRandomLang} id='jp-rand'>
                random Japanese
            </button>
        </div>

        <h1>{enVisible ? displayNum.english : "?"}</h1>

        <h1>{jpVisible ? displayNum.japanese : "?"}</h1>
    </div>)
}