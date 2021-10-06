/**
 * Normalizes the carousel inner item heights to prevent section resizes
 *
 */
function normalizeSlideHeights() {
    $('.carousel').each(function(){
      var items = $('.carousel-item', this);
      // reset the height
      items.css('min-height', 0);
      // set the height
      var maxHeight = Math.max.apply(null, 
          items.map(function(){
              return $(this).outerHeight()}).get() );
      items.css('min-height', maxHeight + 'px');
    })
    
}

/**
 * Launches the typer span
 *
 */
function launchTyper(){
    const typer = document.getElementById('typer');
    let sheet = Typewriter.feed(typer);
    console.log(sheet);
    Typewriter.type(sheet);
}

function openMailApp(){
    window.open('mailto:haydn.hanna@gmail.com')
}

$(window).on('load',()=>{
    normalizeSlideHeights();
    launchTyper();
})

$(window).on('resize orientationchange', ()=>{
    normalizeSlideHeights();
});




