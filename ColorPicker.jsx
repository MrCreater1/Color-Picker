import React,{useState} from "react";
function ColorPicker(){
 const [color,setColor] = useState("#FFFFFF");
 function colorChange(event){
  setColor(event.target.value);
 }
    return(<>
        <div className="color-picker-container">
          <h1 className="color-picker-heading">Color Picker</h1>
          <div className="color-picker-body" style={{backgroundColor :color}}></div>
          <p className="watermark">Selected Color:{color}</p>
          <label htmlFor="" className="text">Select a Color:</label>
          <input type="color" name="" id="" value={color} onChange={colorChange} className="colorarea" />
        </div>
        </>
    );
}
export default ColorPicker