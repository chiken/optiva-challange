import { PillProps } from '../types'

export const PillComponent = ({ id, name }: PillProps) => {
    return (
        <span className="pill">
            { name }
        </span> 
    )
}