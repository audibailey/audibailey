<script>
 import Nav from '../components/Nav.svelte';
 import { fadeIn, fadeOut } from "../components/pageFade.js";
 import config from '../../content/settings.js'
 export let segment;

 function handleTop() {
     window.scrollTo(0,0);
 }

 function goFullscreen() {
     if (document.fullscreenElement) {
         document.exitFullscreen();
     } else {
         document.documentElement.requestFullscreen();
     }
 }

 function showBackground() {
     document.getElementById('sapper').style.display = "none";
     setTimeout(function(){
         document.getElementById('sapper').style.display = "unset";
     }, 5000);
 }
</script>
<style>

 /**
  * Sidebar CSS
  */
 #sidebar {
     background-color: #FFF;
     height: 150px;
 }
 
 #right-sidebar {
     background-color: #FFF;;
 }

 @media (min-width: 768px) {
     #sidebar {
         position: fixed;
         top: 0;
         bottom: 0;
         width: 320px;
         height: 100vh;
         padding-right: 0;
         padding-top: 30px;
         border-right: 2px solid #1d1d1d;
     }

     .bitmoji {
         border-radius: 100px;
         display: block;
         width: 50%;
         margin-right: auto;
         margin-bottom: 40px;
         left: 50%;
         margin-left: auto;
     }

     .bio-text {
         text-align: center;
     }

     .mobile-menu {
         display: none;
     }

     #right-sidebar {
         position: fixed;
         top: 0;
         bottom: 0;
         right: 0;
         width: 50px;
         height: 100vh;
         padding-right: 0;
         padding-top: 30px;
         border-left: 2px solid #1d1d1d;
     }

     .content {
         margin: 7% auto;
         float: unset;
     }

     .show-mobile {
         display: none;
     }
 }

 @media (max-width: 767px) {
     .bitmoji {
         border-radius: 100px;
         display: block;
         width: 50px;
         margin-left: auto;
         margin-right: auto;
         margin-top: 50%;
     }

     .mobile-menu {
         display: block;
         width: 100%;
         height: 100%;
         margin-left: 50%;
     }

     #sidebar {
         padding: 15px;
         top: 0;
         position: fixed;
         z-index: 1;
         border-bottom: 2px solid #1d1d1d;
     }

     .hide-mobile {
         display: none;
     }

     .show-mobile {
         display: unset;
     }

     .content {
         margin-top: 60%;
         margin-bottom: 80px;
         margin-left: auto;
         margin-right: auto;
     }

     .bio-text {
         margin: 0 auto;
     }
 }

 .app-bar {
     bottom: 0;
     position: fixed;
     width: 100%;
     padding: 0 20px;
     background-color: #fff;
     border-top: 2px #1d1d1d solid;
 }


 /**
  * Content CSS
  */
 @media (min-width: 768px) {
     #content {
         margin-left: 320px;
         margin-right: 50px;
     }
 }

 i.material-icons {
     cursor: pointer;
 }

</style>
<div id="sidebar">
    <div class="">
        <div class="mui-row ">
            <div class="mui-col-md-10 mui-col-xs-2 mui-col-md-offset-1">
                <a href="/"><img class="bitmoji" src="../sc-bitmoji.png" alt="Bitmoji image"></a>
                <br>
                <div class="mobile-menu">
                    <div class="mini-dropdown">
                        <button class="mui-btn mui-btn--primary" data-mui-toggle="dropdown" style="padding: 0 6px;"><span class="mui-caret"></span></button>
                        <ul class="mui-dropdown__menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="projects">Projects</a></li>
                            <li><a href="resume">Resume</a></li>
                            <li><a href="about">About Me</a></li>
                            <li><a href="contact">Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br>
            <div class="mui-col-md-10 mui-col-xs-10 mui-col-md-offset-1">
                <div class="mui--text-dark-secondary mui--text-title bio-text">
                    {config.title}
                </div>
                <div class="mui--text-dark-secondary mui--text-subhead bio-text">
                    {config.subtitle}
                </div>
                <hr  class="hide-mobile">
                <div class="mui-row">
                    <div class="mui-col-md-4 mui-col-xs-4">
                        <a href="{config.github}"><img src="../github.png" alt="Github Logo" width="50px" height="50px"></a>
                    </div>
                    <div class="mui-col-md-4 mui-col-xs-4">
                        <a href="{config.linkedin}"><img src="../linkedin.png" alt="LinkedIn Logo" width="50px" height="50px"></a>
                    </div>
                    <div class="mui-col-md-4 mui-col-xs-4">
                        <a href="{config.twitter}"><img src="../twitter.jpeg" alt="Twitter Logo" width="50px" height="50px"></a>
                    </div>
                </div>
                <hr class="hide-mobile">
                <div class="hide-mobile">
                    <Nav {segment}/>
                </div>
            </div>
            <div class="mui-col-md-10 mui-col-xs-10 mui-col-md-offset-1" style="position: absolute; bottom: 0; margin-bottom: 10%;">
                <div class="hide-mobile side-footer mui--text-dark-secondary mui--text-subhead bio-text">
                    {config.footer}
                </div>
            </div>
        </div>
    </div>
</div>
<div id="content" class="mui-container-fluid" style="height: 100vh;">
    <div class="mui-row">
        <div class="mui-col-md-10 content">
            <main in:fadeIn out:fadeOut>
                <slot></slot>
            </main>

            <div class="mui-panel footer">
                Background Photo Credit: <a href="https://unsplash.com/photos/vflFGBYCiO8">Michael Glass</a> <a href="https://unsplash.com/@the_odyssey_image">(@the_odyssey_image on Unsplash)</a>
            </div>
        </div>
    </div>
</div>

<div class="mui-appbar show-mobile app-bar">
    <table width="90%">
        <tr style="vertical-align: middle;">
            <td class="mui--appbar-height"><a href="/"><i class="material-icons mui--text-dark-secondary">home</i></a></td>
            <td class="mui--appbar-height"><a href="search"><i class="material-icons mui--text-dark-secondary">search</i></a></td>

            <td class="mui--appbar-height" align="right"><i class="material-icons mui--text-dark-secondary" on:click={handleTop}>keyboard_arrow_up</i></td>
            <td class="mui--appbar-height" align="right"><i class="material-icons mui--text-dark-secondary" on:click={showBackground}>pageview</i></td>
        </tr>
    </table>
</div>

<div id="right-sidebar" class="hide-mobile">
    <div class="mui-row" style="margin: 0px">
        <div class="mui-col-md-10 mui-col-xs-2 bio-text">
            <a href="/"><i class="material-icons">home</i></a>
        </div>
        <br class="hide-mobile">
        <br class="hide-mobile">
        <div class="mui-col-md-10 mui-col-xs-2 bio-text">
            <a href="search"><i class="material-icons">search</i></a>
        </div>
    </div>

    <div class="mui-row" style="bottom: 5%; margin: 0; position: absolute;">
        <div class="mui-col-md-10 mui-col-xs-2 bio-text">
            <i class="material-icons" on:click={goFullscreen}>fullscreen</i>
        </div>
        <br class="hide-mobile">
        <br class="hide-mobile">
        <div class="mui-col-md-10 mui-col-xs-2 bio-text">
            <i class="material-icons" on:click={handleTop}>keyboard_arrow_up</i>
        </div>
        <br class="hide-mobile">
        <br class="hide-mobile">
        <div class="mui-col-md-10 mui-col-xs-2 bio-text">
            <i class="material-icons" on:click={showBackground}>pageview</i>
        </div>
    </div>
</div>
