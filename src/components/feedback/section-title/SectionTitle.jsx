import { TitleStatistic } from "./SectionTitle.Styled"

export const Section = ({ title, children }) => {
    return (
        <><TitleStatistic>{title}</TitleStatistic> 
        {children}</>
    )
}