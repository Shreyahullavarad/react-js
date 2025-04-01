import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
        <button>count : {count} </button>
    </div>
    );
}export default function App() {
    return <button>click me</button>;
    // in above you we are not using (), as it has only one tag.
} 