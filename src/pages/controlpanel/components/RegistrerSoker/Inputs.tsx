const toId = (str: string):string => {
    return "input-" + str;
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
            <label className="label block" htmlFor={toId(name)}>{label}</label>
            <select name={name} className="select select-info" id={toId(name)} required>
                <option value="" disabled selected>Velg</option>
                {options.map((option) => (
                    <option value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    </>)
}