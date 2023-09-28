
import './App.css';
import Form from './components/Form';
import emailImg from './email-img.png'

function App() {
  return (
    <div style={{height:'100vh'}}  className='banner d-flex justify-content-space-around justify-content-center text-light '>
     <div style={{height:'80vh',margin:'50px 0'}} className='contact-main  rounded'>
       
       <div style={{
        height:'80vh',
        width:'500px',
        background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://www.yrcharisma.com/wp-content/uploads/2021/04/Beginners-guide-to-copywriting-scaled.jpeg")',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundAttachment: 'fixed',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        
       }} className="contact text-center ">
        <img style={{width:'130px',margin:'0px auto'}}  src={emailImg} alt="" className='d-flex flex-column' />
          <h2 className='text-light fs-5 p-3'> If you have questions or just want to get in touch,use the form. We look forward to hearing from you! </h2>
       </div>
       <div style={{width:'50%',height:'80vh'}} className="contact-form bg-light  p-5">
         
            <Form />
       </div>
     </div>
    </div>
  );
}

export default App;
