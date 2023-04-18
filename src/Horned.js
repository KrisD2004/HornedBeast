import './App.css';
//object and this is how pictures will be rendered on the page
function HornedBeast(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image}></img>
        </div>
    )
}

export default HornedBeast