document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('backgroundVideo');
    const container = document.querySelector('.container');

    // Adiciona um listener para detectar o término do vídeo
    video.addEventListener('ended', function () {
        // Após o término do vídeo, rola automaticamente para a aba de preenchimento
        container.scrollIntoView({ behavior: 'smooth' });
    });

    // Adiciona um listener para o botão de confirmação
    const confirmationButton = document.querySelector('button');
    confirmationButton.addEventListener('click', function () {
        submitForm();
    });
});

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    const confirmationMessage = document.getElementById('confirmationMessage');

    confirmationMessage.innerHTML = `<p>Obrigado por confirmar, ${name}!</p>`;

    // Aqui você pode adicionar lógica adicional, como enviar os dados para um servidor, armazenar no localStorage, etc.
}
