function autocomplete(){
a = document.getElementById("ind_99");
a.click();
}

function showElements(){
    var btn = document.getElementById('completeButton');
    var text = document.createElement('div');
    text.innerHTML = 'AAAA';
    document.body.appendChild(text);
    btn.innerHTML = 'Заполнить';
    btn.onclick = autocomplete();
    document.body.appendChild(btn);

}
document.addEventListener('DOMContentLoaded', showElements);
