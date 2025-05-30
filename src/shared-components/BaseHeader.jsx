import '@/SharedComponentCss/base-header.scss'

export default function BaseHeader({ children, className, headerText, ...props }) {
    return(
        <header className={`base-header ${className}`} {...props}>
            { children }
            <span>{headerText}</span>
        </header>
    )
}