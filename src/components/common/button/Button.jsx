import './Button.css';
const Button=({
    label,
    variant,
    icon,
    onClick,
    loading,
})=>{
    return(
        <button
         className={`btn ${variant}`}
         onClick={onClick}
         disabled={loading}
         >
            {loading ?(
                <span className="spinner"></span>
            ):(
                icon && <span className="icon">{icon}</span>
            )}
            {label}
        </button>
    )
}
export default Button;