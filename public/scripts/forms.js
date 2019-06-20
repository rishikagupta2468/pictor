function rtsp_link(){
    var div1=document.querySelector(".div1");
    var div2=document.querySelector(".div2");
    var div3=document.querySelector(".div3");
    div1.style.display="none";
    div2.style.display="none";
    div3.style.display="block";
}

function get_rtsp(){
    var div1=document.querySelector(".div1");
    var div2=document.querySelector(".div2");
    var div3=document.querySelector(".div3");
    div1.style.display="none";
    div2.style.display="block";
    div3.style.display="none";
}

function back(){
    var div1=document.querySelector(".div1");
    var div2=document.querySelector(".div2");
    var div3=document.querySelector(".div3");
    div1.style.display="block";
    div2.style.display="none";
    div3.style.display="none";
}
