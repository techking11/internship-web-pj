'use strict'

let input_title = document.querySelector('.input-title')
let comment = document.querySelector('textarea')
let send_comment = document.querySelector('.send-comment')
let comment_box = document.querySelector('.comment-box')

function commentShow() {
    if(input_title.value != '' && comment.value != '') {
        let box = document.createElement('div')
        box.setAttribute('class', 'box')

        let h1 = document.createElement('h1')
        let p = document.createElement('p')

        h1.innerHTML = input_title.value
        p.innerHTML = comment.value

        comment_box.appendChild(box)
        box.append(h1, p)

        input_title.value = ''
        comment.value = ''
    }else {
        window.alert('Please enter input data !')
    }
}

send_comment.addEventListener('click', commentShow)
