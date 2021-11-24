// portfolio
$(document).ready(function() {
    $("#Design-logo").click(function() {
        $("#DesignText").show();
        $("#Design-logo").hide();
        $(".design, #DesignText").click(function() {
            $("#Design-logo").show();
            $("#DesignText").hide();
        });
    });
    $("#Development-icon").click(function() {
        $("#DevelopmentText").show();
        $("#Development-icon").hide();
        $(".development, #DevelopmentText").click(function() {
            $("#DevelopmentText").hide();
            $("#Development-icon").show();
        });
    });
    $("#Products-image").click(function() {
        $("#ProductsText").show();
        $("#Products-image").hide();
        $(".products, #ProductsText").click(function() {
            $("#Products-image").show();
            $("#ProductsText").hide();
        });
    });
});

$("#work1").hover(
    function() {
        $(".Name").slideDown(2000);
    },

);