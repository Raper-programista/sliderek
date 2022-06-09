const sliderImage = document.getElementById("slider-image");
const sliderText = document.getElementById("slider-text");
const sliderArrowLeft = document.getElementById("slider-arrow-left");
const sliderArrowRight = document.getElementById("slider-arrow-right");
const sliderImages = [...document.getElementsByClassName('slider-img')]
const sliderTexts = [
    'Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM',
    'Maksymalna prędkość: 200 KM/H Moc silnika: 150 KM',
    'Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM',
    'Maksymalna prędkość: 200 KM/H Moc silnika: 150 KM',
    'Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM'
]

function startHiding(index, width) {
    sliderImages[index].classList.add('slider-halfactive')
    sliderImages[index].classList.remove('slider-active')
    let newWidth = width - 1
    if (newWidth > 50) {
        setTimeout(() => {
            sliderImages[index].style.width = "" + newWidth + "%";
            startHiding(index, newWidth)
        }, 10)
    } else {
        sliderImages[index].style.width = "" + newWidth + "%";
    }

}

function show(index, width) {

}

function startShowing(index, width) {
    sliderImages[index].classList.add('slider-halfactive')
    let newWidth = width + 1
    if (newWidth < 50) {
        setTimeout(() => {
            sliderImages[index].style.width = "" + newWidth + "%";
            startHiding(index, newWidth)
        }, 10)
    } else {
        sliderImages[index].style.width = "" + newWidth + "%";
    }
}

let currentIndex = 0;

sliderArrowLeft.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex -= 1;
        //sliderImages[currentIndex + 1].classList.remove('slider-active')
        //sliderImages[currentIndex].classList.add('slider-active')

        if (currentIndex > 0) {
            startShowing(currentIndex - 1, 0)
        }
        if (currentIndex < sliderImages.length - 3) {
            sliderImages[currentIndex + 2].classList.remove('slider-halfactive')
        }
        startHiding(currentIndex + 1, 100)

        sliderText.textContent = sliderTexts[currentIndex]
    }
})

sliderArrowRight.addEventListener('click', function () {
    if (currentIndex < sliderImages.length - 1) {
        currentIndex += 1;
        //sliderImages[currentIndex - 1].classList.remove('slider-active')
        //sliderImages[currentIndex].classList.add('slider-active')
        if (currentIndex < sliderImages.length - 2) {
            startShowing(currentIndex + 1, 0)
        }
        if (currentIndex > 1) {
            sliderImages[currentIndex - 2].classList.remove('slider-halfactive')
        }
        startHiding(currentIndex - 1, 100)
        sliderText.textContent = sliderTexts[currentIndex]


    }
})
