//javascript T-T

var noteInp = document.getElementById("noteInp");
let submit = document.getElementById("submit");
let deleteAll = document.getElementById("delete");
let noteDiv = document.getElementById("noteDiv");

//gets all the notes from history if they exist
noteDiv.innerHTML = localStorage.getItem("history")


submit.addEventListener("click", ()=>{
    //runs if noteInp has a value inside of it---
    if (noteInp.value) {
        let note = document.createElement("div");
        let deleteNote = document.createElement("button");
        let copyBox = document.createElement("span");

        note.innerHTML = noteInp.value;
        note.classList.add("note", "w-50");

        deleteNote.innerHTML = `<i class="fa-solid fa-trash"></i> Delete`;
        deleteNote.classList.add("btn", "btn-danger", "end", "delete");

        copyBox.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
        copyBox.classList.add("btn", "btn-primary", "end", "my-2");

        

        noteDiv.appendChild(note).appendChild(deleteNote);
        note.appendChild(copyBox);


        //scrolls down to the bottom if new note is created--
        window.scrollTo(0, document.body.scrollHeight);

        //sets the notes to localstorage
        localStorage.setItem("history", noteDiv.innerHTML);

        //clears the input field 
        setTimeout(() => {noteInp.value = ""}, 1);
    }
    else{
        alert("type something first you idiot");
    };
});

deleteAll.addEventListener("click", function() {
    if (noteDiv.innerHTML != "") {     
        noteDiv.innerHTML = ""
        localStorage.setItem("history", noteDiv.innerHTML)
        setTimeout(() => {
            alert("Deleted all notes!")
        }, 10);
    }
})

noteDiv.addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
        e.target.parentElement.style.opacity = "0"

        setTimeout(() => {
            e.target.parentElement.remove();
            localStorage.setItem("history", noteDiv.innerHTML);
        }, 300);
    };

    if (e.target.tagName == "SPAN") {
        let initialCopyText = e.target.parentElement.innerText;
        let deleteDelText = initialCopyText.replace("Delete","");
        let deleteCopyText = deleteDelText.replace("Copy","");
        navigator.clipboard.writeText(deleteCopyText);
        alert("Copied to clipboard!");
    };
});

