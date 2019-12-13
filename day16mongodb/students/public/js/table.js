$(document).ready(function() {
    // $("tbody  a").click(function(e) {
    //     let a=$(this).index
    //     alert("点击了我")
    // });
    $("a").on("click", function() {
        let index = $("a").index(this)
        let id = $("a").prop("id")
            // 获取自定义id

        $.ajax({
            type: "post",
            url: "http://localhost:3000/del",
            data: { id: id },
            dataType: "json",
            // 
            success: function(response) {
                console.log(response);
                alert("成功")

            },
            error: function() {
                $("a").parent().parent()[index].remove()
            }

        });


    });
});