import { TransferFileUpload, TransferGetFilesLogic } from '../../Business/TransferLogic';
import { useAppSelector } from '../../StateManager/hooks';
import React, { useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const FileImport: React.FC = () => {
    const file = useAppSelector(slice => slice.TransferSlice.FileUpload);
    const files = useAppSelector(slice => slice.TransferSlice.Files);

    useEffect(() => {
        TransferGetFilesLogic();
    },[]);

    const selectFile = (id:string) => {
        
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.currentTarget){
            const formData = new FormData(e.currentTarget);
            TransferFileUpload(formData);
        }
    }

    return (
        <div className='flex'>
            <div className='w-1/5 bg-gray-900 h-screen p-4 text-white shadow-lg overflow-y-auto'>
                <h2 className='text-2xl mb-4 text-center font-bold'>Geçmiş</h2>
                <ul className='space-y-2'>
                    {
                        files.length > 0 && 
                        files.map((file, index) => (
                            <li key={index} className='mb-2 p-4 text-base font-normal my-2 text-white rounded-lg bg-gray-800 transition-colors duration-200 shadow-lg hover:bg-gray-700'>
                                <div className='flex flex-col items-start'>
                                    <div className='flex w-full justify-between items-center mb-2'>
                                        <h1 className='text-white font-semibold transition-colors duration-200'>{file.fileName}</h1>
                                        <button className='text-red-500 hover:text-red-300 transition-colors duration-200'>
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                    <span className='text-gray-400'>{new Date(file.createdDate).toLocaleDateString()}</span>
                                </div>
                                <div className='flex justify-end'>
                                    <Button variant='outline-success'>Görüntüle</Button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-3/4'>
                <Container>
                    <div className='flex flex-col mt-3 h-auto'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-4xl text-center'>Dosya Aktar</h1>
                            <p className='text-center'>Buraya dosyanızı sürükleyip bırakarak dosya aktarımı yapabilirsiniz.</p>
                            <div className='flex justify-center'>
                                <form onSubmit={(e) => { handleSubmit(e) }} className='flex flex-col items-center gap-4'>
                                    <div className='flex flex-col items-center gap-4'>
                                        <label className='block'>
                                            <span className='sr-only'>Choose file</span>
                                            <input type='file' name='file' className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors duration-200' 
                                                onDragOver={(e) => e.preventDefault()} 
                                                onDrop={(e) => {
                                                    e.preventDefault();
                                                    const files = e.dataTransfer.files;
                                                    console.log(files);
                                                }} 
                                            />
                                        </label>
                                        <button type='submit' className='px-6 py-2 border border-green-600 text-green-600 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-transform duration-500 transform hover:rotate-3'>
                                            Upload File
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='mt-5 flex justify-center overflow-x-auto'>
                            <Table striped bordered hover className='w-auto'>
                                <thead>
                                    <tr>
                                        {file.keys && <th>#</th>}
                                        {file.keys &&
                                            file.keys.map((key, index) => {
                                                return <th key={index}>{key}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {file.values &&
                                        file.values.map((value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    {file.keys.map((key, index) => {
                                                        return <td key={index}>{typeof(value) === "object" ? Object(value)[key] : typeof(value)}</td>
                                                    })}
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default FileImport;
