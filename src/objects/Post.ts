export interface Post {
	id: string;
	title: string;
	content: string;
	img?: string;
}

export const postsMock: Post[] = [
	{
		id: '1',
		title: 'Long Long Long Long Long Long Long Long Title 1',
		content:
			'Everybody is a critic. Every developer has both been on the receiving and the giving end of criticism. It is a vital part of our job, be it as code review, comments on social networks like this one or during a retrospective. So let us have a look at both sides of criticism:',
		img: 'https://via.placeholder.com/1000x500'
	},
	{
		id: '2',
		title: 'Title 2',
		content:
			'Imagine you have built your own beautiful website using HTML, CSS, JS, or anything else then deployed it on Heroku. Have you ever wondered how to get your website to the next level ? For example you want to change your application domain from yoursite.herokuapp.com to something else?\nImagine you have bought a brand new domain and decide to keep your existing or new application hosted on Heroku but you don’t know how to use domain with Heroku. You also want to use HTTPS on it but don’t know how ?',
		img: 'https://via.placeholder.com/1000x500'
	},
	{
		id: '3',
		title: 'Title 3',
		content:
			'Everybody is a critic. Every developer has both been on the receiving and the giving end of criticism. It is a vital part of our job, be it as code review, comments on social networks like this one or during a retrospective. So let us have a look at both sides of criticism:',
		img: 'https://via.placeholder.com/1000x500'
	},
	{
		id: '4',
		title: 'Title 4',
		content:
			'Everybody is a critic. Every developer has both been on the receiving and the giving end of criticism. It is a vital part of our job, be it as code review, comments on social networks like this one or during a retrospective. So let us have a look at both sides of criticism:',
		img: 'https://via.placeholder.com/1000x500'
	}
];
