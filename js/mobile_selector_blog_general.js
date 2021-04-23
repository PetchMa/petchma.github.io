// I'm borrowing the MDN doc notation here: "mql" stands for "media query list".
const Component1 = `
<div class="col-md-3 ">
                <img class="stamp" src="./img/name.png" >
                <h1 class="menu ">
                <b>
                    <a href="./index.html" >
                        <b>
                        About
                    </b>
                    </a>
                </h1>
                <h1 class="menu ">
                <b>
                    <a href="./projects.html" >
                        <b>
                 Projects
                </b>
                </a>

                </h1 >
                <h1 class="menu">
                <b>

                    <a href="./notes.html" >
                        <b>
                         Notes
                    </b>
                    </a>
                </b>
                </h1>
                <h1 class="menu">
                    <b>
                        <a href="./blog.html" style="color:  #b80707 !important;  ;">
                            <b>
                         -Blog 
                    </b>
                        </a>
                    </b>
                </h1>
                </div>
                <div class="col-md-8 desktop">
                <span style="display: inline-block">
                <div class="row mobile">                    
                    <img class ="profile_pic" src="./img/profile_circle.png" >
                    <span class="peterma">
                        Peter Ma
                    </span>
                    </span>
                </div>
            </div>
`
const Component2 = `
<div class="row" style="padding-top:5%;">
<div class="right_part">
<img class="stamp" src="./img/name.png" >
    <h1 class="menu ">
    <b>
        <a href="./index.html" >
            <b>
            About
        </b>
        </a>
    </h1>
    <h1 class="menu ">
    <b>
        <a href="./projects.html "  >
            <b>
       -Projects
    </b>
    </a>

    </h1 >
    <h1 class="menu">
        <b>
            <a href="./notes.html" >
                <b>
                   Notes
            </b>
            </a>
        </b>
    </h1>
    <h1 class="menu">
        <b>
            <a href="./blog.html" style="color:  #b80707 !important;  ;">
                <b>
                -Blog 
        </b>
            </a>
        </b>
    </h1>
</div>
<div class="left_part">
    <img class ="profile_pic" src="./img/profile_circle.png" >


        </div>


    <p class="peterma" style="text-align:center;">
        Peter Ma
    </p>
   </div>
`
const About1 = `

<p>
    My research specifically explores how deep neural nets like <a href="https://openreview.net/forum?id=Sy2fzU9gl">Disentangled \\(\\beta- \\)VAE's</a> can learn astrophysical parameters and signal morphology to help 
    characterize events by analyzing their latent feature represenations. Here's a visualization of the learnt 
    latent features of a main sequence star <a href="https://eddb.io/system/bodies/7461">\\(\\text{HIP34024}\\)!</a>
</p>
<div class="row">
    <div class="col-md-8">
        <div class="plot"id='myDiv' style="height: 300px;"><!-- Plotly chart will be drawn inside this DIV --></div>

    </div>
    <div class="col-md-4">
        
    <br>
    </br>
     <br>
    </br>
     <br>
    </br>

        <p style="color:#5e5e5e; font-size: 10px;">
            Click around and see the structure of features learned by the neural network. The deep neural net was able to 
            learn doppler drifiting signals and the shape of signals found in radio spectrograms.  
        </p>
    </div>
</div>
`


function setNavInnerHTML(name){

    document.getElementById('nav').innerHTML = name

};
function setAboutInnerHTML(name){

    document.getElementById('about').innerHTML = name

};
// const setNavInnerHTML = (html) => {
//   const nav = document.querySelector('nav');
//   nav.innerHTML = html;
// };


const mql = window.matchMedia('(max-width: 900px)');

let mobileView = mql.matches;

if (mobileView) {
  setNavInnerHTML(Component2);
  setAboutInnerHTML(About2);
} else {
  setNavInnerHTML(Component1);
  setAboutInnerHTML(About1);
}

