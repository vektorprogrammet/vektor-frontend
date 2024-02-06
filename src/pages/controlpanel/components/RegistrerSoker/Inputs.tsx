import { title } from "process"

interface TextProps {
    name: string,
    label?: string,
}
interface InputProps {
    name: string,
    type: React.HTMLInputTypeAttribute,
    error?: string,
    label?: string,
    placeholder?: string,
    pattern?: string,
}
const toId = (str: string):string => {
    return "input-" + str;
}

const Input:React.FC<InputProps> = ({name, label, placeholder, pattern, type, error}) => {
    return (<>
        <div className="w-full">
            { label !== undefined &&
                <label className="" htmlFor={toId(name)}>{label}</label>
            }
            { error !== undefined &&
                <input className="w-full" name={name} id={toId(name)} type={type} placeholder={placeholder} pattern={pattern} title={error} required/>
            }
            { error === undefined &&
                <input className="w-full" name={name} id={toId(name)} type={type} placeholder={placeholder} pattern={pattern} required/>
            }
        </div>
    </>);
}

export const NameInput:React.FC<TextProps> = ({ name, label }) => {
    return (<>
        <Input name={name} type="text" label={label} error="Navnet kan kun ha gy."/>
    </>);
}
interface HasName {
    name: string,
}
export const PhoneInput:React.FC<HasName> = ({name}) => {
    return (<>
        <Input name={name} label="Telefon" type="tel" pattern="\d{8}" error="Telefonnummeret må ha 8 siffer."/>
    </>)
}

export const EmailInput:React.FC<HasName> = ({name}) => {
    return (<>
        <Input name={name} label="Epost" placeholder="navn@navnesen.no" type="email" error="Ikke en gyldig epost." />
    </>)
}

type Option = {
    name: string,
    id: string,
}
interface SelectProps {
    name: string,
    label: string,
    options: Option[],
}

export const SelectInput:React.FC<SelectProps> = ({name, label, options}) => {
    return (<>
        <div className="w-5/6">
            <label className="" htmlFor={toId(name)}>{label}</label>
            <select name={name} className="w-5/6 mr-4" id={toId(name)} required>
                <option value="" disabled selected>Velg</option>
                {options.map((option) => (
                    <option value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    </>)
}