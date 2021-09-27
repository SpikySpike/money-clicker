import React, { useEffect, useState } from "react";

function playAudio() {
    const audio = new Audio("assets/sounds/sound1.wav");
    audio.volume = 0.6;
    audio.play();
}

function playAudioDouble() {
    const audio = new Audio("assets/sounds/sound3.wav");
    audio.volume = 0.6;
    audio.play();
}

function backAudio() {
    const backMusic = new Audio("assets/sounds/backSound.mp3");
    backMusic.volume = 0.2;
    backMusic.loop = true;
    backMusic.play();
}

export const CoinButton = ({ addMoney, cursorClass }) => {
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        addMoney();
        playAudio();
    };

    return (
        <a
            href="#"
            className={"clickButton " + cursorClass}
            onClick={(event) => handleClick(event)}
            draggable="false"
        >
            Click!
        </a>
    );
};

export const Clicker = () => {
    const [money, setMoney] = useState(0);
    const [cursorClass, setCursorClass] = useState("");

    useEffect(() => {
        backAudio();
    }, []);

    return (
        <div className="center">
            <div className="click">
                <CoinButton
                    addMoney={() => {
                        setMoney((old) => {
                            const money = old + 1;
                            if (money === 10) {
                                setCursorClass("doubleMoney");
                                playAudioDouble();
                            }
                            return money;
                        });
                    }}
                    cursorClass={cursorClass}
                />
                <br />
                <a className="money">Money: {money}$</a>
            </div>
        </div>
    );
};
