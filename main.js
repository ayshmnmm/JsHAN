// codemirror editor
const codemirrorEditor = CodeMirror.fromTextArea(document.getElementById('codearea'), {
    lineNumbers: true,
    theme: "solarized dark"
  });

// codemirror output
const codemirrorOutput = CodeMirror.fromTextArea(document.getElementById('output'), {
  theme: "solarized dark",
  readOnly: true,
  mode: null,
});

// style the editor and output
codemirrorEditor.setSize("100%", "100%");
codemirrorOutput.setSize("100%", "100%");
codemirrorOutput.getDoc().setValue('Run your program to see the output');



// function to print to output
function printout(value) {
  var already = String(codemirrorOutput.getValue());
  var updated = already.concat(String(value)).concat("\n") ;
  codemirrorOutput.getDoc().setValue(updated);
}




// main HAN interpreter
function han_interpret() {
    codemirrorOutput.getDoc().setValue(""); // clear output
    var blob = codemirrorEditor.getValue(); // program variable (holds editor value at run)
    printout(blob);
}




// save to local storage
function save_editor_state() {
  var value = codemirrorEditor.getValue();
  localStorage.setItem("editor_state",value)
}

// load from local storage
function load_editor_state() {
  var value = localStorage.getItem("editor_state");
  codemirrorEditor.getDoc().setValue(value);
}

var intervalId = setInterval(function() {
  // save editor state every n ms 
  save_editor_state();
}, 500);


document.addEventListener("DOMContentLoaded", function() {
  load_editor_state();
});