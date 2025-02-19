import './index.css';
import { createDigitDiv, setDigit } from './segmentDigits';

const app = document.getElementById('app') as HTMLDivElement;
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', () => {
    const digits = input.value.split('').map(d => parseInt(d, 10));
    for (let i = 0; i < 4; i++) {
        const digit = digits[i];
        setDigit(app.children[i] as HTMLDivElement, digit);
    }
});

for (let i = 0; i < 4; i++) {
    const digit = createDigitDiv();
    app.appendChild(digit);
}