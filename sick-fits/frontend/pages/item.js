import Item from "../components/Item";

export default function item(props) {
    console.log("item.js props", props);
    return (
        <div>
            <Item query={props.query}/>
        </div>
    )
}

