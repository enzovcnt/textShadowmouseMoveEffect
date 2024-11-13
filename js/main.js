const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;


function shadow(e) {
    const { offsetWidth: width, offsetHeight: heights } = hero;
    let { offsetX: x, offsetY: y } = e;

    console.log(this, e.target);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7)`;


}

hero.addEventListener('mousemove', shadow);