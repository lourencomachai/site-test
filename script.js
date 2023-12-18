$(()=>{
    $('nav a[href^="#"]').on('click', function(e){
      e.preventDefault();
      const id = $(this).attr("href");
      const targetOffset = $(id).offset().top;
      
      $('html, body').animate({
        scrollTop: targetOffset-20
      }, 1000);
    })
  })