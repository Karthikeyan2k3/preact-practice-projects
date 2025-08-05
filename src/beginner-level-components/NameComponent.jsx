import { signal } from "@preact/signals";

const name=signal('World');

function NameComponent(){
    return(
        <section>
            <input type='text' value={name.value}
             onInput={e => name.value = e.currentTarget.value} />
            <p style={'color: violet;'}><em>Hello, {name.value}!</em></p>
        </section>
    );
}

export default NameComponent;