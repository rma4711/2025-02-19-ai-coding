export enum Segments {
    A = 0b0000001,
    B = 0b0000010,
    C = 0b0000100,
    D = 0b0001000,
    E = 0b0010000,
    F = 0b0100000,
    G = 0b1000000,
}

export const SegmentBits = [
    Segments.A,
    Segments.B,
    Segments.C,
    Segments.D,
    Segments.E,
    Segments.F,
    Segments.G,
];

export function isValidSegment(segment: Segments) {
    return Object.values(Segments).includes(segment);
}

export function getSegmentBit(bits: number, segment: Segments) {
    if (!isValidSegment(segment)) {
        throw new Error(`Invalid segment: ${segment}`);
    }

    return (bits & segment) === segment;
}

export function setSegmentBit(bits: number, segment: Segments) {
    if (!isValidSegment(segment)) {
        throw new Error(`Invalid segment: ${segment}`);
    }

    return bits | segment;
}

export function clearSegmentBit(bits: number, segment: Segments) {
    if (!isValidSegment(segment)) {
        throw new Error(`Invalid segment: ${segment}`);
    }

    return bits & ~segment;
}

const DigitSegments = new Map<number, number>([
    [0, Segments.A | Segments.B | Segments.C | Segments.D | Segments.E | Segments.F],
    [1, Segments.B | Segments.C],
    [2, Segments.A | Segments.B | Segments.D | Segments.E | Segments.G],
    [3, Segments.A | Segments.B | Segments.C | Segments.D | Segments.G],
    [4, Segments.B | Segments.C | Segments.F | Segments.G],
    [5, Segments.A | Segments.C | Segments.D | Segments.F | Segments.G],
    [6, Segments.A | Segments.C | Segments.D | Segments.E | Segments.F | Segments.G],
    [7, Segments.A | Segments.B | Segments.C],
    [8, Segments.A | Segments.B | Segments.C | Segments.D | Segments.E | Segments.F | Segments.G],
    [9, Segments.A | Segments.B | Segments.C | Segments.D | Segments.F | Segments.G],
]);

export function getSegmentBitsForDigit(digit: number) {
    const segments = DigitSegments.get(digit);
    if (segments === undefined) {
        throw new Error(`Invalid digit: ${digit}`);
    }
    return segments;
}
