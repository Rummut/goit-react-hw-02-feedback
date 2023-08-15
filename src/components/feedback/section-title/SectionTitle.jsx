import { Title } from "../section-title/SectionTitle.Styled"


export const Section = ({ title, children }) => {
    return (
        <><Title>{title}</Title> 
        {children}</>
    )
}