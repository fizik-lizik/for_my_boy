

        function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const heartsCount = 20;
            
            for (let i = 0; i < heartsCount; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heartsContainer.appendChild(heart);
            }
        }
        

        function addHearts() {
            const heartsContainer = document.getElementById('hearts');
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.bottom = '0';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heartsContainer.appendChild(heart);
            
            // Удаляем сердечко после анимации
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
        
        // Инициализация при загрузке страницы
        window.onload = function() {
            createHearts();
        };
    
