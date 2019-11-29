<script>
 export let segment;
</script>

<style>
 #sidedrawer ul {
     list-style: none;
     text-align: center;
     padding-inline-start: 0px;
 }

 .selected {
     text-decoration: underline;
 }
</style>

<div id="sidedrawer">
    <nav>
        <ul>
            <li><a rel=prefetch href="/" class='{segment === undefined ? "selected" : ""}' >Home</a></li>
            <li><a rel=prefetch href="projects" class='{segment === "projects" ? "selected" : ""}' >Projects</a></li>
            <li><a href="about" class='{segment === "about" ? "selected" : ""}' >About Me</a></li>
            <li><a href="resume">Resume</a></li>
            <li><a href="contact" class='{segment === "contact" ? "selected" : ""}'>Contact Me</a></li>
        </ul>
    </nav>
</div>
