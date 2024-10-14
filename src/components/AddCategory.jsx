import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        // console.log(target.value)
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue)
        if (inputValue.trim().length < 1) return;
        onNewCategory(inputValue.trim())
        // setCategories(categories => [inputValue, ...categories])
        setinputValue ('')
    }
    
    return (
        <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="buscar-gifs"
            value={inputValue}
            onChange={onInputChange}
        />
        </form>
    )
}