// Select every element with class 'btn'
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {

        let activeButton = document.querySelectorAll('.btn#active');

        for(let theBtn of activeButton) {
            theBtn.id = null;
        }
        this.id = 'active';
    });
})