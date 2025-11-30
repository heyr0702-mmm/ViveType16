import { COMMUNICATION_TYPE_META, QUESTIONS } from './constants';
import { AxisResult, CommunicationTypeMeta } from './types';

// Answers map: questionId -> score (-2 to +2)
export type Answers = Record<number, number>;

export function calculateScores(answers: Answers): AxisResult[] {
    const scores = {
        Power: 0,
        Warmth: 0,
        Speed: 0,
        Volume: 0,
    };

    QUESTIONS.forEach((q) => {
        const answer = answers[q.id] || 0;
        // q.direction is +1 or -1
        // answer is -2 to +2
        // score contribution = answer * direction
        // If direction is -1 (Reversed), +2 answer becomes -2 score.
        const value = answer * q.direction;
        scores[q.axis] += value;
    });

    return [
        {
            axis: 'Power',
            score: scores.Power,
            percentage: calculatePercentage(scores.Power),
            labelPositive: 'Dominance',
            labelNegative: 'Reception',
        },
        {
            axis: 'Warmth',
            score: scores.Warmth,
            percentage: calculatePercentage(scores.Warmth),
            labelPositive: 'Emotional',
            labelNegative: 'Cool',
        },
        {
            axis: 'Speed',
            score: scores.Speed,
            percentage: calculatePercentage(scores.Speed),
            labelPositive: 'Instant',
            labelNegative: 'Steady',
        },
        {
            axis: 'Volume',
            score: scores.Volume,
            percentage: calculatePercentage(scores.Volume),
            labelPositive: 'Expressive',
            labelNegative: 'Zero-ish',
        },
    ];
}

function calculatePercentage(score: number): number {
    // Score range: -14 to +14
    // Map to 0 to 100
    // -14 -> 0
    // 0 -> 50
    // +14 -> 100
    return Math.round(((score + 14) / 28) * 100);
}

export function determineCharacter(axisResults: AxisResult[]): CommunicationTypeMeta {
    // Generate 4-letter code
    // Power: >=0 -> D, <0 -> R
    // Warmth: >=0 -> E, <0 -> C
    // Speed: >=0 -> I, <0 -> S
    // Volume: >=0 -> X, <0 -> Z

    const code = axisResults.map(r => {
        if (r.axis === 'Power') return r.score >= 0 ? 'D' : 'R';
        if (r.axis === 'Warmth') return r.score >= 0 ? 'E' : 'C';
        if (r.axis === 'Speed') return r.score >= 0 ? 'I' : 'S';
        if (r.axis === 'Volume') return r.score >= 0 ? 'X' : 'Z';
        return '';
    }).join('');

    return COMMUNICATION_TYPE_META.find(c => c.code === code) || COMMUNICATION_TYPE_META[0];
}
