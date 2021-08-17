import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Report = () =>{
    const d = new Date()
    const [fecha, setFecha] = useState(`${d.getFullYear()}-${d.getMonth() > 9 ? d.getMonth() : '0'+d.getMonth() }-${d.getDate()}`)
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFecha(e.target.value)
    }

    useEffect(() => {
        const getNotes = async () =>{
            try{
                const response = await axios.get("https://fathomless-atoll-57807.herokuapp.com/note")
                console.log(response)
            }catch(e){
                console.log(e)
            }
        }
        getNotes()
    }, [fecha]);
    
    return (<>
        <input type="date" name='fecha' value={fecha} onChange={handleDate} />
    </>);
}
