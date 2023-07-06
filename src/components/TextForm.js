import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
            let newText = text.toLowerCase();
            setText(newText)
    }
    const clear = () =>{
        let newText = '';
        setText(newText)
    }
    const handleCapitalise = () => {
        const lowerCase = text.toLowerCase();
        const handle = lowerCase[0].toUpperCase() + lowerCase.slice(1);
        setText(handle);
      };
    function handleOnChange(event) {
        // console.log("Onchanged");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'  style={{backgroundColor: props.mode==='light'?'white':'#213a81'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#213a81':'white', color: props.mode==='light'?'#213a81':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={clear}>Clear</button>
        <button className='btn btn-primary mx-2' onClick={handleCapitalise}>Captalise</button>
    </div>
    <div className='container my-2'  style={{backgroundColor: props.mode==='light'?'white':'#213a81'}}>
        <h2>Your text summary</h2>  
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the Text box"}</p>
    </div>
    </>
  )
}
