import '@/Css/recipe-header.scss'
import Image from 'next/image'
import BaseHeader from '@/SharedComponents/BaseHeader'
import robotImg from '../images/robotChef.png'

export default function RecipeHeader() {
    return(
        <BaseHeader className="recipe-header" headerText="Chef Loky" subHeaderText="Powered by OpenAI">
            <Image className="recipe-header__image" src={ robotImg } alt="robot icon" />
        </BaseHeader>
    )
}