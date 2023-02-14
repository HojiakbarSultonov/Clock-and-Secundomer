const sec = document.querySelector('.s'),
      min = document.querySelector('.m'),
      hour = document.querySelector('.h'),
      minNum = document.querySelector('.minutes'),
      hourNum = document.querySelector('.hours')
      let secTime = new Date()
      let secArr = secTime.getSeconds() * 6
      let num = secArr

function clock(){
    let time = new Date(),
        minArr = time.getMinutes() * 6,
        hourArr = time.getHours() * 30
        num += 0.2 

        sec.style.transform = `rotate(${num}deg)`
        min.style.transform = `rotate(${minArr}deg)`
        hour.style.transform = `rotate(${hourArr}deg)`

        setTimeout(() => {
            clock()
        }, 1000 / 30 );

        hourNum.textContent = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        minNum.textContent = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
}

clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
      tabsContentItem = document.querySelectorAll('.tabsContentItem');




for (let i = 0; i < tabsItem.length; i++) {
   tabsItem[i].addEventListener('click', function(){
    for (let j = 0; j < tabsItem.length; j++) {
        tabsItem[j].classList.remove('active')
        tabsContentItem[j].classList.remove('active')
    }
    tabsItem[i].classList.add('active')
    tabsContentItem[i].classList.add('active')
   })
}




const btn = document.querySelector('.stopwatch__btn');
const  span = document.querySelector('.tabsLink__span'); 
const  watchSek = document.querySelector('.stopwatch__seconds');
const  watchMin = document.querySelector('.stopwatch__minutes');
const  watchHour = document.querySelector('.stopwatch__hours');

      btn.addEventListener('click', ()=>{
        if(btn.textContent == 'start'){
            btn.textContent = 'stop'
            span.classList.add('active')
        }else if(btn.textContent == 'stop'){
            btn.textContent = "clear"
            span.classList.remove('active')
            span.classList.add('active_clear')
        }else if(btn.textContent == 'clear'){
            btn.textContent = 'start'
            span.classList.remove('active_clear')
        }
      });

 function watch(){
    if(btn.textContent == 'stop'){
        watchSek.textContent++
        if(watchSek.textContent > 59){
            watchSek.textContent = 0
            watchMin.textContent++
            if(watchMin.textContent > 59){
                watchMin.textContent = 0
                watchHour.textContent++
            }
        }
    }else if(btn.textContent == 'start'){
        watchMin.textContent = 0
        watchSek.textContent = 0
        watchHour.textContent = 0
    }
    setTimeout(()=>{
        watch()
    },1000)
 }

 watch()