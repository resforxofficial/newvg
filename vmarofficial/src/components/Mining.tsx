import { useState } from "react";
import { useStore, caveItemList } from '../data/zuct';

export default function Mining() {
    const [isClicked, setIsClicked] = useState(false);
    const [isClickItem, setIsClickItem] = useState(false);
    const [isClickProby, setIsClickProby] = useState(false);

    return (
        <div>
            <h1>광산</h1>
            <h3>광산에 오신걸 환영합니다. </h3>
            <button onClick={() => {
                setIsClickItem(false);
                setIsClicked(!isClicked);
                setIsClickProby(false);
            }}>
                광산 열기
            </button>&nbsp;&nbsp;&nbsp;

            <button onClick={() => {
                setIsClickItem(!isClickItem);
                setIsClicked(false);
                setIsClickProby(false);
            }}>
                아이템 목록
            </button>&nbsp;&nbsp;&nbsp;

            <button onClick={() => {
                setIsClickItem(false);
                setIsClicked(false);
                setIsClickProby(!isClickProby);
            }}>
                확률표
            </button>

            {isClicked && <Cave />}
            {isClickItem && <CaveItemList />}
            {isClickProby && <Probability />}
        </div>
    );
}

function Cave() {
    const cavi = useStore();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        console.log("bh");
        setIsDisabled(true);
        cavi.handleStoreCavedItem
        setTimeout(() => {
            console.log("h");
            setIsDisabled(false);
        }, cavi.coolTime);
    }

    return (
        <div>
            <br />
            <h1>Lv. {cavi.level} {cavi.caveName}</h1>
            <h2>쿨타임: {cavi.coolTime / 1000 + 1}초</h2>
            <button onClick={handleClick} disabled={isDisabled} className={isDisabled ? "urteka" : ""}>
                채굴
            </button>
            <br />
        </div>
    );
}

function CaveItemList() {
    return (
        <div>
            <h1>광산 채굴 아이템 목록</h1><br />
            <h2>광석명&nbsp;&nbsp;가격&nbsp;&nbsp;희귀도&nbsp;&nbsp;가능재화</h2>
            <ul>
                {caveItemList.map((v, i) => (
                    <li key={i}>
                        {v.name}&nbsp;&nbsp;{v.cost}&nbsp;&nbsp;{v.rarity}&nbsp;&nbsp;{v.cost_type}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Probability() {
    return (
        <div>
            <h1>hello world 2</h1>
        </div>
    );
}

function getRandomItem() {
    const randomIndex = randint(0, caveItemList.length);
    const result = caveItemList[randomIndex];
    return result;

}

function randint(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
