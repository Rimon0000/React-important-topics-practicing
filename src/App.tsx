import { useState } from 'react'
import './App.css'
import Button from './components/ui/Button'
import Container from './components/ui/Container'
import Modal from './components/ui/Modal'
// import MainLayout from './components/layout/MainLayout'

function App() {
  const [modal, setModal] = useState(false)

  const handleModalClose = () =>{
    setModal((prev) => !prev)
  }

  return (
    <Container>
      <div className='h-screen w-full flex justify-center items-center'>
        <Button onClick={() => setModal(prev => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
         <h1>this is modal title</h1>
          <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <p>This is a Modal Content</p>
          </Modal>
      </div>
    </Container>
  )
}

export default App
