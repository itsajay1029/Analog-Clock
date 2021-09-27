const hour=document.getElementById('hour') ,
        sec=document.getElementById('sec'),
        min=document.getElementById('min');

        const clock=()=>{


            let date=new Date();

            let hh=date.getHours()*30,
                mm=date.getMinutes()*6,
                ss=date.getSeconds()*6;

            hour.style.transform=`rotateZ(${hh+mm/12}deg)`
            min.style.transform=`rotateZ(${mm}deg)`
            sec.style.transform=`rotateZ(${ss}deg)`


        }
        setInterval(clock,1000);


const textHour=document.getElementById('text-hour'),
        textMin=document.getElementById('text-min'),
        textAM=document.getElementById('text-am'),
        dateDay=document.getElementById('date-day'),
        dateMonth=document.getElementById('date-month'),
        dateYear=document.getElementById('date-year');

const clockText=()=>{
    let date=new Date();

    let hh=date.getHours(),
        mm=date.getMinutes(),
        am,
        day=date.getDate(),
        month=date.getMonth(),
        year=date.getFullYear();

    if(hh>=12){
        hh=hh-12;
        am='pm';
    }else{
        am='am';
    }

    if(hh==0) hh=12;

    if(hh<10) hh=`0${hh}`

    textHour.innerHTML=`${hh}:`;
    if(mm<10) mm=`0${mm}`
    textMin.innerHTML=`${mm}`;
    textAM.innerHTML=`${am}`

    let months=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];

    dateDay.innerHTML=`${day}`
    dateMonth.innerHTML=months[`${month}`]
    dateYear.innerHTML=`${year}`



}

setInterval(clockText,1000);

const container=document.querySelector('.container');
const textArea=document.querySelector('.clock_text');
const dateArea=document.querySelector('.clock_date');
const clockArea=document.querySelector('.clock__circle');
const iconArea=document.querySelector('#icon');

document.querySelector('#theme').addEventListener('click',()=>{
    console.log('click')
    container.classList.toggle('dark-theme')
    textArea.classList.toggle('d1')
    dateArea.classList.toggle('d1')
    clockArea.classList.toggle('d3')
    hour.classList.toggle('d2')
    min.classList.toggle('d2')
    sec.classList.toggle('d4')
    
    iconArea.classList.toggle('bxs-sun')
    iconArea.classList.toggle('d1')
})