// import { FormEvent, useState } from 'react'
import './App.css'
// import Button from './components/ui/Button'
import Container from './components/ui/Container'
// import Modal from './components/ui/Modal'
import NormalForm from './components/NormalForm/NormalForm'
// import MainLayout from './components/layout/MainLayout'

function App() {
  // const [modal, setModal] = useState(false)

  // const handleModalClose = () =>{
  //   setModal((prev) => !prev)
  // }

  // const handleSubmit = (e : FormEvent) =>{
  //   e.preventDefault()
  //   console.log("clicked");
  // }

  return (
    <Container>
      {/* <div className='h-screen w-full flex justify-center items-center'>
        <Button onClick={() => setModal(prev => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
         <h1>this is modal title</h1>
          <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <input className='border border-red-500' type="text" name="name" id="name" />
            <button type='submit'>Submit</button>
          </form>
          </Modal>
      </div> */}

      <NormalForm></NormalForm>
    </Container>
  )
}

export default App
