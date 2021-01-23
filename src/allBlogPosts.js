import postMap from "./posts/*.mdx";

const posts = [];

for (const [slug, {metadata, default: Body}] of Object.entries(postMap)) {
	const { title, hidden } = metadata;
    const [_, yearStr, monthStr, dayStr, id] = slug.match(/^(\d+)-(\d+)-(\d+)-(.+)$/);
	const year = Number(yearStr);
	const month = Number(monthStr);
	const day = Number(dayStr);

    posts.push({
		slug,
		title,
		hidden,
		id,
		Body,
		date: new Date(year, month - 1, day),
	});
}

posts.sort((a, b) => {
	if (a.date < b.date) {
		return 1;
	} else {
		return -1;
	}
});

export default posts;
