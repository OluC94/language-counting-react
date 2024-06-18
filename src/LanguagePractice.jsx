import languageData from './languageData';

export default function LanguagePractice(){
    console.log(languageData)
    return (
    <div>
        <div className="button-list">
            <button onClick={() => {}}>
                Left
            </button>
            <button onClick={() => {}}>
                Right
            </button>
            <button onClick={() => {}}>
                show/hide English
            </button>
            <button onClick={() => {}}>
                show/hide Japanese
            </button>
            <button onClick={() => {}}>
                random English
            </button>
            <button onClick={() => {}}>
                random Japanese
            </button>
        </div>

        <h1>English word</h1>

        <h1>Japanese word</h1>
    </div>)
}