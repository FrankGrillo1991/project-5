window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});

const search = new Filter('search', 'data-caption');

function myFunction() {
    var input, filter, ul, li, a , i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li')

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}