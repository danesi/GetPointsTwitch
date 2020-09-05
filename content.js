setInterval(function(){
    verifyBtn()
}, 30000);

function verifyBtn() {
    var btn = document.querySelectorAll('.tw-button--success');
    btn = btn[0]
    if (btn) {
        btn.setAttribute("id", "btn-point")
        document.getElementById('btn-point').click()
        console.log('Points collected')
    }
}
