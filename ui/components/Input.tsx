import { useId } from 'react'

import inputStyles from '@/ui/styles/baseInputs.module.sass'

interface TextFieldProps {
    name: string
    label?: string
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    autoComplete?: string
    required?: boolean
}

function getAutoComplete(type: 'text' | 'email' | 'password'): string {
    switch (type) {
        case 'email': return 'email'
        case 'password': return 'current-password'
        default: return 'off'
    }
}

export default function TextField({
        name, label, type = 'text', placeholder, autoComplete: autoCompleteProp, required,
    }: TextFieldProps) {

    const id = useId()
    const autoComplete = autoCompleteProp || getAutoComplete(type)

    return (
        <div className={inputStyles.wrapper}>
            <label
            className={inputStyles.label}
            htmlFor={id}>
                {label}
            </label>
            <div className={inputStyles.default}>
                <input
                    className={inputStyles.default}
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    autoComplete={autoComplete}
                    >
                </input>
            </div>
        </div>
    )

}