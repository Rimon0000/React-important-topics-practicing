// import { FormEvent, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import './App.css'
import { Form, FormSection, FormSubmit, Input } from './components/ReusableForm'
// import Button from './components/ui/Button'
import Container from './components/ui/Container'
import { z } from 'zod'
// import Modal from './components/ui/Modal'
// import NormalForm from './components/NormalForm/NormalForm'
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


  const {register, handleSubmit, formState: {errors}} = useForm<TTest>()

  const onSubmit = (data: FieldValues) =>{
    console.log(data);
  }

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  })
  
  type TTest = z.infer<typeof TestSchema>

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

      {/* <NormalForm></NormalForm> */}

    <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
      <FormSection>
        <div className="w-full max-w-md">
            <label className="block" htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (<span className="text-xs text-red-500">{errors.name.message}</span>)}
        </div>
        <Input type="email" register={register("email")} errors={errors} label="Email"></Input>
      </FormSection>
      <FormSubmit></FormSubmit>
    </Form> 

    </Container>
  )
}

export default App
