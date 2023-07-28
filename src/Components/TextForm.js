import React, { useState } from 'react'
import PropsTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }

    const handleLowClick = ()=> {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }

    const handleClearClick = ()=> {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handlePalClick = ()=> {
        let strArr = text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        if(newText === text){
            alert("The Given Word is a Palindrome");
        }
        else{
            alert("Not a Palindrome");
        }
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }



    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const [text, setText] = useState("")

    return (
        <>
                <div className="container my-3"  style={{color: props.mode==='dark'?'white':'light'}}>
                    <div className="mb-3"  style={{color: props.mode==='dark'?'white':'light'}}>
                        <h3><label htmlFor="myBox" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</label></h3>
                        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} placeholder='Enter Text Here to process'></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary mx-4" onClick={handleLowClick}>Convert to Lower Case</button>
                    <button className="btn btn-primary" onClick={handlePalClick}>Palindrome Check</button>
                    <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    

                </div>
            
            
            <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the text box above to preview"}</p>
            </div>

         
        
        </>
    )
}

TextForm.prototype = {
    heading: PropsTypes.string
}
