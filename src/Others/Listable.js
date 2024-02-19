import './Listable.css'


const Listable = props => {


    return (
        <div className="listable" onClick={props.onClick}>
            {props.name}
        </div>
    )
}

export default Listable;