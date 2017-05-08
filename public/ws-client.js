// This is client side ws controller

var socket = io('http://localhost:9000');

socket.on('disconnect', function () {
    updateTitle('Disconnected');
});

socket.on('connect', function () {
    updateTitle('Connected');
});

socket.on('message', function (message) {
    updateMSG(message);
});

function myKeyPress(e){
    var keynum;

    if(window.event) {                 
      keynum = e.keyCode;
    } else if(e.which){                   
      keynum = e.which;
    }

    if(keynum == 13){
        var msg = document.getElementById('msg').value;
        updateMSG(msg);
        socket.emit('chat', msg);
    }
  }

function updateTitleMain(title){
    document.getElementsByTagName('h1')[0].innerHTML = title;
}

function updateTitle(title){
    document.getElementsByTagName('h2')[0].innerHTML = title;
}

function updateMSG(msg){
    document.getElementById('msg').value = '';
    var para = document.createElement("p");
    var node = document.createTextNode('> ' + msg);
    para.appendChild(node);

    var element = document.getElementById("messages");
    element.appendChild(para);
}