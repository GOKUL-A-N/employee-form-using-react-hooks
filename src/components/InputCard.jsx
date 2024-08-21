import React,{useState} from 'react'

const InputCard = (props) => {

    const [required,setRequired] = useState(false);
    
    

  return (
    <div className='flex flex-col w-full sm:w-[30%]'>
        <label>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} onChange={(e) => (e.target.value.length) > 0 ? setRequired(true) : setRequired(false)} className={`outline-purple-600 border-2 border-black w-full p-1 rounded-md ${(required || !props.required) ? 'border-gray-400' : 'border-red-600' }`} />
        <p className={`${(required || !props.required) ? 'invisible' : 'visible' } text-red-700 font-semibold text-[12px]`}>{props.warning}</p>
    </div>
  )
}

export default InputCard