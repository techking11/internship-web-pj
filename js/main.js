'use strict'
let human_resource = document.querySelector('.human-resource')
let nums = document.querySelectorAll('.human-resource .number')

window.addEventListener('scroll', function() {

    const triggerBottom = this.window.innerHeight / 5 * 4
    const boxTop = human_resource.getBoundingClientRect().top

    if(boxTop < triggerBottom) {
        let val = 0
        let interval = setInterval(increaseNum, 10)

        function increaseNum() {
            if(val < 650) val += 1
            else clearInterval(interval)
            for(let num of nums) num.innerHTML = val
        }
    }

})