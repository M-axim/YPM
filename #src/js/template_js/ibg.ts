function ibg(){

    let ibg: NodeListOf<HTMLOptionElement | HTMLOptGroupElement> = document.querySelectorAll(".ibg");
    for (let i: number = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();