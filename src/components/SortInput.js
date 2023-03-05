// ___React___________________________________________________________________________________________________________
import { useState } from "react";

// ___Redux___________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';
import { sortDataAscendent, sortDataDescendent } from './product-list/productListSlice';

const SortInput = () => {

    const [selectValue, setSelectValue] = useState("Name A-Z")

    const dispatch = useDispatch();

    const handleSelectChange = (e) => {
        const option = e.target.value;
        setSelectValue(e.target.value)

        switch(option) {
            case "Name A-Z":
                dispatch(sortDataAscendent({ property: 'name' }));
                break;
            case "Name Z-A":
                dispatch(sortDataDescendent({ property: 'name' }));
                break;
            case "Qty ascendent":
                dispatch(sortDataAscendent({ property: 'count' }));
                break;
            case "Qty descendent":
                dispatch(sortDataDescendent({ property: 'count' }));
                break;
        }
    }

    if (selectValue === "Name A-Z") {
        setTimeout(() => dispatch(sortDataAscendent({ property: 'name' })), 0)
    }

    return ( 
        <select onChange={ (e) => handleSelectChange(e) }>
            <option>Name A-Z</option>
            <option>Name Z-A</option>
            <option>Qty ascendent</option>
            <option>Qty descendent</option>
        </select>
    );
}

export default SortInput;