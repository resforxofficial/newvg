import { useStore } from '../data/zuct';
import { useNavigate } from "react-router-dom";

export default function Inventory() {
    const cavi = useStore();
    const hist = useNavigate();

    return (
        <div>
            <h1>인벤토리</h1>
            <div>
                <h3>브론즈: {cavi.bronze ?? 0}</h3>
            </div>
            <h2>아이템 번호&nbsp;&nbsp;&nbsp;아이템 명</h2>
            <ul>
                {cavi.cavedItem.map((v, i) => (
                    <li key={i}>
                        {i + 1}&nbsp;&nbsp;{v}&nbsp;&nbsp;<button onClick={() => cavi.handleDeleteCavedItem(v)}>판매하기</button><br />
                    </li>
                ))}
            </ul>
            <br /><br /><button style={{ "fontSize": "11px" }} onClick={() => hist(-1)}>Back</button>
        </div>
    );
}
