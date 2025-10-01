
    // Envelope interaction
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const cardContainer = document.getElementById('cardContainer');
    let isEnvelopeOpen = false;

    envelopeWrapper.addEventListener('click', function() {
      if (!isEnvelopeOpen) {
        isEnvelopeOpen = true;
        envelopeWrapper.classList.add('open');

        setTimeout(() => {
          cardContainer.classList.remove('hidden');
          setTimeout(() => {
            cardContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }, 800);
      }
    });

    // Floating Hearts
    function createFloatingHearts() {
      const container = document.getElementById('floatingHeartsContainer');
      for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (8 + Math.random() * 4) + 's';
        container.appendChild(heart);
      }
    }

    // Floating Butterflies
    function createFloatingButterflies() {
      const container = document.getElementById('floatingButterfliesContainer');
      for (let i = 0; i < 3; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'floating-butterfly';
        butterfly.textContent = '🦋';
        butterfly.style.top = (20 + Math.random() * 60) + '%';
        butterfly.style.left = Math.random() * 80 + '%';
        butterfly.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(butterfly);
      }
    }

    // Sparkles
    function createSparkles() {
      const container = document.getElementById('sparklesContainer');
      for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkles';
        sparkle.textContent = '✨';
        sparkle.style.top = (10 + Math.random() * 80) + '%';
        sparkle.style.left = Math.random() * 90 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(sparkle);
      }
    }

    // Initialize animations
    createFloatingHearts();
    createFloatingButterflies();
    createSparkles();