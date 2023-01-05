function bubbleSort(bubbles) {
    for (let i = 0; i < bubbles.length; i++) {
        for (let j = 0; j < bubbles.length - i - 1; j++) {
            if (bubbles[j] > bubbles[j + 1]) {
                const smallerValue = bubbles[j + 1];
                bubbles[j + 1] = bubbles[j];
                bubbles[j] = smallerValue;
            }
        }
    }
    return bubbles;
}

let bubbleSortArray = [19, 28, 11, 15, 33, 2, 14, 22, 9, 16, 30, 5, 15, 38, 8, 3];

document.write(`<p style="color: #FFF; font-size: 28px; text-align: center">${bubbleSort(bubbleSortArray)}</p>`);
