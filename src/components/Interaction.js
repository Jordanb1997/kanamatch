import React from 'react';
import Checking from './Checking.js';

function Interaction() {
    return (
        <div className="interaction">
            <div className="guesscontainer">
                <div className="correctanswer">
                    <Checking />
                    <div className="tally">
                        <div>10/10</div>
                    </div>
                </div>
                <div className="resetbutton">
                    <input type="button" className="kanabutton" onClick={() => alert('click')} id="reset" value="reset" />
                </div>
                <div className="guess">

                </div>
            </div>
            <div className="kanaswitch">
                <input type="button" className="kanabutton" value="Hiragana" />
                <input type="button" className="kanabutton" value="Katakana" />
                <input type="button" className="kanabutton" value="romanji" />
            </div>
        </div>
    );
}

export default Interaction;