

// $(document).ready(function(){
//     $(".here").waypoint(function(){
//         console.log("here");
//     })
// })

$(document).ready(function () {
    $(".here").waypoint(function (direction) {
        $(".here").addClass("animate__animated animate__bounceInLeft");
    }, {
        offset: '75%' // Trigger when 75% of the element is visible
    });
});

$(document).ready(function () {
    $(".experience-effect1").waypoint(function (direction) {
        $(".experience-effect1").addClass("animate__animated animate__fadeInDown");
    }, {
        offset: '75%' // Trigger when 75% of the element is visible
    });
});

$(document).ready(function () {
    $(".experience-effect2").waypoint(function (direction) {
        $(".experience-effect2").addClass("animate__animated animate__fadeInDown");
    }, {
        offset: '75%' // Trigger when 75% of the element is visible
    });
});

$(document).ready(function () {
    $(".project1").waypoint(function (direction) {
        $(".project1").addClass("animate__animated animate__fadeInLeft");
    }, {
        offset: '75%' // Trigger when 75% of the element is visible
    });
});

$(document).ready(function () {
    $(".project2").waypoint(function (direction) {
        $(".project2").addClass("animate__animated animate__fadeInRight");
    }, {
        offset: '75%' // Trigger when 75% of the element is visible
    });
});

$(document).ready(function () {
    $(".footer").waypoint(function (direction) {
        $(".footer").addClass("animate__animated animate__fadeInUp");
    }, {
        offset: '75%' // Trigger when 75% of the element is visible
    });
});




