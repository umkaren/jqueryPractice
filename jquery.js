// Make sure the function loaded after the DOM
$(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
    
        let name = $("#name").val();
        let email = $("#email").val();
        let phoneNumber = $("#phone").val();
    
        const required = [name, email, phoneNumber];

        for (let i = 0; i < required.length; i++) {

        if (required[i] == "") {
        $("#message").html("Please Fill Out Required Fields").addClass("warning");
        $("label").eq(i).addClass("warning");
        $("input").eq(i).on("change", function() {
            $("label").eq(i).removeClass("warning");
        })
    } else {
        $("#message").html("").removeClass("warning");
        $("label").eq(i).removeClass("warning");
    }
} if (!$("label").hasClass("warning")) {
    $("#form").remove();
    $("h2").html("Thanks for your feedback!")
}
})
});