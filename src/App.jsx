import "./App.css";
import react, { useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [newReview, setNewReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((res) => {
      setMovieReviewList(res.data);
      console.log(res.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", { movieName: movieName, movieReview: review });
    setMovieReviewList([...movieReviewList, { movieName: movieName, movieReview: review }]);
    setMovieName("");
    setReview("");
  };
  const deleteReveiw = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`).then((res) => setMovieReviewList(res.data));
  };
  const updateReveiw = (id) => {
    Axios.put("http://localhost:3001/api/update", {
      id: id,
      movieReview: newReview,
    }).then((res) => setMovieReviewList(res.data));
    setNewReview("");
  };
  return (
    <>
      <div className="App">
        <h1>CRUD Application</h1>
        <div className="form">
          <label htmlFor="">Movie Name</label>
          <input type="text" name="movieName" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
          <label htmlFor="">Review</label>
          <input type="text" name="movieReview" value={review} onChange={(e) => setReview(e.target.value)} />

          <button onClick={submitReview}> Submit</button>

          {movieReviewList.map((r) => (
            <div className="card">
              <h1>{r.movieName}</h1>
              <p>{r.movieReview}</p>

              <button onClick={() => deleteReveiw(r.id)}>Delete</button>
              <input
                type="text"
                id="updateInput"
                value={newReview}
                onChange={(e) => {
                  setNewReview(e.target.value);
                }}
              />
              <button onClick={() => updateReveiw(r.id)}>Update</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
