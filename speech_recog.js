

if ("webkitSpeechRecognition" in window) {

    var speechRecognition = new webkitSpeechRecognition();
    var final_transcript = "";
  
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'en-US';
  
    speechRecognition.onstart = () => {
      document.querySelector("#status").style.display = "block";
      document.querySelector("#status2").style.display = "block";
    };
    speechRecognition.onerror = () => {
      document.querySelector("#status").style.display = "none";
      document.querySelector("#status2").style.display = "none";
      console.log("Speech Recognition Error");
    };
    speechRecognition.onend = () => {
      document.querySelector("#status").style.display = "none";
      document.querySelector("#status2").style.display = "none";
      //console.log("Speech Recognition Ended");
    };
  
    speechRecognition.onresult = (event) => {
      let interim_transcript = "";
  
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {

          if (navigator.userAgent.indexOf("Chrome") !=-1 ){
            var event_res=(event.results[i][0].transcript);
            if(final_transcript==""){
            event_res=event_res.charAt(0).toUpperCase()+event_res.slice(1)+".";
            }
            else{
                event_res=" "+ event_res.charAt(1).toUpperCase()+event_res.slice(2)+".";
            }
            final_transcript += event_res;
          }

          else{                                                          //for browsers other than Google             
            final_transcript += event.results[i][0].transcript;
            final_transcript+=" ";
          }
        }
        
        else {
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
  
