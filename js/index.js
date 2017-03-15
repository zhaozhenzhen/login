/**
 * Created by ³¯Ñô on 2017/3/13.
 */

$("#editor").on("click",function(){
    //alert($(this).nextAll().size())
    $(this).toggleClass('add');


    if($(this).attr('class')){
        $(this).nextAll("button").append("<span class='dele'>X</span> ").click(function(){
            $(this).remove()
        })
        $(this).nextAll("input").show()
        $(this).nextAll("span").show()
        $(this).nextAll("span").click(function(){
            $(".input").before("<button>"+$(this).nextAll('input').val()+"</button>")

        })
    }else{
        $(this).nextAll("button").children().remove()
        $(this).nextAll("span").hide()
        $(this).nextAll("input").hide()
    }

})

