shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(`notesobj`);
    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";

    notesobj.forEach(function(element, index){
        html +=`
        <div class="card notecard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <a href="#" id="${index}" onclick="deletenote(this.id)" class="btn btn-primary" id="addbtn">Delete it Damnit</a>
        </div>
        </div>
        `;
    });

    let notesele=document.getElementById('notes');
    if(notesobj.length != 0 )
    {
        notesele.innerHTML=html;
    }
    else
    {
        notesele.innerHTML="No notes for display";
    }
}

function deletenote(index)
{
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}

let search=document.getElementById('searchtxt');

search.addEventListener("input",function(){


    let inputval=search.value;
    let notecards=document.getElementsByClassName('notecard');

    Array.from(notecards).forEach(function(element){
        let cardext=element.getElementsByTagName("p")[0].innerHTML;
        if(cardext.includes(inputval))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }
    });
});