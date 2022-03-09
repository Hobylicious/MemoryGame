function cardClicked(e) {
    const target = e.currentTarget;
    console.log(e.target)
    target.className = target.className.replace('hiding', '').trim();

}