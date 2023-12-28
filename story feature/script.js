var arr = [
    {
        dp: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1698414461871-a01e73316c2a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1698428058528-d4e2150596a0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1698231078302-c6c3715a84a9?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fHww", story: "https://plus.unsplash.com/premium_photo-1695558759174-1d78171cbdd0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsfGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1696826147932-6656c33ce5a7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsfGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D"
    },

]


var clutter = ""
var stories = document.querySelector(".stories")
arr.forEach(function (elem, idx) {

    clutter += `

<div class="story">
<img id=${idx} src=${elem.story}
    alt="" class="image">

</div>

`


})


stories.innerHTML = clutter



stories.addEventListener("click", function (dets) {


    document.querySelector("#open").style.display = "block";
    document.querySelector("#open").style.transition = 'all 1s ease-in 0.9s'

    document.querySelector("#open").style.backgroundImage = `url(${arr[dets.target.id].dp})`

    setTimeout(function () {
        document.querySelector("#open").style.display = "none";

    }, 2500)


})

