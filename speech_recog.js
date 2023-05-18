
if ("webkitSpeechRecognition" in window) {

    var speechRecognition = new webkitSpeechRecognition();
    var final_transcript = "";
  
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'en-US';
  
    speechRecognition.onstart = () => {
      document.querySelector("#status").style.display = "block";
    };
    speechRecognition.onerror = () => {
      document.querySelector("#status").style.display = "none";
      console.log("Speech Recognition Error");
    };
    speechRecognition.onend = () => {
      document.querySelector("#status").style.display = "none";
      console.log("Speech Recognition Ended");
    };
  
    speechRecognition.onresult = (event) => {
      let interim_transcript = "";
  
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
          final_transcript+=" ";
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      document.querySelector("#final").innerHTML = final_transcript;
      document.querySelector("#interim").innerHTML = interim_transcript;
  
      
    };
  
    document.addEventListener("DOMContentLoaded", () => { document.querySelector("#start").onclick = () => {
      final_transcript="";
    speechRecognition.start();
    };
    });
    
  document.addEventListener("DOMContentLoaded", () => { document.querySelector("#stop").onclick = () => {
      speechRecognition.stop();
      $( "#strbutton" ).load(window.location.href + "#strbutton" );
      document.getElementById("#strbutton").innerHTML =str_to_but(final_transcript);
      };
    });
  
  
    document.addEventListener("DOMContentLoaded", () => { document.querySelector("#start1").onclick = () => {
      final_transcript="";
    speechRecognition.start();
    };
    });
  
  document.addEventListener("DOMContentLoaded", () => {document.querySelector("#stop1").onclick = () => {
    speechRecognition.stop();
    a_app(final_transcript);
    };
    });
    
  document.addEventListener("DOMContentLoaded", () => {  document.querySelector("#start2").onclick = () => {
  final_transcript="";
  speechRecognition.start();
  };
  });
  
  document.addEventListener("DOMContentLoaded", () => {document.querySelector("#stop2").onclick = () => {
  speechRecognition.stop();
  a_as_in_app(final_transcript);
  };
  });
  
    
} 
  
else {
    console.log("Speech Recognition Not Available");
}
  
