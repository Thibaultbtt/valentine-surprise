import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ left: 0, top: 0 });

  const images = [
    '../public/1.jpg',
    '../public/2.jpg',
    '../public/3.jpg',
    '../public/4.jpg',
    '../public/5.jpg',
    '../public/6.jpg',
    '../public/7.jpg',
    '../public/8.jpg',
    '../public/9.jpg',
  ];

  // Carousel automatique
  useEffect(() => {
    if (currentPage === 2) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentPage, images.length]);

  // Effet de coeurs qui tombent
  const createHearts = () => {
    const heartsCount = 30;
    for (let i = 0; i < heartsCount; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'falling-heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
      }, i * 100);
    }
  };

  const handleYesClick = () => {
    setCurrentPage(3);
    createHearts();
  };

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 200;
    setNoButtonPosition({ left: randomX, top: randomY });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Page 1: Surprise */}
      {currentPage === 1 && (
        <div className="page">
          <div className="surprise-container">
            <h1 className="surprise-title">J'ai quelque chose pour toi...</h1>
            <button className="surprise-btn" onClick={() => setCurrentPage(2)}>
              Clique ici 💝
            </button>
          </div>
        </div>
      )}

      {/* Page 2: Question */}
      {currentPage === 2 && (
        <div className="page page2">
          <div className="carousel-container">
            <div className="carousel">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Photo ${index + 1}`}
                  className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
            <button className="carousel-btn prev" onClick={prevImage}>
              ❮
            </button>
            <button className="carousel-btn next" onClick={nextImage}>
              ❯
            </button>
          </div>

          <div className="message-container">
            <p className="message">
              Sylvain, je sais que tu as besoin de temps pour réfléchir aux évènements récents et je sais que ce n'est pas simple pour toi.
              Tu es tout ce que j'ai de plus cher aujourd'hui et je n'imagine pas ma vie sans toi... Ce que l'on vit en ce moment est 
              tout ce que j'ai rêvé et je ne m'imagine pas le faire avec quelqu'un d'autre que toi. Tu es l'homme de ma vie et je le ressens très sincèrement. 
              Je suis prêt à ne plus jamais te manquer de respecte ou te mentir, être aussi droit que tu l'es et faire au mieux pour essayer de te rendre heureux.

              C'est parce que je ressens tout cela pour toi que j'ai prévu ce week-end de saint valentin qui commence demain... 
              J'aimerais pouvoir te montrer mion dévouement et mes sentiments pour toi dans les prochains jours si tu veux bien accepter mes regrets.
            </p>
          </div>

          <div className="question-container">
            <h2 className="question">
              Veux-tu essayer de construire ton futur avec moi, me laisser une chance de me racheter et passer ce
              week-end de Saint-Valentin ensemble ?
            </h2>
            <div className="buttons-container">
              <button className="answer-btn yes-btn" onClick={handleYesClick}>
                Oui ❤️
              </button>
              <button
                className="answer-btn no-btn"
                onMouseEnter={handleNoHover}
                style={{
                  left: `${noButtonPosition.left}px`,
                  top: `${noButtonPosition.top}px`
                }}
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page 3: Message final */}
      {currentPage === 3 && (
        <div className="page">
          <div className="final-container">
            <h1 className="final-title">Je t'aime Chipy Sylvain ❤️</h1>
            <p className="final-message">Merci de me faire confiance</p>
            <p className="signature">Ton Boy 💕</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
