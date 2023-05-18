$(document).ready(function(){
    $("#stop").click(function(){
      $("#one").replaceWith($('#two').html());
    });
  });



  var le=0;

  function str_to_but(text){
    if(text!=""){ 
      const myArray = text.split(" ");
      le=myArray.length;
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

  function merging(){
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
        
        console.log(final_string);
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
    

    function first_letter(idd, a)
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
  
                if(firstLetterCapital(old_value)== true){
                    b=b[0].toUpperCase() + b.slice(1);
                }
    
                if(old_value.charAt(old_value.length-1) =="."){
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
    
    
        function str_as_in(idd, c){
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

        if(firstLetterCapital(old_value)== true){
            b=b[0].toUpperCase() + b.slice(1);
        }
    
        if(old_value.charAt(old_value.length-1) =="."){
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
    
    
