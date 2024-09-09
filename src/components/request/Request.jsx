import React from 'react'
import Modal from '../modal/Modal'
import Input from '../ui/Input'
import { useForm } from 'react-hook-form'
import Button from '../ui/Button'
import { RiCloseLargeLine } from "react-icons/ri";


const Request = ({isOpen, setOpenRequest}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: 'onChange'
    })

    const toggleModal = () =>{
        setOpenRequest(!open)
    }

    const onsubmit = async (data) => {
        console.log(data)
    }

  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-xl text-secondaryText'>
                    Request Movie
                </h1>
                <button className='text-xl text-secondaryText'
                onClick={toggleModal}>
                    <RiCloseLargeLine/>
                </button>
            </div>
            <p className='text-xs text-primaryText'>
                You will get a email notification once we upload your requested movie
            </p>
            <form onSubmit={handleSubmit(onsubmit)}
            className='w-full flex flex-col gap-3'>
                <Input type="text" name="name" label="Movie Name"
                {...register('name',{
                    required: 'This field is required!'
                })}
                placeHolder="Enter movie title">
                    {errors.name && <span className='text-xs text-red-600'>
                        {errors.name.message}
                    </span>}
                </Input>
                <Input type="number" name="season" label="Season (Optional)"
                {...register('season')}
                placeHolder="Enter season">
                    {errors.season && <span className='text-xs text-red-600'>
                        {errors.season.message}
                    </span>}
                </Input>

                <Button title={'Submit'} className={'mt-6'}/>
            </form>
        </div>
    </Modal>
  )
}

export default Request