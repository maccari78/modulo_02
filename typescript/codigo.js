

    function editar_acercade(){
       document.getElementById("edit-acercade").style.display="block" 
       let text1=document.getElementById("text-acercade").innerText
       console.log(text1)
       document.getElementById("edit-acercade").innerText=text1
    };

    function escribir_acercade(valor){
      document.getElementById("text-acercade").innerText=valor;
      //document.getElementById("text-acercade").style.width=document.getElementById("text-acercade").style.width +10;
      //console.log(valor)
    };

    function logMessage(message) {
      console.log(message + "<br>");
    }

    let textarea=document.getElementById("edit-acercade")
    textarea.addEventListener('keyup', (e) => {
      logMessage(`Key "${e.key}" released  [event: keyup]`);
      if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none" 
      }
    });
    
    /*
    function showFile(input) {
      let file = input.files[0];
      alert(`File name: ${file.name}`); // e.g my.png
      alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
        
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function() {
        console.log(reader.result);
        document.getElementById("text-acercade").innerText=reader.result;
      };
      reader.onerror = function() {
          console.log(reader.error);
      };
    };
    */

  