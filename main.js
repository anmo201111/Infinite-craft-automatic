const targetX = 500;
const targetY = 100; //created by anmo

const elements = document.querySelectorAll('.item');

function startDragging() {
    if (elements.length < 2) return;

    let firstrandom = Math.floor(Math.random() * elements.length);
    let secondrandom = Math.floor(Math.random() * elements.length);

    while (secondrandom === firstrandom) {
        secondrandom = Math.floor(Math.random() * elements.length);
    }

    const firstElement = elements[firstrandom];
    const secondElement = elements[secondrandom];

    const firstRect = firstElement.getBoundingClientRect();
    const secondRect = secondElement.getBoundingClientRect();

    console.log(firstRect, secondRect);

    simulateDrag(firstElement, targetX, targetY);
    simulateDrag(secondElement, targetX, targetY);

    setTimeout(startDragging, 1000);
}

function simulateDrag(element, targetX, targetY) {
    const rect = element.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    element.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        clientX: startX,
        clientY: startY
    }));

    document.dispatchEvent(new MouseEvent('mousemove', {
        bubbles: true,
        clientX: targetX,
        clientY: targetY
    }));

    document.dispatchEvent(new MouseEvent('mouseup', {
        bubbles: true,
        clientX: targetX,
        clientY: targetY
    }));
}

function clickClearButtonPeriodically() {
    const clearBtn = document.getElementsByClassName('clear')[0];
    const agreeBtn = document.getElementsByClassName('action-btn action-danger')[0];
    if(clearBtn){
        setInterval(() => {
            clearBtn.click();
            agreeBtn.click();
            console.log('Clicked clear button');
    }, 10000); // Adjust the interval as needed
    } else {
        console.error('Clear button not found');
    };
} 

startDragging();
startDragging();
startDragging();
clickClearButtonPeriodically();
