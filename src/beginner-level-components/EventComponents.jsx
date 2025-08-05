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
    <section>
        <h2 style={"font-family: Arial;"}>Event Handling</h2>
        <ul style={'font-family: Arial;'}>
            <p>This section covers the below mentioned Event handlers </p>
            <li>onInput</li>
            <li>onClick</li>
        </ul>
        <button onClick={buttonClick}>click me!</button>
        <p><em>Check the console for logs!</em></p>
        <input onInput={(e)=> text.value=e.currentTarget.value} placeholder="Type something..."></input>
        <p><em>{text.value}</em></p>
        <button onClick={()=>count.value++}>Add+</button>
        <input value={count.value} readOnly></input>
        <button onClick={()=>count.value--}>Subtract-</button>
        <button onClick={()=>count.value=0}>Reset</button>
    </section>
  );
}

export default EventComponent;