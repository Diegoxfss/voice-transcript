// Cria uma instância do objeto SpeechRecognition
const recognition = new webkitSpeechRecognition();

// Define o idioma para português do Brasil
recognition.lang = "pt-BR";

// Define o número máximo de resultados a serem retornados
recognition.maxAlternatives = 1;

// Array de respostas padrão
const answers = ["Não sei.", "Acho que sim.", "Pode ser, talvez.", "Não sei, pergunta pro Google."];

// Ao começar a transcrição, limpa a div de transcrição
recognition.addEventListener("start", () => {
    document.querySelector("#transcription").textContent = "";
});

// Ao reconhecer a fala, adiciona a transcrição na div de transcrição
recognition.addEventListener("result", (event) => {
    const transcription = event.results[0][0].transcript;
    document.querySelector("#transcription").textContent += " " + transcription;
});

// Ao finalizar a transcrição, obtém a pergunta do usuário e exibe a resposta
recognition.addEventListener("end", () => {
    const question = document.querySelector("#transcription").textContent.trim();
    const answer = answers[Math.floor(Math.random() * answers.length)];
    document.querySelector("#answer").textContent = `Pergunta: ${question} \nResposta: ${answer}`;
});

// Ao clicar no botão de início, começa a transcrição
document.querySelector("#start").addEventListener("click", () => {
    recognition.start();
});
