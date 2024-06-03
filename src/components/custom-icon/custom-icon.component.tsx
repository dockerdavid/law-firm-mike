type CustomIconProps = {
    code?: string;
    style?: React.CSSProperties;
    className?: string;
}

export const CustomIcon = ({ code = "e000", style, className="material-icons" }: CustomIconProps) => {
    return (
        <i dangerouslySetInnerHTML={{__html: `&#x${code};`}} className={className} style={style}></i>
    )
}