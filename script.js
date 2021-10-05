const typer = document.getElementById('typer');
let sheet = Typewriter.feed(typer);
console.log(sheet);
Typewriter.type(sheet);

/* function normalizeCarousels(){
    var carousels = document.getElementsByClassName('carousel')
    
    for(var i=0;i<carousels.length;i++){
        var tallestHeight=0;
        var currentCarousel = carousels[i];
        var carouselItems = currentCarousel.getElementsByClassName('card');
        
        for(var j=0;j<carouselItems.length;j++){
            var itemHeight = carouselItems[j].getBoundingClientRect().height
            console.log(itemHeight);
            if(itemHeight>tallestHeight)tallestHeight=itemHeight;
            console.log(`The tallest element is ${tallestHeight}`)
        }
    console.log('Done checking this carousel')
        for(var k=0;k<carouselItems.length;k++){
            carouselItems[k].style.minHeight=`${tallestHeight}px`
        }
    }
} */

function normalizeSlideHeights() {
    $('.carousel').each(function(){
      var items = $('.carousel-item', this);
      var cards = $('.card', this);
      // reset the height
      items.css('min-height', 0);
      cards.css('min-height',0);
      // set the height
      var maxHeight = Math.max.apply(null, 
          items.map(function(){
              return $(this).outerHeight()}).get() );
      items.css('min-height', maxHeight + 'px');

      var maxCardHeight = Math.max.apply(null, 
        cards.map(function(){
            return $(this).outerHeight()}).get() );
    cards.css('min-height', maxCardHeight + 'px');
    })
    
}

$(window).on(
    'load resize orientationchange', 
    normalizeSlideHeights);
