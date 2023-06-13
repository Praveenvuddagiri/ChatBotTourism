function start() {
    var icon = document.getElementById("chat-start");
    var container = document.getElementById("chat-container");

    if (container.style.display === 'none') {
        container.style.display = "flex";
    }
    else {
        container.style.display = "none";
    }
}

function send_button_clicked() {

    var msg = document.getElementById("user-que");
    if (msg.value === "")
        return;
    $("<div class='d-flex flex-row justify-content-end mb-4'><div class='p-3 me-2 border c1' id='message-box'><p class='small mb-0'>" + msg.value + "</p></div><i class='fa-solid fa fa-user' id='robot'></i></div>").appendTo('#inner');
    $("<div id='waiting' class='messages__item messages__item--typing d-flex flex-row justify-content-start mb-4 '><span class='messages__dot'></span><span class='messages__dot'></span><span class='messages__dot'></span></div>").appendTo('#inner');
    $.ajax({
        url: "http://127.0.0.1:8000/botmodel/",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ sentence: msg.value }),
        success: function (result) {
            msg.value = "";
            msg.disabled = true;

            setTimeout(() => {
                $(document).ready(function () {

                    $("#waiting").remove();
                    $("<div class='d-flex flex-row justify-content-start mb-4'><i class='fa-solid fa-robot' id='robot'></i><div class='p-3 ms-2 border c2' id='message-box'><p class='small mb-0'>" + result.ans + "</p></div></div>").appendTo('#inner');
                });
                msg.disabled = false;
                msg.focus();
            }, 1500);

        },
        error: function (err) {
            console.log(err);
        }
    });
    var objDiv = document.getElementById("inner");
    objDiv.scrollTop = objDiv.scrollHeight;

    synth.cancel();
}

var input = document.getElementById("user-que");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("send-btn").click();
    }
});


let synth = speechSynthesis, isSpeaking = true;

function textToSpeech(text) {

    let utterance = new SpeechSynthesisUtterance(text);

    let voice = synth.getVoices()[9];
    utterance.voice = voice;

    synth.cancel();
    synth.speak(utterance);

}


var icon = document.getElementById("voiceIcon");
document.getElementById("voice").addEventListener("click", e => {
    e.preventDefault();
    const textarea = document.querySelector("#inner>div:last-child>div>p").textContent;
    if (!synth.speaking) {
        textToSpeech(textarea);
    }
    if (textarea.length > 80) {
        setInterval(() => {
            if (!synth.speaking && !isSpeaking) {
                isSpeaking = true;
                icon.className = '';
                icon.classList.add("fa-solid");
                icon.classList.add("fa-microphone");
            } else {
            }
        }, 500);
        if (isSpeaking) {
            synth.resume();
            isSpeaking = false;
            icon.className = '';
            icon.classList.add("fa-solid");
            icon.classList.add("fa-microphone");
        } else {
            synth.pause();
            isSpeaking = true;
            icon.className = '';
            icon.classList.add("fa-solid");
            icon.classList.add("fa-microphone-slash");
        }
    } else {
        icon.className = '';
        icon.classList.add("fa-solid");
        icon.classList.add("fa-microphone");
    }
});
