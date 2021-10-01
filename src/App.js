
import {useState} from 'react'; 
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [Img, setImg] = useState('');
  


  const changeline1 = (e)=>{
    setLine1(e.target.value)

  }
  const changeline2 = (e)=>{
    setLine2(e.target.value)

  }
  const images = (e)=>{
    setImg(e.target.value)

  }
  const exportar = (e)=>{
   
    html2canvas(document.querySelector("#meme")).then(canvas => {
      document.body.appendChild(canvas)

      var imges = canvas.toDataURL("image/jpeg");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = imges;
      link.click();
  });

  }

  return (

    <div className="App">
      

      <br/>
      <br/>

      <div className='content' >
        <select onChange={images} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Select your img</option>
          <option value="negro">negro</option>
          <option value="fray">Fray</option>
        </select>


        <input onChange={changeline1} type="text"  className="form-control " placeholder='lniea 1'/>
        <br/>
        <input onChange={changeline2} type="text"  className="form-control " placeholder='lniea 1'/>
        <br/>
        <button  onClick={exportar} type="button" class="btn btn-outline-success">Export</button>
        
      </div>

        <div className='meme text-center mt-5' id='meme'>
        
          <span className='text1'>{line1}</span>
          <img className='rounded mx-auto d-block position-static'src={'/img/'+Img+'.jpg'} alt='meme'></img>
          <span  className='text2'>{line2}</span>
        
        </div>
       

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>



    </div>
  );
}

export default App;
