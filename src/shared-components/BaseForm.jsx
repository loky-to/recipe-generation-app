import '@/SharedComponentCss/base-form.scss'
import React, { useState } from 'react'
import BaseButton  from '@/SharedComponentsBaseButton'

// const containsEmoji = (text) => /\p{Emoji}/u.test(text)
const removeEmojis = (text) => {
    return text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}\u200d\uFE0F]/gu, '')
}

function BaseForm({ onSubmit, type, button, name, placeholder, ariaLabel, value, onChange, errorMessage, ...props }) {
    const [error, setError] = useState('')

    const handleChange = (e) => {
        let input = removeEmojis(e.target.value)
        onChange?.(input)

        // Clear error when user starts typing again
        if (input.trim() !== '') {
            setError('')
        }
    
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        if (!value || value.trim() === '') {
            // setError('Input cannot be empty.')
            return
        }
      
          onSubmit?.()
      };

    return(
        <form onSubmit={handleSubmit} >
            <main className="base-form">
                { type === "text" && (
                    <input 
                        type="text"
                        name={name}
                        placeholder={placeholder || ''}
                        aria-label={ariaLabel || ''}
                        {...props}
                        value={value}
                        onChange={handleChange}
                        
                    />
                )}
                { button && (
                    <BaseButton 
                        type="submit"
                        label={button.label}
                        className={button.className}
                        disabled={error !== ''}
                    />
                )}
            </main>
            {errorMessage && <span className="base-form__error-message">{errorMessage}</span>}
        </form>
    )
}

export default BaseForm;