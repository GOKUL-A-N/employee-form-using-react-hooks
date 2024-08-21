import React,{useState} from 'react'

const InputOptionCard = (props) => {

    const [required, setRequired] = useState(false);

    InputOptionCard.defaultProps = {
      options: []  // Set an empty array as default
    };
  
    return (
      <div className='flex flex-col w-full sm:w-[30%]'>
        <label>{props.label}</label>
        <select
          type={props.type}
          onChange={(e) => (e.target.value.length) > 0 ? setRequired(true) : setRequired(false)}
          className={`outline-purple-600 border-2 border-black w-full p-1 rounded-md ${(required || !props.required) ? 'border-gray-400' : 'border-red-600' }`}
        >
          {props.options.map((option, index) => {
            return (<option key={index} value={option}>{option}</option>);
          })}
        </select>
        <p className={`${(required || !props.required) ? 'invisible' : 'visible' } text-red-700 font-semibold text-[12px]`}>{props.warning}</p>
      </div>
    );
}

export default InputOptionCard