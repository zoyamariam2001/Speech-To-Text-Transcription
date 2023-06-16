

$(document).ready(function(){                           //for replacing initial screen with buttons of string
    $("#stop").click(function(){
      $("#one").replaceWith($('#two').html());
    });
  });



  var le=0;

  function str_to_but(text){                       //func for converting entered string into buttons
    if(text!=""){ 
      const myArray = text.split(" ");
      le=myArray.length;
     if (navigator.userAgent.indexOf("Chrome") !=-1 ){
      for (var i = 0; i < le; i++) {                                       
        var btn = document.createElement("button");
        var t = document.createTextNode(myArray[i]);
        
        btn.appendChild(t);

        btn.value = myArray[i];
        btn.id="word"+i;
        let z= le-1-i;
        btn.className="item"+z;
        
        btn.className="btn btn-outline-primary";
        btn.setAttribute("onclick", "popupp(this.id);");
        document.getElementById("strbutton").appendChild(btn);
      }
     }
     else{                                                  //for browsers other than Google
        for (var i = 0; i < le-1; i++) {                                       
            var btn = document.createElement("button");
            var t = document.createTextNode(myArray[i]);
            
            btn.appendChild(t);
    
            btn.value = myArray[i];
            btn.id="word"+i;
            let z= le-1-i;
            btn.className="item"+z;
            
            btn.className="btn btn-outline-primary";
            btn.setAttribute("onclick", "popupp(this.id);");
            document.getElementById("strbutton").appendChild(btn);
          }
     }
    }
  }

  function merging(){                       //func for merging the buttons
        let i=0;
        let final_string="";
        let x="";
        while(i>=0){
            let idd="word"+i;;
            if (document.getElementById(idd)){
                break;
            }
            else{
                i++;
            }
        }
        
      if (navigator.userAgent.indexOf("Chrome") !=-1 ){
        while(i<le){                                          
            let idd="word"+i;
            if (document.getElementById(idd)) 
            {
                x=document.getElementById(idd).value;
                final_string+= x+" ";
                i++;
            }
            else{
                i++;
            }
        }
      }
      else{                                                   //for browsers other than google
        while(i<le-1){                                          
            let idd="word"+i;
            if (document.getElementById(idd)) 
            {
                x=document.getElementById(idd).value;
                final_string+= x+" ";
                i++;
            }
            else{
                i++;
            }
        }
      }
        console.log(final_string);                        //displaying final string in console (can be passed ahead)
    }





    var dialog1 = document.getElementById('window1');
    var dialog2 = document.getElementById('window2');
    var dialog3 = document.getElementById('window3');
    var butid="";
    
    function popupp(idd){
        butid=idd;
        dialog1.show();
    }
    
  
    function firstlet(){               
        dialog1.close();
        dialog2.show();
    }
    
    function as_in(){                  
        dialog1.close();
        dialog3.show();
    }
    
    function a_app(final_transcript){
        first_letter(butid,final_transcript);
    }
    
    function a_as_in_app(final_transcript){
        str_as_in(butid,final_transcript);
    }
    

    function first_letter(idd, a)           //for first letter of word
            {
                a = a.trim();
                //a is the new voice ip
                let old_value=document.getElementById(idd).value;
                const myArray = a.split(" ");
                var b="";

                for (var i = 0; i < myArray.length; i++) {
                    b+=myArray[i][0];
                }
    
                b=b.toLowerCase(); 
    
                function firstLetterCapital(word){
                    return word.charAt(0) === word.charAt(0).toUpperCase();
                }
  
                if(firstLetterCapital(old_value)== true){      //matching case of original word
                    b=b[0].toUpperCase() + b.slice(1);
                }
    
                if(old_value.charAt(old_value.length-1) =="."){      //matching punctuation of original word
                    b+=".";
                }
  
                if(old_value.charAt(old_value.length-1) ==","){
                    b+=",";
                }
  
                if(old_value.charAt(old_value.length-1) =="?"){
                    b+="?";
                }
  
                if(old_value.charAt(old_value.length-1) ==";"){
                    b+=";";
                }
    
                document.getElementById(idd).value=b;
                document.getElementById(idd).textContent=b;
    
                dialog2.close();
            }
    
    
        function str_as_in(idd, c){                 //for a as in apple format
        c=c.trim();
    let old_value=document.getElementById(idd).value;
    
    function strRemoveAll(s,r)
    {
        return s.replaceAll(r,'');
    }
    a = strRemoveAll (c,'as ');
    a = strRemoveAll (a,'in ');
    a=strRemoveAll(a,'.');
    
    a=a.toLowerCase();
    
    const myArray = a.split(" ");
    var b="";

    for (var i = 0; i < myArray.length; i++) {
        if(((myArray[i][0]))==((myArray[i+1][0]))){
            b+=myArray[i][0];
        }
        else{
            b+=myArray[i+1][0];
        }
        i++;
    }
    
    b=b.toLowerCase(); 
    
        function firstLetterCapital(word){
            return word.charAt(0) === word.charAt(0).toUpperCase();
        }

        if(firstLetterCapital(old_value)== true){                  //matching case of original word for consistency
            b=b[0].toUpperCase() + b.slice(1);
        }
    
        if(old_value.charAt(old_value.length-1) =="."){            //matching punctuation of original word
                    b+=".";
                }
  
                if(old_value.charAt(old_value.length-1) ==","){
                    b+=",";
                }
  
                if(old_value.charAt(old_value.length-1) =="?"){
                    b+="?";
                }
  
                if(old_value.charAt(old_value.length-1) ==";"){
                    b+=";";
                }
    
        document.getElementById(idd).value=b;
        document.getElementById(idd).textContent=b;
    dialog3.close();
    
    }
    
    
