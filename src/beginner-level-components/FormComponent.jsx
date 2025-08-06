import { signal } from "@preact/signals";

const name=signal('');
const password=signal('');
const submitted=signal(false);
const error=signal(false);
const showData=signal(false);

function FormComponent(){

    const handleSubmit=(e)=>{
        e.preventDefault();
        submitted.value=true;
        if(!name.value || !password.value){
            error.value=true;
            showData.value = false;
            return;
        }
        error.value=false;
        showData.value=true;
    }

    return (
        <>
        <hr />
        <form onSubmit={handleSubmit} style={"text-align: center; font-family: Arial;"}>
            <h2>Login Form</h2>
            <label htmlFor="uname">Username:</label><br/>
            <input type="text" value={name.value} onInput={(e)=> name.value=e.currentTarget.value} id="uname"></input><br/>
            {submitted.value && error.value && (<p style={"color: red; font-size: 0.7em;"}>username required</p>)}
            <label htmlFor="pwd">Password:</label><br/>
            <input type="password" value={password.value} onInput={(e)=> password.value=e.currentTarget.value} id="pwd"></input><br/>
            {submitted.value && error.value && (<p style={"color: red; font-size: 0.7rem;"}>password required</p>)}
            <button type="submit">Login</button><br/>
        </form>
        {submitted.value && showData.value && (
            <div>
                <p style={{ color: 'green' }}>Login successful!</p>
                <p><strong>Entered Username:</strong> {name.value}</p>
                <p><strong>Entered Password:</strong> {password.value}</p>
            </div>
            )}
        </>
    );
}

export default FormComponent;