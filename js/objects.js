
// Hobbies Kaja
var hobbieskaja = ['Reisen','Zeichnen','Filmen','Fussball'];

// Hobbies Koen
var hobbieskoen = ['Reisen','Musik','Filmen','Fussball'];



function makeUL(array) {

    var list = document.createElement('ul');
    list.className = "list-group list-group-flush";

    for (var i = 0; i < array.length; i++) {

        var item = document.createElement('li');
        item.className = "list-group-item";

        item.appendChild(document.createTextNode(array[i]));

        list.appendChild(item);
    }

    return list;
}


document.getElementById('hobbieskaja').appendChild(makeUL(hobbieskaja));
document.getElementById('hobbieskoen').appendChild(makeUL(hobbieskoen));