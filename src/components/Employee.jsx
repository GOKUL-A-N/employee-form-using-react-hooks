import React from 'react'
import InputCard from './InputCard'
import InputOptionCard from './InputOptionCard'

const Employee = () => {

    const fields = [
        {
            label:"First Name",
            placeholder:"Enter your first name",
            warning:"First Name is required",
            required: true,
            type:"text"
        },
        {
            label:"Middle Name",
            placeholder:"Enter your middle name",
            warning:"",
            required: false,
            type:"text"
        },
        {
            label:"Last Name",
            placeholder:"Enter your last name",
            warning:"Last Name is required",
            required: true,
            type:"text"
        },
        {
            label:"Birth Date",
            placeholder:"Enter your DOB",
            warning:"Date is required",
            required: true,
            type:"date"
        },
        {
            label:"Email",
            placeholder:"Enter your email",
            warning:"Email is required",
            required: true,
            type:"email"
        },
        {
            label:"Phone Number",
            placeholder:"Enter your Phone Number",
            warning:"Phone Number is required",
            required: true,
            type:"number"
        },
        {
            label:"Select Gender",
            options:["","Male", "Female"],
            warning:"Gender is required",
            required: true,
            type:"select"
        },
        {
            label:"Start time",
            placeholder:"",
            warning:"Start time is required",
            required: true,
            type:"time"
        },
        {
            label:"End time",
            placeholder:"",
            warning:"End time is required",
            required: true,
            type:"time"
        },
        {
            label:"Job Position",
            placeholder:"Enter your Job Position",
            warning:"Job Position is required",
            required: true,
            type:"text"
        },
        {
            label:"Select Teams",
            options:["","Team A","Team B","Team C"],
            warning: "required",
            required: true,
            type:"select"
        },
        {
            label:"Select Designation",
            options:["","FrontEnd","BackEnd","Database"],
            warning:"Required",
            required: true,
            type:"select"
        },
        {
            label:"Billing Hours",
            placeholder:"Enter your Billing Hours",
            warning:"Billing Hours is required and must be positive number",
            required: true,
            type:"number"
        },
        {
            label:"Is Billable",
            type:"checkbox",
        }
    ]

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='flex items-center justify-center h-full w-full flex-col'>
            <h1 className='font-bold text-[25px]'>Employee Form</h1>
            <form className='flex flex-wrap w-[100%] md:[w-80%] items-center justify-start p-4 gap-3'>
                {
                    fields.map((field,index)=>{
                        if(field.type === 'text' || field.type === 'email' || field.type === 'number' || field.type === 'date' || field.type === 'time'){
                            return (
                                <InputCard
                                    key={index}
                                    label={field.label}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    warning={field.warning}
                                    required={field.required}
                                />
                            )
                        }else if(field.type ==='select'){
                            return (
                                <InputOptionCard 
                                    key={index}
                                    label={field.label}
                                    options={field.options}
                                    warning={field.warning}
                                    required={field.required}
                                    type={field.type}
                                />
                            )
                        }else{
                            return(
                                <div>
                                    <label>{field.label}</label>
                                    <input type="checkbox" />
                                </div>
                            )
                        }
                    })
                }
            </form>
            <div className='w-full p-4 flex items-center justify-center '><button className='bg-blue-600 p-2 text-white rounded-md'>Submit</button></div>
        </div>
    </div>
  )
}

export default Employee