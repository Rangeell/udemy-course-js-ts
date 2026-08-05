import { Outlet, useParams, useSearchParams } from 'react-router-dom';

const Posts = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();

    return (
        <div>
            <h1>Posts {id ? `Params: ${id}` : 'Geral'} {`QS: ${qs}`}</h1>
            <Outlet />
        </div>
    );
};

export default Posts;