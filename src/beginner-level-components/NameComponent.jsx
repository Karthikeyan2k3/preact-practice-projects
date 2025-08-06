import { signal } from "@preact/signals";

const name=signal('World');

function NameComponent(){
    return(
        <section style={"text-align: center; font-family: Arial;"}>
            <h2>Hello World Variations</h2>
            <input type='text' value={name.value} onInput={e => name.value = e.currentTarget.value} id="input"/>
            <p style={'color: violet;'}><em>Hello, {name.value}!</em></p>
        </section>
    );
}

export default NameComponent;