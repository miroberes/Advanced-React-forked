import UpdateItem from '../components/UpdateItem';

// export default ({ query }) => {
//     console.log('query', query);
//     return (
//         <div>
//             <UpdateItem id={query.id} />
//         </div>
//     );
// };

// export default function update({ query }) {
//     console.log('query', query);
//     return (
//         <div>
//             <UpdateItem id={query.id} />
//         </div>
//     );
// }

const Update = props => {
        console.log('update.js props.query', props.query);
    return (
        <div>
            <UpdateItem query={props.query} />
        </div>
    );
};

export default Update;
