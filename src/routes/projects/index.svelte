<script context="module">
 export function preload({ params, query }) {
	 return this.fetch(`projects.json`).then(r => r.json()).then(posts => {
		 return { posts };
	 });
 }
</script>

<script>

 function updateDisplay(event) {
     if (event.currentTarget.querySelector('div').style.display == "inline-block") {
         event.currentTarget.querySelector('div').style.display = "none";
         event.currentTarget.querySelector('img').style.visibility = "visible";
     } else {
         event.currentTarget.querySelector('div').style.display = "inline-block";
         event.currentTarget.querySelector('img').style.visibility = "hidden";
     }
 }
 export let posts;
</script>

<style>

 .media-body {
	 position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
	 color: #1d1d1d;
     display: none;
 }

 .item {
     background: #eee;
     cursor: pointer;
 }

 .container {
     display: flex;
     flex-wrap: wrap;
     align-content: space-between;
     line-height: 0;
     column-count: 3;
 }

 @media (max-width: 1023px) {
     .container {
         flex-direction: column;
     }

     .item {
         width: 100%;
         position: relative
     }

     .title {
         font-size: 12px;
         line-height: 1;
     }

     .tags {
         font-size: 10px;
         line-height: 1;
     }
 }

 @media (width: 1024px) {
     .item {
         width: 45%;
         position: relative;
     }
     
     .title {
         font-size: 12px;
         line-height: 1;
     }

     .tags {
         font-size: 10px;
         line-height: 1;
     }
 }

 @media (min-width: 1025px) {
     .item {
         width: 33.333%;
         position: relative;
     }

     .title {
         font-size: 12px;
         line-height: 1;
     }

     .tags {
         font-size: 10px;
         line-height: 1;
     }
 }

 @media (min-width: 1441px) {
     .item {
         width: 33.333%;
         position: relative;
     }

     .title {
         font-size: 22px;
         line-height: 1;
     }

     .tags {
         font-size: 16px;
         line-height: 1;
     }
 }

</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="mui-panel" style="text-align: center;">
	<h1>Projects</h1>
    <hr>
	<div class="container">
		{#each posts as post}
			<div class="item" on:click={updateDisplay}>
				<img src="{post.imgsrc}" alt="placeholder" class="media-figure" style="width: 100%">
				<div class="media-body">
					<a href="projects/{post.slug}">
						<div class="mui--text-dark title">{post.title}</div>
                    </a>
                    <br style="line-height: 1;">
                    <div class="mui--text-dark tags"><b>Tags:</b></div>
		            <div class="mui--text-dark tags">{post.tags}</div>
			    </div>
			</div>
		{/each}
	</div>
</div>
