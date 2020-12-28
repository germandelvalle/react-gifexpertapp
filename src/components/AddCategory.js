import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories,categories}) => {


    const [inputValue, setInputValue] = useState('');

    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSumbit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories([inputValue,...categories])
            setInputValue('')
        }
        
    }
    return (
        <form onSubmit={handleSumbit}>
            
            <input 
            type="text"
            value={inputValue}
            onChange={handleChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}