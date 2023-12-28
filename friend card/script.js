var addfriend = document.querySelector(".add")
var removefriend = document.querySelector(".remove")

var flag = 0;
addfriend.addEventListener("mousemove", function () {
    addfriend.addEventListener("mouseleave", function () {
        addfriend.style.backgroundColor = "#6cff74";



    })

    if (flag == 0) {
        addfriend.style.backgroundColor = "Darkgreen";
        addfriend.addEventListener("click", function () {
            addfriend.innerHTML = "added";
            removefriend.innerHTML = "Remove";
            ease = "Power4"
            flag = 1;


        })
    }



    else {

        removefriend.addEventListener("mousemove", function () {


            removefriend.addEventListener("click", function () {
                addfriend.innerHTML = "Add friend";
                removefriend.innerHTML = "Removed";

                ease = "Power4"
                flag = 0;


            })




        })




    }








})