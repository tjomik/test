function autocomplete(){
a = document.getElementById("ind_99");
a.click();
}

function showElements(){
    var btn = document.createElement('button');
    var text = document.createElement('div');
    text.innerHTML = 'AAAA';
    document.body.appendChild(text);
    btn.innerText = 'Заполнить';
    //btn.onclick = autocomplete();
    document.body.appendChild(btn);
    var text1 = document.createElement('div');
    text1.innerHTML = 'BBB';
    document.body.appendChild(text);

}
document.addEventListener('DOMContentLoaded', showElements);
