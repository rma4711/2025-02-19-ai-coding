import { Segments, getSegmentBitsForDigit, getSegmentBit } from './segmentBits';

const digitSvg = `<svg width="48" height="80" viewBox="0 0 10 18">
  <g>
    <!-- See also https://en.wikipedia.org/wiki/Seven-segment_display#/media/File:7_Segment_Display_with_Labeled_Segments.svg -->
    <polygon points="1, 1  2, 0  8, 0  9, 1  8, 2  2, 2" /><!-- a -->
    <polygon points="9, 1 10, 2 10, 8  9, 9  8, 8  8, 2" /><!-- b -->
    <polygon points="9, 9 10,10 10,16  9,17  8,16  8,10" /><!-- c -->
    <polygon points="9,17  8,18  2,18  1,17  2,16  8,16" /><!-- d -->
    <polygon points="1,17  0,16  0,10  1, 9  2,10  2,16" /><!-- e -->
    <polygon points="1, 9  0, 8  0, 2  1, 1  2, 2  2, 8" /><!-- f -->
    <polygon points="1, 9  2, 8  8, 8  9, 9  8,10  2,10" /><!-- g -->
  </g>
</svg>`;

export function createDigitDiv(): HTMLDivElement {
    const div = document.createElement('div');
    div.innerHTML = digitSvg;
    return div;
}

/**
 * For each segment that is active, this method sets the "on" CSS class, otherwise removes it.
 * 
 * @param div Div as created by createDigitDiv
 * @param digit Digit to display, 0-9
 * 
 * If digit is undefined, all segments are turned off.
 */
export function setDigit(div: HTMLDivElement, digit?: number) {
    const segments = digit !== undefined ? getSegmentBitsForDigit(digit) : 0;
    const polygons = div.querySelectorAll('polygon');
    
    [Segments.A, Segments.B, Segments.C, Segments.D, Segments.E, Segments.F, Segments.G]
        .forEach((segment, index) => {
            const isOn = getSegmentBit(segments, segment);
            if (isOn) {
                polygons[index].classList.add('on');
            } else {
                polygons[index].classList.remove('on');
            }
        });
}