import React, { useState } from 'react';
import './carousel.css';
import Card from '../card/card';

const workExp = [
  {
    title: { text: 'USC', link: 'https://example.com/another-project' },
    header: 'Blank Header Text CJKLDANSKLDCNASDKLNDCLKDNASKL;',
    year: '2023-2025',
    description: 'Blank DESCRIPTION Text CJKLDANSKLDCNASDKLNDCLKDNASKL;'
  },
  {
    title: { text: 'MLB/Tickets.com', link: 'https://example.com/another-project' },
    header: 'Blank Header Text CJKLDANSKLDCNASDKLNDCLKDNASKL;',
    year: '2022-2022',
    description: 'Blank DESCRIPTION Text CJKLDANSKLDCNASDKLNDCLKDNASKL;'
  },
  {
    title: { text: 'UCI Graduate Division', link: 'https://example.com/another-project' },
    header: 'Blank Header Text CJKLDANSKLDCNASDKLNDCLKDNASKL;',
    year: '2021-2022',
    description: 'Blank DESCRIPTION Text CJKLDANSKLDCNASDKLNDCLKDNASKL;'
  },
  {
    title: { text: 'App Jam+', link: 'https://example.com/another-project' },
    header: 'Blank Header Text CJKLDANSKLDCNASDKLNDCLKDNASKL;',
    year: '2019-2020',
    description: 'Blank DESCRIPTION Text CJKLDANSKLDCNASDKLNDCLKDNASKL;'
  },
];

const Carousel = () => {
  const [selected, setSelected] = useState('projects'); 
  const handleClick = (section) => {
    setSelected(section);
  };

  const renderContent = () => {
    switch (selected) {
      case 'previousprojects':
        return <p>Previous Projects Content</p>;  
      case 'projects':
        return (
          <div className="card-wrapper">
            {workExp.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                header={card.header}
                description={card.description}
                year={card.year}
              />
            ))}
          </div>
        );
      case 'awards':
        return <p>Awards Content</p>;
      default:
        return <p>Work Experience Content</p>;
    }
  };


  return (
    <div className="carousel-container">
      <div className="button-container">
        <button
          className={`button ${selected === 'projects' ? 'active' : ''}`}
          onClick={() => handleClick('projects')}
        >
          Ongoing Projects
        </button>
        <button
          className={`button ${selected === 'previousprojects' ? 'active' : ''}`}
          onClick={() => handleClick('previousprojects')}
        >
          Previous Projects
        </button>
        <button
          className={`button ${selected === 'awards' ? 'active' : ''}`}
          onClick={() => handleClick('awards')}
        >
          Awards
        </button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Carousel;
