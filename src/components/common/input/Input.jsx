import "./Input.css";       
const Input = ({
    type,
    placeholder,
    onChange,
    icon,
    name,
    value,
    id,
    label
}) => {
    return (
        <div className="input-wrapper">
            {icon && <span className="inputIcon">{icon}</span> }
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
export default Input;