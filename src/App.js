import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines} from '@fortawesome/free-solid-svg-icons';
import ResolveDuplicate from './components/ResolveDuplicate/ResolveDuplicate'
import mock from './assets/mock'

let recordCount = 4;

function App() {
  return (
    <div className="m-10">
      <h1 className='text-2xl'>Upload Summary</h1>
      <div className='flex [&>*]:m-5'>
        <FontAwesomeIcon icon={faFileLines} style={{fontSize: "4rem", color: "orange"}}/>
        <div className="flex flex-col">
          <h3>{mock.uploadedFileName}</h3>
          <p className="text-zinc-500">{mock.fileUploaderName}</p>
        </div>
      </div>

      <div className="bg-red-100">
        <h2 className='font-bold text-xl m-5'>Some records failed to upload</h2>
        <p className='m-5'>{mock.errorMessage}</p>
      </div>

      <h4 className='font-bold'>Duplicate conflicts ({recordCount})</h4>

      <ResolveDuplicate data={mock}/>
    </div>
  );
}

export default App;
