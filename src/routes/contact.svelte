<style>

</style>
<svelte:head>
	<title>Contact Me | Audi Bailey</title>
</svelte:head>

<div class="mui-panel">
    <form class="mui-form" method="POST" data-netlify="true" name="contact">
        <legend>Contact Me</legend>
        <div class="mui-textfield mui-textfield--float-label">
            <input type="text"/>
            <label>Name</label>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
            <input type="text"/>
            <label>Email</label>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
            <textarea></textarea>
            <label>Message</label>
        </div>
        <button type="submit" class="mui-btn mui-btn--raised">Submit</button>
    </form>
</div>
