function ViewLaptop(){

};
ViewLaptop.prototype.addLaptop = function () {
};
ViewLaptop.prototype.getMessage = function(message, nameCl){
    var cont = document.querySelector('.container');
    var form = document.querySelector('#laptop');

    var infoBlock = document.createElement('div');
    infoBlock.className = nameCl;
    infoBlock.innerText = message;

    cont.insertBefore(infoBlock, form);
}

ViewLaptop.prototype.clearInput = function(){
    document.querySelector('#name').value = '';
    document.querySelector('#secondname').value = '';
};