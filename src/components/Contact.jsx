import React from 'react'

const Contact = () => {
  return (
    <div name='Kontakt' className='w-full h-screen bg-[#002222] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/412d96b4-a88e-4a23-9fe6-1345baa3e87b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#85C75A] text-gray-300'>Kontakt</p>
                
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Imię i Nazwisko' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='E-mail' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Wiadomość'></textarea>
            <button className='text-white border-2 hover:bg-[#85C75A] hover:border-[#85C75A] px-4 py-3 my-8 mx-auto flex items-center'>Działajmy wspólnie!</button>
        </form>
    </div>
  )
}

export default Contact