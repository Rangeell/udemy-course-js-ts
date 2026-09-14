import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setTime(prevTime => prevTime - 1); // Subtrai -1  do valor mais recente da variável 'time'

            if (time <= 0) {
                navigate('/about', {
                    state: `This is the state: ${Math.random()}`,
                });
            }

            return () => {
                clearTimeout(timeout.current);
            };

        }, 1000);
    });

    return (
        <div>
            <h1>Get out of here in: {time}s</h1>
        </div>
    );
};

export default Redirect;