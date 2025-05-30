import '@/SharedComponentCss/base-header.scss'

export default function BaseHeader({ children, className, headerText, subHeaderText, ...props }) {
    return(
        <header className={`base-header ${className}`} {...props}>
            { children }
            <span className="base-header__text-wrap">
            <span className="base-header__main">{headerText}</span>
            {subHeaderText && (
            <span className="base-header__subheader">{subHeaderText}</span>
            )}
        </span>
        </header>
    )
}