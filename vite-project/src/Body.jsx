import React, { useState } from 'react';

const Header = () => {
  const [likes1, SetLikes1] = useState(0);
  const [likes2, SetLikes2] = useState(0);
  const [likes3, SetLikes3] = useState(0);
  const [likes4, SetLikes4] = useState(0);
  const [likes5, SetLikes5] = useState(0);

  // New states to hold user input for adding a card
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardImage, setCardImage] = useState('');
  const [cards, setCards] = useState([
    {
      title: 'Noteworthy technology acquisitions 2021',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      image: 'https://flowbite.com/docs/images/blog/image-4.jpg',
      likes: 0,
    },
    {
      title: 'New Innovations in AI Technology',
      description: 'The most exciting developments in artificial intelligence are taking place this year. Here\'s an overview of some groundbreaking AI innovations.',
      image: '',
      likes: 0,
    },
    // You can initialize other default cards here
  ]);

  // Handlers for liking cards
  const handleLike = (index) => {
    const newCards = [...cards];
    newCards[index].likes += 1;
    setCards(newCards);
  };

  // Handler for adding a new card
  const handleAddCard = () => {
    const newCard = {
      title: cardTitle,
      description: cardDescription,
      image: cardImage,
      likes: 0,
    };
    setCards([...cards, newCard]);
    setCardTitle('');
    setCardDescription('');
    setCardImage('');
  };

  return (
    <div>
      {/* Input fields for adding a new card */}
      <div className="p-6">
        <input
          type="text"
          placeholder="Enter card title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          className="p-2 m-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter card description"
          value={cardDescription}
          onChange={(e) => setCardDescription(e.target.value)}
          className="p-2 m-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter image URL"
          value={cardImage}
          onChange={(e) => setCardImage(e.target.value)}
          className="p-2 m-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddCard}
          className="mt-2 text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Card
        </button>
      </div>

      {/* Cards List */}
      <div className="flex flex-wrap gap-6 p-6">
        {cards.map((card, index) => (
          <a
            href="#"
            key={index}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={card.image || 'https://via.placeholder.com/150'}
              alt={card.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
              <button
                onClick={() => handleLike(index)}
                className="mt-2 text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Like {card.likes}
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
