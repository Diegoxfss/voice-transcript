// Cria uma instância do objeto SpeechRecognition
const recognition = new webkitSpeechRecognition();

// Define o idioma para português do Brasil
recognition.lang = "pt-BR";

// Define o número máximo de resultados a serem retornados
recognition.maxAlternatives = 1;

// Ao começar a transcrição, limpa a div de transcrição
recognition.addEventListener("start", () => {
    document.querySelector("#transcription").textContent = "";
});

// Ao reconhecer a fala, adiciona a transcrição na div de transcrição
recognition.addEventListener("result", (event) => {
    const transcription = event.results[0][0].transcript;
    document.querySelector("#transcription").textContent += " " + transcription;
});

// Ao finalizar a transcrição, exibe uma mensagem de encerramento
recognition.addEventListener("end", () => {
    document.querySelector("#transcription").textContent += " - Fim da Transcrição";
});

// Ao clicar no botão de início, começa a transcrição
document.querySelector("#start").addEventListener("click", () => {
    recognition.start();
});
