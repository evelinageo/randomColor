//I need to generate 3 different number because rgb(200,123,34)

const btn1 = document.querySelector('#btn');
btn1.addEventListener('click', function () {
    //get h1
    const h1 = document.querySelector('h1');

    //call the function togenerate 3 random numbers and save it to a var
    const newColor = randomColor();

    //set background to new color
    document.body.style.backgroundColor = newColor;
    //update h1 text to the name of the color
    h1.innerText = newColor;
})

const randomColor = () => {
    //generate 3 random numbers
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    if (r <= 17 && g <= 7 && b <= 17) {
        const h1 = document.querySelector('h1');
        h1.style.color = 'white';
        btn1.style.color = 'white';
        return `rgb(${r}, ${g}, ${b})`;

    }
    else {
        // return the generated color
        return `rgb(${r}, ${g}, ${b})`;
    }
}


