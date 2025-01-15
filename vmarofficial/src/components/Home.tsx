import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>브이마켓 게임</h1>
            <Link to="/mining"><button>광산</button></Link>&nbsp;&nbsp;
            <Link to="/create_item"><button>조각 제작소</button></Link>&nbsp;&nbsp;
            <Link to="/create_piece"><button>아이템 제작소</button></Link>&nbsp;&nbsp;
            <Link to="/upgrade"><button>업그레이드</button></Link>&nbsp;&nbsp;
        </div>
    );
}