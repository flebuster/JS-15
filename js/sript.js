var catalogArr = [];

function firstButton()
{
	document.location.href = "second.html";
};

function secondButton()
{
	document.location.href = "index.html";
};

document.querySelector('#laptop').addEventListener('submit', function(event){
    var name = document.querySelector('#name').value;
    var secondname = document.querySelector('#secondname').value;

    var laptop = new Laptop(name, secondname);
    var viewLaptop = new ViewLaptop();

    if(name === '' || secondname === ''){
        viewLaptop.getMessage('Заполните все поля ввода', 'no_succes');

    } else{
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage('Данные добавлены', 'succes');
        viewLaptop.clearInput();
        catalogArr.push(laptop);
      
    };
    console.log(catalogArr);
    event.preventDefault();
});