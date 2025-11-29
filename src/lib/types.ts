export type AxisType = 'Power' | 'Temperature' | 'Speed' | 'Volume';

export interface Question {
    id: number;
    text: string;
    axis: AxisType;
    reversed: boolean; // If true, positive answer adds to the 'negative' pole (e.g., R, C, S, Z)
}

export interface Character {
    code: string;
    name: string;
    catchphrase: string;
    description: string;
}

export interface AxisResult {
    axis: AxisType;
    score: number; // -14 to +14
    percentage: number; // 0 to 100 (for UI)
    labelPositive: string; // e.g., 'Dominance'
    labelNegative: string; // e.g., 'Reception'
}
