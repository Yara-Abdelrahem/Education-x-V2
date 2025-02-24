/*const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault{}
})*/
function validation() {
    var from = document.getElementById('from');
    var text = document.getElementById('text');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        from.classlist.add("vaild");
        from.classlist.remove("invaild");
        text.innerHTML = "your  email adress  in vaild";
        text.innerHTML.style.color = "#00ff00";
    }
    else {
        email.classlist.remove("vaild");
        from.classlist.add("invaild");
        text.innerHTML = "please ";

    }
}
