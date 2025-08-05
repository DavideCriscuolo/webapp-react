import { useParams } from "react-router";
import { useState } from "react";

export default function FormNewRev(prop) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    vote: 1,
    text: "",
  });

  function gnrComment(e) {
    e.preventDefault();
    const url = `http://localhost:3004/movies/movie/insert/${id}`;

    if (formData.name && formData.text && formData.vote) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("commento inserito");
          console.log(data);

          prop.gnrData(); // funzione per renderizzare le recensioni del singolo film
          setFormData({ name: "", vote: 1, text: "" });
        });
    }
    // renderizzare le nuove recensioni inserite nel singolo film
  }
  return (
    <div className="container p-3">
      <h4>Inserisci una nuova Recensione</h4>
      <form action="post" onSubmit={gnrComment}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Nickname
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="helpId"
            placeholder="Inserire il tuo Nickname"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Voto
          </label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            name="vote"
            id="vote"
            aria-describedby="helpId"
            placeholder="Inserire il voto"
            value={formData.vote}
            onChange={(e) =>
              setFormData({ ...prop, ...formData, vote: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Commento
          </label>
          <textarea
            className="form-control"
            name="yext"
            id="text"
            rows="3"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Invia
        </button>
      </form>
    </div>
  );
}
