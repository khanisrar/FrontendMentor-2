let count = 0;

const iconCart = document.querySelector('#icon-cart');
const Cart = document.querySelector('.cart');

const Btns = document.querySelectorAll('.btn');
const Value = document.querySelector('#value');

const Ims = document.querySelectorAll('.ims')
const Bigimg = document.querySelector('#bigimg');

const FbigContainer = document.querySelector('.FbigContainer');
const Cross = document.querySelector('#cross');

const FIms = document.querySelectorAll('.Fims')
const FBigimg = document.querySelector('#Fbigimg');

const Prev = document.querySelector('#prev');
const Next = document.querySelector('#next');

const Before = document.querySelector('#before');
const After = document.querySelector('#after');

const Menu = document.querySelector('#menu');
const Times = document.querySelector('#times');
const Navlink = document.querySelector('.navlink');


iconCart.addEventListener('click', () => {
    Cart.classList.toggle('active')
    Navlink.style.left = "-70%";


});


Btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const quantity = e.currentTarget.classList;
        if (quantity.contains('inc')) {
            count++;
        }
        Value.textContent = count;

        if (quantity.contains('dec')) {
            count--;
        }
        Value.textContent = count;

        if (count < 0) {
            count = 0;
        }
        Value.textContent = count;

    })
});

let currentIndex = 0;

Array.from(Ims).forEach((ele, i) => {
    ele.onclick = () => {
        Bigimg.src = ele.src;
        ele.style.border = "3px solid  hsl(26, 100%, 55%)";
        ele.style.opacity = ".5";
        Ims[currentIndex].style.border = "none";
        Ims[currentIndex].style.opacity = "1";
        currentIndex = i;
    }
});

Bigimg.addEventListener('click', () => {
    FbigContainer.style.display = "block";
    if (screen.width < 900) {
        FbigContainer.style.display = "none";
    }
});

Cross.addEventListener('click', () => {
    FbigContainer.style.display = "none";
});

let FcurrentIndex = 0;

Array.from(FIms).forEach((Fele, i) => {
    Fele.onclick = () => {
        FBigimg.src = Fele.src;
        Fele.style.border = "3px solid  hsl(26, 100%, 55%)";
        Fele.style.opacity = ".5";
        FIms[FcurrentIndex].style.border = "none";
        FIms[FcurrentIndex].style.opacity = "1";
        FcurrentIndex = i;

    }
});



let photos = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
];

let PcurrentIndex = 0;
Prev.style.opacity = "0.4";


Next.addEventListener('click', () => {
    PcurrentIndex++;
    if (PcurrentIndex > photos.length - 1) {
        PcurrentIndex = photos.length - 1;
    }
    FBigimg.src = photos[PcurrentIndex];

    if (PcurrentIndex === photos.length - 1) {
        Next.style.opacity = "0.4";
    }
    Prev.style.opacity = "1";

    FIms[FcurrentIndex].style.border = "none";
    FIms[FcurrentIndex].style.opacity = "1";


});

Prev.addEventListener('click', () => {
    PcurrentIndex--;
    if (PcurrentIndex < 0) {
        PcurrentIndex = 0;
    }
    FBigimg.src = photos[PcurrentIndex];
    if (PcurrentIndex === 0) {
        Prev.style.opacity = "0.4";
    }

    Next.style.opacity = "1";

    FIms[FcurrentIndex].style.border = "none";
    FIms[FcurrentIndex].style.opacity = "1";

});

Before.style.opacity = "0.5";

After.addEventListener('click', () => {
    PcurrentIndex++;
    if (PcurrentIndex > photos.length - 1) {
        PcurrentIndex = photos.length - 1;
    }
    Bigimg.src = photos[PcurrentIndex];

    if (PcurrentIndex === photos.length - 1) {
        After.style.opacity = "0.5";
    }
    Before.style.opacity = "1";

});

Before.addEventListener('click', () => {
    PcurrentIndex--;
    if (PcurrentIndex < 0) {
        PcurrentIndex = 0;
    }
    Bigimg.src = photos[PcurrentIndex];
    if (PcurrentIndex === 0) {
        Before.style.opacity = "0.5";
    }

    After.style.opacity = "1";

});



Menu.addEventListener('click', () => {
    Navlink.style.left = "0";
});

Times.addEventListener('click', () => {
    Navlink.style.left = "-70%";
});