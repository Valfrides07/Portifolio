const cards = document.querySelectorAll('.card');

// IntersectionObserver é uma API do navegador que permite observar quando um elemento entra ou sai da área visível da tela (o viewport).
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        // A condição verifica se o elemento (entry.target) está visível na tela.
        if (entry.isIntersecting) {

            // Se o elemento estiver visível, o código adiciona a classe show a ele.Essa classe CSS (que não está no código, mas é fundamental para o efeito) geralmente contém a animação de "aparecimento"
            entry.target.classList.add('show');

            // Depois que a animação é acionada uma vez, esta linha para de observar o elemento. Isso garante que a animação não se repita se o usuário rolar a página para cima e para baixo novamente, otimizando o desempenho.
            observer.unobserve(entry.target);
        }

    });

}, {
    // O threshold: 0.2 significa que a função será disparada assim que pelo menos 20% do elemento estiver visível.
    threshold: 0.2

});

cards.forEach(card => observer.observe(card));


cards.forEach((card, i) => {
    // Para cada card, ele define um transition-delay (atraso de transição) diretamente no estilo do elemento.
    card.style.transitionDelay = `${i * 0.3}s`;

});


8