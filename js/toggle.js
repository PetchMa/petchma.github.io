function myFunction(name, button) {
    var x = document.getElementById(name);

    if (x.style.display != "none") {
    x.style.display = "none";
    document.getElementById(button).innerHTML =  ' <B style="font-size: 22px;"><i>' + name+ '</i></B>  <img src="img/up.PNG" style="width: 10px">';

    }else {
    x.style.display = "block";
    document.getElementById(button).innerHTML = ' <B style="font-size: 22px;"><i>' + name+ '</i></B>  <img src="img/down.PNG" style="width: 10px">';

    }
}