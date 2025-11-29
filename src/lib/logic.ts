import { CHARACTERS, QUESTIONS } from './constants';
import { AxisResult, Character } from './types';

// Answers map: questionId -> score (-2 to +2)
export type Answers = Record<number, number>;

export function calculateScores(answers: Answers): AxisResult[] {
    const scores = {
        Power: 0,
        Temperature: 0,
        Speed: 0,
        Volume: 0,
    };

    QUESTIONS.forEach((q) => {
        const answer = answers[q.id] || 0;
        // If reversed, positive answer adds to negative pole (subtracts from score)
        // If not reversed, positive answer adds to positive pole (adds to score)
        // Actually, let's define:
        // Positive Pole (+): D, E, I, X
        // Negative Pole (-): R, C, S, Z
        // Score range per axis: -14 to +14

        // If q.reversed is false: +2 means +2 to score.
        // If q.reversed is true: +2 means -2 to score.
        const value = q.reversed ? -answer : answer;
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
            axis: 'Temperature',
            score: scores.Temperature,
            percentage: calculatePercentage(scores.Temperature),
            labelPositive: 'Emotion',
            labelNegative: 'Cool',
        },
        {
            axis: 'Speed',
            score: scores.Speed,
            percentage: calculatePercentage(scores.Speed),
            labelPositive: 'Impulsive',
            labelNegative: 'Steady',
        },
        {
            axis: 'Volume',
            score: scores.Volume,
            percentage: calculatePercentage(scores.Volume),
            labelPositive: 'Expressive',
            labelNegative: 'Zero',
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

export function determineCharacter(axisResults: AxisResult[]): Character {
    // Generate 4-letter code
    // Power: >0 -> D, <=0 -> R
    // Temperature: >0 -> E, <=0 -> C
    // Speed: >0 -> I, <=0 -> S
    // Volume: >0 -> X, <=0 -> Z

    const code = axisResults.map(r => {
        if (r.axis === 'Power') return r.score >= 0 ? 'D' : 'R'; // Bias towards D if 0? Let's say >= 0 is Positive pole
        if (r.axis === 'Temperature') return r.score >= 0 ? 'E' : 'C';
        if (r.axis === 'Speed') return r.score >= 0 ? 'I' : 'S';
        if (r.axis === 'Volume') return r.score >= 0 ? 'X' : 'Z';
        return '';
    }).join('');

    return CHARACTERS.find(c => c.code === code) || CHARACTERS[0];
}
