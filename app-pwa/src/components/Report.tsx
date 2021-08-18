import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type ReportParams = {
    fecha: string;
};

export const Report = () => {
    const { fecha } = useParams<ReportParams>();

    const [reports, setReports] = useState([]);
    console.log(reports);
    useEffect(() => {
        const getNotes = async () => {
            try {
                const response = await axios.get(
                    `https://fathomless-atoll-57807.herokuapp.com/note?fecha=${fecha}`
                );
                setReports(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        getNotes();
    }, [fecha]);

    return (
        <>
            {reports && reports.map((report) => <>#hola</>)}
            #1 juan $140
            <ul>
                <li>2mt lona $70</li>
            </ul>
        </>
    );
};
