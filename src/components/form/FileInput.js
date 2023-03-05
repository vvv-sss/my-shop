// ___React___________________________________________________________________________________________________________
import React from "react";
import { useState } from "react";
// ___Redux___________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';
// ___Assets__________________________________________________________________________________________________________
import ImageIcon from '../../assets/icons/image_icon.png';

const FileInput = ({ action }) => {

    const [imageName, setImageName] = useState("");
    const dispatch = useDispatch();

    const handleFileInputChange = (e) => {
        const value = e.target.value;
        const urlEndpoint = e.target.files[0].name;
        setImageName(value);
        dispatch(action(urlEndpoint));
    }

    return ( 
        <div className='file-upload'>
            <label htmlFor='add-product-file'>
                Browse the image...
                <img src={ ImageIcon } />
            </label>
            <input 
                type='file'
                id='add-product-file'
                onChange={ (e) => handleFileInputChange(e) }
            />
            <span>{ imageName }</span>
        </div>
    );
}

export default FileInput;