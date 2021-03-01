import { useState } from "react"
import { useDispatch } from "react-redux";
import { createDemoAction } from "../../actions";

export const DemoForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createDemoAction({
            name
        }));
        setName('');
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={handleNameChange}/>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}