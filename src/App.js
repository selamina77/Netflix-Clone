import './App.css';
import request from './requests';
import Row from "./Row";
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Original"fetchUrl={request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now"fetchUrl={request.fetchTrending} />
      <Row title="Top Rated Movies"fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action Movies"fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies"fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies"fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies"fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries"fetchUrl={request.fetchDocumentaries} />
      <Row title="Mystery"fetchUrl={request.fetchMystery} />
      <Row title="SciFi"fetchUrl={request.fetchSciFi} />
      <Row title="Western"fetchUrl={request.fetchWestern} />
      <Row title="Animation"fetchUrl={request.fetchAnimation} />
      <Row title="Netflix TV"fetchUrl={request.fetchTV} />
     

    </div>
  );
}

export default App;
