import "./Navbutton.css"

const Navbutton =( props )=> {
    return (
        <div className={`Navbutton ${props.Styler}`}>
            <h6>{props.Button.title}</h6>
        </div>
    )
}

export default Navbutton;