var min = 00 ;
var sec = 00 ;
var ms = 00 ;
var dismin = document.getElementById("min")
var dissec = document.getElementById("sec")
var disms = document.getElementById("ms")
var interval; 

function time(){
    ms++
    disms.innerHTML = ms
    if(ms >= 100){
        sec++
        dissec.innerHTML = sec
        ms = 00 ;
    } else if( sec >= 60){
        min++
        dismin.innerHTML = min
        sec = 00 ;
    }

} 



function start(){
interval = setInterval(time , 10)
document.getElementById('startBtn').style.display='none';

}


function pause(){
    clearInterval(interval)
    document.getElementById('startBtn').style.display='inline';
}

function stop(){
 pause()   
min = 00;   
 sec = 00;   
 ms = 00;   
dismin.innerHTML = min
dissec.innerHTML = sec
disms.innerHTML = ms

}