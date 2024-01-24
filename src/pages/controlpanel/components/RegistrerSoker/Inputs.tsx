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
    required?: boolean,
}
const toId = (str: string):string => {
    return "input-" + str;
}

const Input:React.FC<InputProps> = ({name, label, placeholder, pattern, type, error}) => {
    return (<>
        <div className="w-full">
            { label !== undefined &&
                <label className="mr-4" htmlFor={toId(name)}>{label}</label>
            }
            { error !== undefined &&
                <input name={name} id={toId(name)} type={type} placeholder={placeholder} pattern={pattern} title={error} />
            }
            { error === undefined &&
                <input name={name} id={toId(name)} type={type} placeholder={placeholder} pattern={pattern} />
            }
        </div>
    </>);
}

export const NameInput:React.FC<TextProps> = ({ name, label }) => {
    return (<>
        <Input name={name} type="text" label={label} pattern="/^[A-ZÆØÅÉÈÊËÍÎÏÓÒÔÕÖÚÙÛÜÀÁÂÃÄÇÐÑÌÏÒÓÔÕÖÙÚÛÜÝa-zæøåéèêëíîïóòôõöúùûüàáâãäçðñìïòóôõöùúûüý]*$/" error="Navnet må starte med stor bokstav, og kun ha gyldige bokstaver i seg."/>
    </>);
}
interface HasName {
    name: string,
}
export const PhoneInput:React.FC<HasName> = ({name}) => {
    return (<>
        <Input name={name} label="Telefon" placeholder="xxxxxxxx" type="tel" error="Ikke et gyldig telefonnummer."/>
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
        <div className="w-full">
            <label className="label w-full" htmlFor={toId(name)}>{label}</label>
            <select name={name} className="select w-full" id={toId(name)}>
                <option value="" disabled selected>Velg</option>
                {options.map((option) => (
                    <option value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    </>)
}