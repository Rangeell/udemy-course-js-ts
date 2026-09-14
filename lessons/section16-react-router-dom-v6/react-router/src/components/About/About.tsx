import { useLocation } from 'react-router-dom';

const About = () => {
    const { state } = useLocation();

    return (
        <div>
            <h1>About</h1>
            <p>{state as string}</p>
        </div>
    );
};

export default About;