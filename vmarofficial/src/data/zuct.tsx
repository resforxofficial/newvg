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
            cavedItem: [...s.cavedItem, n], // 상태 업데이트를 반환
        })),
}));

type CostType = "브론즈" | "실버" | "골드" | "다이아";

interface ICaveItemList {
    name: string;
    cost: number;
    rarity: number | string;
    cost_type: CostType;
    chance: number;
}

export const caveItemList: ICaveItemList[] = [
    { name: "돌", cost: 150, rarity: "pending", cost_type: "브론즈", chance: 10000 },
    { name: "철", cost: 150, rarity: "pending", cost_type: "브론즈", chance: 5000 },
    { name: "석탄", cost: 150, rarity: "pending", cost_type: "브론즈", chance: 2500 },
    { name: "구리", cost: 150, rarity: "pending", cost_type: "브론즈", chance: 1250 },
    { name: "레드스톤", cost: 150, rarity: "pending", cost_type: "브론즈", chance: 750 },
    { name: "은", cost: 150, rarity: "pending", cost_type: "브론즈", chance: 200 },
];
