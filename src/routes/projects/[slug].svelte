<script context="module">
 export async function preload({ params, query }) {
	 // the `slug` parameter is available because
	 // this file is called [slug].svelte
	 const res = await this.fetch(`projects/${params.slug}.json`);
	 const data = await res.json();

	 if (res.status === 200) {
		 return { post: data };
	 } else {
		 this.error(res.status, data.message);
	 }
 }
</script>

<script>
 export let post;
</script>

<style>
 /*
	By default, CSS is locally scoped to the component,
	and any unused styles are dead-code-eliminated.
	In this page, Svelte can't know which elements are
	going to appear inside the {{{post.html}}} block,
	so we have to use the :global(...) modifier to target
	all elements inside .content
  */
 .content :global(h2) {
	 font-size: 1.4em;
	 font-weight: 500;
 }

 .content :global(pre) {
	 background-color: #f9f9f9;
	 box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
	 padding: 0.5em;
	 border-radius: 2px;
	 overflow-x: auto;
 }

 .content :global(pre) :global(code) {
	 background-color: transparent;
	 padding: 0;
 }

 .content :global(ul) {
	 line-height: 1.5;
 }

 .content :global(li) {
	 margin: 0 0 0.5em 0;
 }

 .heading {
     margin-bottom: 0px;
 }

 .image {
     line-height: 0px;
 }
</style>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<div class="mui-panel heading">
	<h1>{post.metadata.title}</h1>
</div>

<div class="image">
    <img src="{post.metadata.featured}" alt="Featured Image" width="100%">
</div>
<div class="mui-panel contentbox">
    <div class='content'>
	    {@html post.html}
    </div>
</div>
