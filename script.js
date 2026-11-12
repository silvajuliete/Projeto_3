
const form = document.querySelector('#quizForm');

form.addEventListener('submit', event => {
    event.preventDefault();

    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'c'
    };

    let score = 0;

    for (const [question, correct] of Object.entries(answers)) {
        const selected = form.querySelector(
            `input[name="${question}"]:checked`
        );

        if (selected && selected.value === correct) {
            score++;
        }
    }

    const result = document.querySelector('#result');
    const feedback = document.querySelector('#feedback');

    result.textContent = `Você acertou ${score} de 3 perguntas!`;

    feedback.textContent =
        score === 3
            ? 'Excelente! Você já conhece boas práticas digitais.'
            : score > 0
                ? 'Bom começo! Reveja as dicas e tente novamente.'
                : 'Continue aprendendo: releia o conteúdo e tente novamente.';

    feedback.className = `feedback ${score === 3 ? 'good' : 'bad'}`;
});

form.addEventListener('reset', () => {
    document.querySelector('#result').textContent = '';
    document.querySelector('#feedback').textContent = '';
});