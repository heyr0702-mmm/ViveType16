export type AxisType = 'Power' | 'Warmth' | 'Speed' | 'Volume';

export interface Question {
    id: number;
    text: string;
    axis: AxisType;
    direction: 1 | -1; // +1: Positive Pole (D, E, I, X), -1: Negative Pole (R, C, S, Z)
}

export type CommunicationTypeMeta = {
    code: string;
    label: string;
    catchCopy: string;
};

export interface AxisResult {
    axis: AxisType;
    score: number; // -14 to +14
    percentage: number; // 0 to 100 (for UI)
    labelPositive: string; // e.g., 'Dominance'
    labelNegative: string; // e.g., 'Reception'
}
