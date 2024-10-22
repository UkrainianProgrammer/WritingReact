import {React, useEffect, useState} from "react";

const useDebounce = (text, delayTime) => {
    const [debounce, setDebounce] = useState(text);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(text);
        }, delayTime);

        return () => {
            clearTimeout(timer);
        };
    }, [text, delayTime]);

    return debounce;
}

export const DebounceQuestion = () => {
    const [text, setText] = useState("");
    const debouncedText = useDebounce(text, 1000);

    return (
        <div>
            <h2>Debounced Hook Tester</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="type something..."
                style={{ marginRight: "10px" }}
            />
            <p>Debounced value: {debouncedText}</p>
        </div>

    )
};