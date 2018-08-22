exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('programmingLanguages').del()
        .then(function() {
            // Inserts seed entries
            return knex('programmingLanguages').insert([{
                    id: 1,
                    language: 'Blockchain'
                },
                {
                    id: 2,
                    language: 'Python'
                },
                {
                    id: 3,
                    language: 'SQL'
                },
                {
                    id: 4,
                    language: 'Machine Learning'
                },
                {
                    id: 5,
                    language: 'HTML/CSS'
                },
                {
                    id: 6,
                    language: 'JavaScript'
                },
                {
                    id: 7,
                    language: 'TypeScript'
                },
                {
                    id: 8,
                    language: 'React'
                },
                {
                    id: 9,
                    language: 'Angular'
                },
                {
                    id: 10,
                    language: 'Node.js'
                },
                {
                    id: 11,
                    language: 'Java'
                },
                {
                    id: 12,
                    language: 'Linus'
                },
                {
                    id: 13,
                    language: 'XML'
                },
                {
                    id: 14,
                    language: 'C++'
                },
                {
                    id: 15,
                    language: 'C#'
                },
                {
                    id: 16,
                    language: 'PHP'
                },
                {
                    id: 17,
                    language: 'iOS/Swift'
                },
                {
                    id: 18,
                    language: 'Ruby/Rails'
                }
            ]);
        });
};