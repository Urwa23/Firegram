import React,{useState} from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);

    const types=['image/png','img/jpeg']
    const changeHandler=(e)=>{
        console.log("Change");
        let selected=e.target.files[0];

        console.log(selected)
        console.log(selected.type)
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }
        else{
            setFile(null)
            setError("Please select a file of valid type (png or jpeg)")
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
            </div>
        </form>
    )
}

export default UploadForm
