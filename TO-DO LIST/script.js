function myToDoList() {
    let li = document.createElement("li");
    let mytxt = document.getElementById("mytext").value;
    let t = document.createTextNode(mytxt);
    li.appendChild(t);
    if (mytxt == "") {
        alert("Empty input");
    }
    else {
        document.getElementById("myUl").appendChild(li);
    }


    let list = document.getElementsByTagName("li");
    for (let i=0;i<list.length;i++)
    {
    let span = document.createElement("span");
    span.className="close"

    let close = document.createTextNode("X");
    span.appendChild(close);
    list[i].appendChild(span);
    }

    
    let close = document.getElementsByClassName("close");
    for (let i=0;i<close.length;i++)
    {
    close[i].onclick = function() {
        let d = this.parentElement;
        d.style.display = "none";
    }
    }

    let input = document.getElementById("mytext");
    let submit = document.getElementById("add");
    submit.addEventListener("click", () => {input.value="";});

}

