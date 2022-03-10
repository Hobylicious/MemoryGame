let clickedCard = null;

//card click = flip card/remove hidden
function cardClicked(e) {
    const target = e.currentTarget;
    // console.log(e.target)
    if (target === clickedCard ||
        target.className.includes('clicked')) {
        return;
    }
    target.className = target.className.replace('hiding', '').trim();
    target.className += ' clicked';

    if (!clickedCard) {
        //if a card hasnt been clicked track card
        target.className = target.className.replace('hiding', '').trim();
        clickedCard = target;
    }
    else if (clickedCard) {
        //if a card HAS BEEN CLICKED check to see if next card matches
        //if card matches, leave them showing
        if (clickedCard.getAttribute('data-color') === target.getAttribute('data-color')) {
            console.log('card ARE equal')
            clickedCard = null;
        }
        else {
            //if they are NOT matching, flip them back
            console.log('cards are NOT equal')
            setTimeout(() => {
                clickedCard.className = clickedCard.className.replace('clicked', '').trim() + 'hiding';
                target.className = target.className.replace('clicked', '').trim() + 'hiding';
                clickedCard = null;
            }
                , 1000)
        }
    }
}


//if next card DOES NOT match, make both cards hidden again
//if card DOES match, prevent cards from being clicked/hidden again