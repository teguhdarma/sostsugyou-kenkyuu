import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const [value, setValue] = React.useState<string>('');
    const [prompt, setPrompt] = React.useState<string>('');
    const [completion, setCompletion] = React.useState<string>('');

    const handleInput = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        }, []);

    const handleKeyDown = React.useCallback(
        async (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                setPrompt(value);
                setCompletion('Loading...');
                const response = await fetch('/api/hello', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: value }),
                });
                const data = await response.json();
                setValue('');
                setCompletion(data.result.choices[0].text);
            }
        }, [value]);

    return (
        <div className={styles.main}>
            <div>何か書いてください</div>
            <input value={value} onChange={handleInput} onKeyDown={handleKeyDown} />
            <div>恐らく {prompt}</div>
            <div>返事： {completion.split('\n').map(item => <>{item}<br /></>)}</div>
        </div>
    );
};

export default Home;