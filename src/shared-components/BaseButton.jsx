import '@/SharedComponentCss/base-button.scss'

export default function BaseButton({ onClick, label, className, color, size, disabled, type }) {
    const showDelete = className ? className.includes("delete-tag") : false
    const getClasses = () => {
        let classes = `base-button`
        if (className) classes += ` -${className}`
        if (color) classes += ` -${color}`
        if (size) classes += ` -${size}`

        return classes
    }

    return(
        <button 
            type={type}
            onClick={onClick}
            className={getClasses()}
            disabled={disabled}
        >
            <span>{ label }</span>
            {showDelete && (
                <img
                    src="/images/cross.svg"
                    alt="delete icon"
                    aria-hidden="true"
                    className="base-button__delete-icon"
                />
            )}
        </button>
    )
}