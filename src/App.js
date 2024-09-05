import { useState } from "react";

// import "./index.css";
const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
    return (
        <div className="container">
            <Logo />
            <Form />
            <List />
            <Stats />
        </div>
    );
}

function Logo() {
    return (
        <header>
            <h1>🏝️ Far Away 👜</h1>
        </header>
    );
}

function Form() {
    const [item, setItem] = useState("");
    const [option, setOption] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!item) return;

        const newItems = { item, option, packed: false, id: Date.now() };
        console.log(newItems);

        setItem("");
        setOption(1);
    }

    return (
        <div className="form">
            <span>Select what you need for your trip</span>
            <form onSubmit={handleSubmit}>
                <select
                    value={option}
                    onChange={(e) => setOption(parseInt(e.target.value))}
                >
                    {Array.from({ length: 20 }, (_, idx) => (
                        <option value={idx + 1} key={idx}>
                            {idx + 1}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="item..."
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
                <button type="submit">ADD</button>
            </form>
        </div>
    );
}

function List() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((itm) => (
                    <li key={itm.id}>
                        <input type="checkbox" />
                        <span>
                            {itm.packed ? (
                                <s>{`${itm.quantity} ${itm.description}`}</s> //s represents strike through
                            ) : (
                                `${itm.quantity} ${itm.description}`
                            )}
                        </span>
                        <button>❌</button>
                    </li>
                ))}
            </ul>
            <div className="btn-box">
                <select>
                    <option value="input" selected>
                        Sort by input order
                    </option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button type="reset">Clear List</button>
            </div>
        </div>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <p>You have 5 items in your list and you already packed 0. (0%)</p>
        </footer>
    );
}
