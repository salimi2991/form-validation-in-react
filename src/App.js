import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form } from './Components/Form/form';

function App() {
  return (
    <section className="App gradient-custom d-flex justify-content-center align-items-center min-vh-100">
    <div className='container py-5 h-100'>
      <div className='row justify-content-center align-items-center h-h-100'>
        <div className='col-12 col-lg-9 col-xl-7'>
          <div className='card shadow-lg rounded-2'>
            <div className='card-body p-4 p-md-5'>
              <h3 className='mb-4 pb-2 pb-md-0 mb-md-5 text-capitalize'>registration form</h3>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default App;
