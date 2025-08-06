import { signal } from "@preact/signals";

const click=signal(0);
const text=signal('');
const count=signal(0);

const buttonClick=()=>{
    click.value+=1;
    console.log(`Clicked ${click.value} times!`);
}

function EventComponent(){
  return(
    <section style={"text-align: center; font-family: Arial;"}>
        <hr />
        <h2>Event Handling</h2>
        <button onClick={buttonClick}>click me!</button>
        <p><em>Check the console for logs!</em></p>
        <input onInput={(e)=> text.value=e.currentTarget.value} id="text" placeholder="Type something..."></input>
        <p><em>{text.value}</em></p>
        <input value={count.value} id="value" readOnly></input><br/>
        <button onClick={()=>count.value++}>Add+</button>
        <button onClick={()=>count.value=0}>Reset</button>
        <button onClick={()=>count.value--}>Subtract-</button>
    </section>
  );
}

export default EventComponent;