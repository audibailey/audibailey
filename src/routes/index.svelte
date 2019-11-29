<script context="module">
 export function preload({ params, query }) {
	 return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		 return { posts };
	 });
 }
</script>

<script>
 export let posts;
</script>

<style>

 @media (min-width: 769px) {
     .media {
         display: flex;
         align-items: center;
     }

     .media-figure {
         margin-right: 1em;
         border-radius: 100%;
         overflow: hidden;
     }

     .media-body {
         flex: 1;
     }
 }

 @media (max-width: 768px) {
     .media {
         position: relative;
         background-color: #fff;
     }

     .media-figure {
         width: 100%;
         height: 100%;
     }

     .media-body {
         padding: 25px 25px 0;
     }
 }
</style>

<svelte:head>
	<title>Audi Bailey</title>
</svelte:head>

{#each posts as post}
    <div class="mui-panel">
        <div class="media">
            <img src="{post.imgsrc}" alt="placeholder" height="100px" class="media-figure">


            <div class="media-body">
                <a href="blog/{post.slug}">
                    <div class="mui--text-dark mui--text-title">{post.title}</div>
                    <br>
                    <div class="mui--text-dark mui--text-subhead">{post.description}</div>
                    <br>
                </a>
                <a href="{post.authorurl}">
                    <div class="mui--text-dark mui--text-caption">By: {post.author} on {post.pubdate}</div>
                </a>
            </div>
        </div>
    </div>
    <br>
{/each}
