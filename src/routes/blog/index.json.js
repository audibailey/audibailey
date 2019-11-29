import get_posts from './_posts.js';
const contents =  JSON.stringify(get_posts().map(post => {
	return {
		title: post.metadata.title,
		slug: post.slug,
		pubdate: post.metadata.dateString,
		description: post.metadata.description,
		author: post.metadata.author,
		authorurl: post.metadata.authorURL,
		imgsrc: post.metadata.featured,
		tags: post.metadata.tags.join(" ")
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
