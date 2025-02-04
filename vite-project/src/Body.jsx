import React, { useState } from 'react';
import { Edit, Trash } from 'lucide-react';

const Header = () => {
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
      description: 'The most exciting developments in artificial intelligence are taking place this year.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTX1trvPlPn_FTPmrL4bc3ZuO796E2LJoGw&s',
      likes: 0,
    },
    {
      title: 'Breakthroughs in Quantum Computing',
      description: 'Recent advances in quantum computing are set to revolutionize industries, solving problems at unprecedented speeds.',
      image: 'data:image/jpeg;base64,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',
      likes: 0,
    },
    {
      title: 'The Future of Renewable Energy',
      description: 'Innovative solutions in solar, wind, and hydroelectric energy are shaping a cleaner and more sustainable future.',
      image: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      likes: 0,
    },
    {
      title: 'Advancements in Space Exploration',
      description: 'From Mars missions to deep-space telescopes, humanity is pushing the boundaries of space exploration like never before.',
      image: 'data:image/jpeg;base64,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',
      likes: 0,
    }
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  
  const handleLike = (index) => {
    const newCards = [...cards];
    newCards[index].likes += 1;
    setCards(newCards);
  };

  
  const handleAddCard = () => {
    if (!cardTitle || !cardDescription) return;
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

  
  const handleDelete = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditTitle(cards[index].title);
    setEditDescription(cards[index].description);
  };

  
  const handleSaveEdit = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].title = editTitle;
    updatedCards[index].description = editDescription;
    setCards(updatedCards);
    setEditingIndex(null);
  };

  return (
    <div>
      
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

      
      <div className="flex flex-wrap gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={card.image || 'https://via.placeholder.com/150'}
              alt={card.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>

            
            <div className="absolute top-3 right-3 flex space-x-3">
              <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
                <Edit size={20} />
              </button>
              <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                <Trash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
