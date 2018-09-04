exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('forumComments')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('forumComments').insert([
				{
					id: 1,
					user_id: 2,
					post_id: 1,
					content: 'forumcomment1content',
					image_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				},
				{
					id: 2,
					user_id: 3,
					post_id: 2,
					content: 'forumcomment2content',
					image_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				},
				{
					id: 3,
					user_id: 2,
					post_id: 3,
					content: 'forumcomment3content',
					image_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				},
				{
					id: 4,
					user_id: 1,
					post_id: 3,
					content: 'forumcomment4content',
					image_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				}
				// {
				// 	id: 5,
				// 	user_id: 4,
				// 	post_id: 5,
				// 	content: 'forumcomment5content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 6,
				// 	user_id: 5,
				// 	post_id: 6,
				// 	content: 'forumcomment6content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 7,
				// 	user_id: 8,
				// 	post_id: 3,
				// 	content: 'forumcomment4content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 8,
				// 	user_id: 5,
				// 	post_id: 9,
				// 	content: 'forumcomment5content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 9,
				// 	user_id: 6,
				// 	post_id: 3,
				// 	content: 'forumcomment6content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 10,
				// 	user_id: 8,
				// 	post_id: 3,
				// 	content: 'forumcomment10content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 11,
				// 	user_id: 8,
				// 	post_id: 4,
				// 	content: 'forumcomment11content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 12,
				// 	user_id: 8,
				// 	post_id: 8,
				// 	content: 'forumcomment12content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 13,
				// 	user_id: 8,
				// 	post_id: 6,
				// 	content: 'forumcomment13content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 14,
				// 	user_id: 8,
				// 	post_id: 7,
				// 	content: 'forumcomment14content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// },
				// {
				// 	id: 15,
				// 	user_id: 8,
				// 	post_id: 7,
				// 	content: 'forumcomment15content',
				// 	image_path:
				//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVZBRYd91-FaURMiE2v39n3ptc1F3PiXLncVYDYiSksS4Xzo'
				// }
			]);
		});
};
