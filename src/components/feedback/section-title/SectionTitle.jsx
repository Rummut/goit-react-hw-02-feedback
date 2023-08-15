import { Title } from "./SectionTitle.Styled"


export const Section = ({ title, children }) => {
    return (
        <><Title>{title}</Title> 
        {children}</>
    )
}