
export const genreOptions = [
    { label: 'All', value: 'All' },
    { label: 'Action', value: 'Action' },
    { label: 'Sci-Fi', value: 'Sci-Fi' },
    { label: 'Thriller', value: 'Thriller' },
    { label: 'Drama', value: 'Drama' },
];

  // Sorting order options
export const sortOptions = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
];

export const filterAndSortData = (data, genre, sortOrder) => {
    let filteredData = genre !== 'All' ? data.filter(item => item.genre.toLowerCase().includes(genre.toLowerCase())) : data;

    if (sortOrder === 'asc') {
        return filteredData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'desc') {
        return filteredData.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filteredData;
};

export const dummyMovies = [
    {
      "id": 1,
      "title": "The Dark Knight",
      "year": 2008,
      "genre": `"Action", "Crime", "Drama"`,
      "director": "Christopher Nolan",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 9.0,
      "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "image": "/images/movie1.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 2,
      "title": "Inception",
      "year": 2010,
      "genre": `"Action", "Adventure", "Sci-Fi"`,
      "director": "Christopher Nolan",
      "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      "rating": 8.8,
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      "image": "/images/movie2.webp"
    },
    {
      "id": 3,
      "title": "Interstellar",
      "year": 2014,
      "genre": `"Adventure", "Drama", "Sci-Fi"`,
      "director": "Christopher Nolan",
      "actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "rating": 8.6,
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "image": "/images/movie3.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 4,
      "title": "The Matrix",
      "year": 1999,
      "genre": `"Action", "Sci-Fi"`,
      "director": "Lana Wachowski, Lilly Wachowski",
      "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "rating": 8.7,
      "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "image": "/images/movie4.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 5,
      "title": "Pulp Fiction",
      "year": 1994,
      "genre": `"Crime", "Drama"`,
      "director": "Quentin Tarantino",
      "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      "rating": 8.9,
      "description": "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
      "image": "/images/movie5.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 6,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "director": "Frank Darabont",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 9.3,
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "image": "/images/movie6.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 2,
      "title": "Inception",
      "year": 2010,
      "genre": `"Action", "Adventure", "Sci-Fi"`,
      "director": "Christopher Nolan",
      "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      "rating": 8.8,
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      "image": "/images/movie2.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 1,
      "title": "The Dark Knight",
      "year": 2008,
      "genre": `"Action", "Crime", "Drama"`,
      "director": "Christopher Nolan",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 9.0,
      "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "image": "/images/movie1.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 3,
      "title": "Interstellar",
      "year": 2014,
      "genre": `"Adventure", "Drama", "Sci-Fi"`,
      "director": "Christopher Nolan",
      "actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "rating": 8.6,
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "image": "/images/movie3.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 4,
      "title": "The Matrix",
      "year": 1999,
      "genre": `"Action", "Sci-Fi"`,
      "director": "Lana Wachowski, Lilly Wachowski",
      "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "rating": 8.7,
      "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "image": "/images/movie4.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 5,
      "title": "Pulp Fiction",
      "year": 1994,
      "genre": `"Crime", "Drama"`,
      "director": "Quentin Tarantino",
      "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      "rating": 8.9,
      "description": "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
      "image": "/images/movie5.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 6,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "director": "Frank Darabont",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 9.3,
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "image": "/images/movie6.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 1,
      "title": "The Dark Knight",
      "year": 2008,
      "genre": `"Action", "Crime", "Drama"`,
      "director": "Christopher Nolan",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 9.0,
      "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "image": "/images/movie1.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 2,
      "title": "Inception",
      "year": 2010,
      "genre": `"Action", "Adventure", "Sci-Fi"`,
      "director": "Christopher Nolan",
      "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      "rating": 8.8,
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      "image": "/images/movie2.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 3,
      "title": "Interstellar",
      "year": 2014,
      "genre": `"Adventure", "Drama", "Sci-Fi"`,
      "director": "Christopher Nolan",
      "actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "rating": 8.6,
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "image": "/images/movie3.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 4,
      "title": "The Matrix",
      "year": 1999,
      "genre": `"Action", "Sci-Fi"`,
      "director": "Lana Wachowski, Lilly Wachowski",
      "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "rating": 8.7,
      "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "image": "/images/movie4.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 5,
      "title": "Pulp Fiction",
      "year": 1994,
      "genre": `"Crime", "Drama"`,
      "director": "Quentin Tarantino",
      "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      "rating": 8.9,
      "description": "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
      "image": "/images/movie5.webp",
      "slug": "the-dark-knight"
    },
    {
      "id": 6,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "director": "Frank Darabont",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 9.3,
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "image": "/images/movie6.webp",
      "slug": "the-dark-knight"
    }
]

export const moviePosts = [
  {
    id: 1,
    title: "The Mystic Forest",
    imageUrl: "/images/postImg.png",
    description: "A young girl stumbles upon a mystical forest filled with magical creatures. She must unravel the secrets of the forest to save her village from an ancient curse.",
    releaseDate: "2024-09-15"
  },
  {
    id: 2,
    title: "Galactic Odyssey",
    imageUrl: "/images/postImg.png",
    description: "Join Captain Zara and her crew as they embark on an epic journey across the galaxy to prevent an interstellar war that threatens to destroy the universe.",
    releaseDate: "2024-10-01"
  },
  {
    id: 3,
    title: "Echoes of the Past",
    imageUrl: "/images/postImg.png",
    description: "A historian discovers a series of ancient artifacts that transport him back in time. As he relives key moments in history, he must solve a mystery that spans centuries.",
    releaseDate: "2024-11-20"
  },
  {
    id: 4,
    title: "Shadow of the Dragon",
    imageUrl: "/images/postImg.png",
    description: "In a world where dragons once ruled, a young warrior rises to fulfill an ancient prophecy and bring peace to a land torn apart by war and betrayal.",
    releaseDate: "2025-01-05"
  },
  {
    id: 5,
    title: "Cyber Realm",
    imageUrl: "/images/postImg.png",
    description: "In a dystopian future where technology controls every aspect of life, a hacker uncovers a hidden conspiracy that could change the fate of humanity forever.",
    releaseDate: "2025-03-10"
  }
];

export const comments = [
  {
    id: 1,
    username: "JaneDoe",
    avatarUrl: "https://example.com/avatar1.jpg",
    comment:
      "This movie was fantastic! The visuals were stunning, and the storyline kept me hooked.",
    date: "2024-08-24T14:32:00Z",
    replies: [
      {
        id: 1.1,
        username: "MovieFan123",
        avatarUrl: "https://example.com/avatar4.jpg",
        comment: "I agree! The visuals were out of this world. Totally worth the watch.",
        date: "2024-08-24T15:00:00Z",
      },
      {
        id: 1.2,
        username: "CinemaLover",
        avatarUrl: "https://example.com/avatar5.jpg",
        comment: "The visuals were great, but I also loved the acting. Superb performances!",
        date: "2024-08-24T15:30:00Z",
      },
    ],
  },
  {
    id: 2,
    username: "JohnSmith",
    avatarUrl: "https://example.com/avatar2.jpg",
    comment:
      "I found the plot a bit slow, but the acting was top-notch. Worth a watch!",
    date: "2024-08-24T15:10:00Z",
    replies: [
      {
        id: 2.1,
        username: "FilmCritic",
        avatarUrl: "https://example.com/avatar6.jpg",
        comment: "I felt the same way. The acting carried the movie for me.",
        date: "2024-08-24T15:45:00Z",
      },
      {
        id: 2.2,
        username: "DramaQueen",
        avatarUrl: "https://example.com/avatar7.jpg",
        comment: "Sometimes slower plots are better! I enjoyed the pacing.",
        date: "2024-08-24T16:00:00Z",
      },
    ],
  },
  {
    id: 3,
    username: "AliceW",
    avatarUrl: "https://example.com/avatar3.jpg",
    comment:
      "Loved the soundtrack! It really added depth to the scenes. Can't wait to see it again.",
    date: "2024-08-24T16:45:00Z",
    replies: [
      {
        id: 3.1,
        username: "SoundTrackLover",
        avatarUrl: "https://example.com/avatar8.jpg",
        comment: "The soundtrack was definitely a highlight. So memorable!",
        date: "2024-08-24T17:00:00Z",
      },
      {
        id: 3.2,
        username: "MelodyMaster",
        avatarUrl: "https://example.com/avatar9.jpg",
        comment: "It’s rare to find a movie where the music stands out so much. Loved it too!",
        date: "2024-08-24T17:20:00Z",
      },
    ],
  },
];


