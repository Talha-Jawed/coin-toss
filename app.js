function add(){
    var text = document.getElementById('input');
    if(text.value==="")
    alert("Plz Enter Text")
    else{

        var list = document.getElementById('list');
        var li = document.createElement('li');
        var val = document.createTextNode(text.value);
        var btn = document.createElement('button');
        var tex = document.createTextNode('Edit');
        var btn1 = document.createElement('button');
        var tex1 = document.createTextNode('Delete');
        // btn.appendChild(tex)   //edit button

        btn1.appendChild(tex1)        //dlete button
        btn1.className += " btn btn-danger btn-sm float-right";
        btn1.onclick=function(){
            var li=this.parentNode;
            var ol =li.parentNode;
            ol.removeChild(li);
        }



        li.appendChild(val)
        list.appendChild(li)
        // li.appendChild(btn)
        li.appendChild(btn1)
        text.value="";
        
    }
        
}

function delAll(){
    alert ("Are You Sure Delete All ");
    document.getElementById('list').innerHTML="";
}
