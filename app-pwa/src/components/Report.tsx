import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type ReportParams = {
    fecha: string;
};

type Venta = {
    nombre: string;
    cantidad: number;
    total: number;
    id: number;
    note_id: number;
};

type Note = {
    pk: number;
    cliente: string;
    total: number;
    anticipo: number;
    id: number;
    date: string;
    ventas: Venta[];
};

export const Report: React.FC = () => {
    const { fecha } = useParams<ReportParams>();

    const [total, setTotal] = useState<number>(0);

    const [reports, setReports] = useState<Note[]>([]);
    console.log(reports);
    useEffect(() => {
        const getNotes = async () => {
            try {
                const response = await axios.get(
                    `https://fathomless-atoll-57807.herokuapp.com/note?fecha=${fecha}`
                );
                setReports(response.data);
                const newTotal: number = response.data.reduce((t: number, nota: Note) => t+nota.total, 0)
                setTotal(newTotal)
            } catch (e) {
                console.log(e);
            }
        };
        getNotes();
    }, [fecha]);

    return (
        <>
            ventas del dia ${total}<br/>
            {reports &&
                reports.map((report) => (
                    <>
                        #{report.pk} {report.cliente} ${report.total}
                        {report.ventas &&
                            report.ventas.map((venta) => (
                                <ul>
                                    <li>
                                        {venta.cantidad} - {venta.nombre} $
                                        {venta.total}
                                    </li>
                                </ul>
                            ))}
                    </>
                ))}
        </>
    );
};
