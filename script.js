var noteInp = document.getElementById("noteInp");
let submit = document.getElementById("submit");
let deleteAll = document.getElementById("delete");
let noteDiv = document.getElementById("noteDiv");

noteDiv.innerHTML = localStorage.getItem("history")


submit.addEventListener("click", ()=>{
    if (noteInp.value) {
        let note = document.createElement("div");
        let deleteNote = document.createElement("button");

        note.innerHTML = noteInp.value;
        note.classList.add("note", "w-50");

        deleteNote.innerHTML = `<i class="fa-solid fa-trash"></i> Delete`;
        deleteNote.classList.add("btn", "btn-danger", "end");

        // deleteNote.addEventListener("click", ()=>{
        //     deleteNote.parentElement.remove()
        // })

        noteDiv.appendChild(note).appendChild(deleteNote);

        window.scrollTo(0, document.body.scrollHeight);
        localStorage.setItem("history", noteDiv.innerHTML);
        setTimeout(() => {noteInp.value = ""}, 1);
    }
    else{
        alert("type something first you idiot");
    };
});

deleteAll.addEventListener("click", function() {
    noteDiv.innerHTML = ""
    localStorage.setItem("history", noteDiv.innerHTML)
})

noteDiv.addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
        e.target.parentElement.remove()
        localStorage.setItem("history", noteDiv.innerHTML)
    }
})