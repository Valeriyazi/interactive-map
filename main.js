$(".braslav").hover (
    function() {
      $(".description").html($(this).attr("description-data"));    
      $(".description").fadeIn();//отображение
    },
    function() {
        $(".description").fadeOut();
    }
)


    