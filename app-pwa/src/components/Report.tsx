import React, { useState, useEffect } from "react";
import axios from "axios";

export const Report = () => {
    const d = new Date();
    const [fecha, setFecha] = useState(
        `${d.getFullYear()}-${
            d.getMonth() > 9 ? d.getMonth() : "0" + d.getMonth()
        }-${d.getDate()}`
    );
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFecha(e.target.value);
    };

    const [reports, setReports] = useState([])
    useEffect(() => {
        const getNotes = async () => {
            try {
                const response = await axios.get(
                    `https://fathomless-atoll-57807.herokuapp.com/note?fecha=${fecha}`
                );
                setReports(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        getNotes();
    }, [fecha]);

    return (
        <>
            <input
                type="date"
                name="fecha"
                value={fecha}
                onChange={handleDate}
            />
            <br />
            
            #1 juan $140
            <ul>
                <li>2mt lona $70</li>
            </ul>

        </>
    );
};
