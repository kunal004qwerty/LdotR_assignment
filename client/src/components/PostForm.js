import React, { useState } from 'react'

export default function PostForm({
    onSubmit,
    submitText,
}) {

    const [values, setValues] = useState({
        name: "",
        age: "",
        email: "",
    })

    function onChange(e) {
        e.preventDefault()

        let field = e.target.name
        let value = e.target.value

        setValues(prev => ({
            ...prev,
            [field]: value
        }))
    }

    function handleClick(e) { 
        e.preventDefault()
        onSubmit(values)
        console.log("values",values);
        
    }


    return (
        <form className="p-5 border border-black flex flex-col gap-4 justify-evenly w-[400px]" onSubmit={handleClick}>
            <input
                placeholder="Name"
                type={"text"}
                name='name'
                value={values.name}
                onChange={onChange}
                required
                className="h-[50px] rounded-[10px] border-black border-[1px] border-solid  text-[18px] p-2"
            />
            <input
                placeholder="Age"
                type={"number"}
                name='age'
                value={values.age}
                onChange={onChange}
                required
                className="h-[50px] rounded-[10px] border-black border-[1px] border-solid  text-[18px] p-2"

            />
            <input
                placeholder="Email"
                type={"email"}
                name='email'
                value={values.email}
                onChange={onChange}
                required
                className="h-[50px] rounded-[10px] border-black border-[1px] border-solid  text-[18px] p-2"

            />
            <button className="bg-red-500 p-3 text-white font-bold" >
                <p>{submitText}</p>
            </button>

        </form>
    )
}
