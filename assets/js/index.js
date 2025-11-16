document.addEventListener('DOMContentLoaded', () => {
    
    const logoVideo = document.querySelector('.hero-video-container video');

    const velocidadeNormal = 1.0;
    const velocidadeHover = 2.0;

    if (logoVideo) {
        logoVideo.addEventListener('mouseenter', () => {
            logoVideo.playbackRate = velocidadeHover;
        });

        logoVideo.addEventListener('mouseleave', () => {
            logoVideo.playbackRate = velocidadeNormal;
        });
    }

    const track = document.querySelector('.carousel-track');
    
    if (track) {
        const cards = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        
        let currentIndex = 0;

        const getCardWidth = () => {
            return cards[0].getBoundingClientRect().width;
        }

        const moveToCard = (targetIndex) => {
            const cardWidth = getCardWidth();
            track.style.transform = 'translateX(-' + cardWidth * targetIndex + 'px)';
            currentIndex = targetIndex;
        }

        nextButton.addEventListener('click', () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex > cards.length - 1) {
                nextIndex = 0;
            }
            moveToCard(nextIndex);
        });

        prevButton.addEventListener('click', () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = cards.length - 1;
            }
            moveToCard(prevIndex);
        });

        window.addEventListener('resize', () => {
            track.style.transition = 'none';
            moveToCard(currentIndex);
            
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        });
    }
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
});