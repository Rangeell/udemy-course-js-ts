import { useParams, useSearchParams } from 'react-router-dom';

const Post = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();

    return (
        <div>
            <h1>Posts {id ? `Params: ${id}` : 'Geral'} {`QS: ${qs}`}</h1>
        </div>
    );
};

export default Post;