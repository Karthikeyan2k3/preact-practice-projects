import { signal, effect } from "@preact/signals";

const time = signal(displayTimer());
const onTimer = signal(false);

function displayTimer(){
    const currentTime=new Date();
    let hours=currentTime.getHours();
    let mins=currentTime.getMinutes();
    let secs=currentTime.getSeconds();
    let ampm= hours >=12 ? 'pm' : 'am'; 
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs; 
    hours = hours%12;
    return `${hours}:${mins}:${secs} ${ampm}` ;
}

effect(()=>{
    let interval;
    if (onTimer.value){
        interval=setInterval(()=>{
            time.value=displayTimer()
        }, 1000);
    }
    return () => clearInterval(interval);
})

function ClockComponent(){
    return (
        <section>
            <h1 style={'font-family : Arial;'}>{time.value}</h1>
            <button onClick={()=> onTimer.value = !onTimer.value}>
                {onTimer.value ? 'Stop' : 'Start'}
            </button>
        </section>
    );
}

export default ClockComponent;