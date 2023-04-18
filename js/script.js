'use strict'
/* News & Announcement ----------------- */

let news_march = document.querySelector('.march')
let news_june = document.querySelector('.june')
let news_date = document.querySelectorAll('.news-date-catch a')

for (let date of news_date) {
    date.addEventListener('click', function() {
        if(this.textContent == 'March 2023') box_change(news_june, news_march)
        else box_change(news_march, news_june)
    })
}

let box_change = function (box1, box2) {
    box1.style.display = 'none'
    box2.style.display = 'block'
}