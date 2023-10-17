import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AllMangas = () => {
    const { id } = useParams();
    const [volumes, setVolumes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/manga/${id}`).then((response) => {
            setVolumes(response.data);
        });
    }, [id]);

    if (!volumes.length) return <div>Loading...</div>;

    return (
        <div>
            {volumes.map(volume => (
                <div key={volume.id}>

                    <h3>{volume.title}</h3>
                    <img src={volume.image} alt={volume.title} />

                </div>
            ))}
        </div>
    );
}

export default AllMangas;
