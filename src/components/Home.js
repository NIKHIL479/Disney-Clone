import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));

        const fetchedMovies = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        let newRecommends = [];
        let newNewDisneys = [];
        let newOriginals = [];
        let newTrending = [];

        fetchedMovies.forEach((movie) => {
          switch (movie.type) {
            case "recommend":
              newRecommends = [...newRecommends, movie];
              break;
            case "new":
              newNewDisneys = [...newNewDisneys, movie];
              break;
            case "original":
              newOriginals = [...newOriginals, movie];
              break;
            case "trending":
              newTrending = [...newTrending, movie];
              break;
            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend: newRecommends,
            newDisney: newNewDisneys,
            original: newOriginals,
            trending: newTrending,
          })
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
