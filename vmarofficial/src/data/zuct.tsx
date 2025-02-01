import { create } from "zustand";

interface BaseInformation {
    username: string;
    level: number;
    exp: number;
}

interface BaseMoneyInformation {
    bronze: number;
    silver: number;
    gold: number;
    diamond: number;
}

interface CaveInformation {
    caveLevel: number;
    caveName: string;
    coolTime: number;
    cavedItem: string[];
}

interface CaveInformationAction {
    handleChangeCaveLv: (needMoney: number) => void;
    handleChangeCaveName: (newName: string) => void;
    handleChangeCoolTime: (newVal: number) => void;
    handleStoreCavedItem: (newItem: string) => void;
    handleDeleteCavedItem: (newValssss: string) => void;
    handleUpgradeCave: () => void;
}

type ALL = BaseInformation & BaseMoneyInformation & CaveInformation & CaveInformationAction;

export const useStore = create<ALL>((set) => ({
    username: "pending",
    level: 1,
    exp: 0,

    bronze: 0,
    silver: 0,
    gold: 0,
    diamond: 0,

    cavedItem: [],

    caveLevel: 1,
    caveName: "돌 광산",
    coolTime: 4500,

    handleChangeCaveLv: (n) => set((s) => ({ caveLevel: s.caveLevel + 1, bronze: n })),
    handleChangeCaveName: (n) => set(() => ({ caveName: n })),
    handleChangeCoolTime: (n) => set(() => ({ coolTime: n })),
    handleStoreCavedItem: (n) =>
        set((s) => ({
            cavedItem: [...s.cavedItem, n],
        })),
    handleDeleteCavedItem: (n) => set((state) => {
        const newCavedItems = state.cavedItem.filter(item => item !== n);

        const item = caveItemList.find(i => i.name === n);
        const newBronze = item ? state.bronze + item.cost : state.bronze;

        return {
            cavedItem: newCavedItems,
            bronze: newBronze,
        };
    }),
    handleUpgradeCave: () => set((s) => {
        if (s.caveLevel >= 30) return s;

        let cost = 0;
        let currencyKey: EnglishCostType = "bronze";
        if (s.caveLevel < 9) {
            cost = 500;
            currencyKey = "bronze";
        }

        else if (s.caveLevel < 19) {
            cost = 700;
            currencyKey = "silver";
        }

        else if (s.caveLevel < 29) {
            cost = 900;
            currencyKey = "gold";
        }

        else {
            cost = 1000;
            currencyKey = "diamond";
        }

        if (s[currencyKey] < cost) return s;

        const mineNames = [
            "돌 광산", "철 광산", "은 광산", "구리 광산", "석탄 광산", "레드스톤 광산",
            "사파이어 광산", "에메랄드 광산", "루비 광산", "플래티넘 광산", "다이아몬드 광산",
            "마스터 광산", "슈퍼 골드 광산", "슈퍼 플래티넘 광산", "슈퍼 다이아몬드 광산",
            "몬스터 광산", "그랜드 마스터 광산", "챌린저 광산", "아르테미스 광산",
            "오딘 광산", "제우스 광산", "크로노스 광산", "타이탄 광산", "네메시스 광산",
            "이터널 광산", "갤럭시 광산", "유니버스 광산", "인피니트 광산",
            "오메가 광산", "얼티밋 광산"
        ];

        return {
            ...s,
            caveLevel: s.caveLevel + 1,
            caveName: mineNames[s.caveLevel],
            [currencyKey]: s[currencyKey] - cost,
            coolTime: Math.max(s.coolTime - 100, 1000),
        }
    })
}));

type CostType = "브론즈" | "실버" | "골드" | "다이아";
type EnglishCostType = "bronze" | "silver" | "gold" | "diamond";

interface ICaveItemList {
    name: string;
    cost: number;
    rarity: number | string;
    cost_type: CostType;
    chance: number;
}

export const caveItemList: ICaveItemList[] = [
    { name: "돌", cost: 150, rarity: "pending", cost_type: "브론즈", chance: 10000 },
    { name: "철", cost: 175, rarity: "pending", cost_type: "브론즈", chance: 5000 },
    { name: "석탄", cost: 205, rarity: "pending", cost_type: "브론즈", chance: 2500 },
    { name: "구리", cost: 250, rarity: "pending", cost_type: "브론즈", chance: 1250 },
    { name: "레드스톤", cost: 300, rarity: "pending", cost_type: "브론즈", chance: 750 },
    { name: "은", cost: 355, rarity: "pending", cost_type: "브론즈", chance: 200 },
];
