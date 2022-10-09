import Pagination from "@mui/material/Pagination";
import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../store/movieSlice/movieSlice";

type PaginationComponentProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalNumberOfPages: number;
  postsPerPage: number;
  totalMovies: number;
  paginateHandler: (pageNumber: number) => void;
};

const MOVIES_PER_PAGE: number = 10;
let TOTAL_NUMBER_OF_PAGES: number;
let TOTAL_NUMBER_OF_MOVIES: number;

const PaginationComponent = ({
  page,
  setPage,
  totalNumberOfPages,
  postsPerPage,
  totalMovies,
  paginateHandler,
}: PaginationComponentProps) => {
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalMovies / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // const updatePageHandler = () => {
  //   setPage(page + 1);
  // };

  // const pageNumberHandler = (
  //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  //   num: number
  // ) => {
  //   event.preventDefault();
  //   paginateHandler(num);
  // };

  const movies = useSelector(getAllMovies);
  console.log(movies);

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: MOVIES_PER_PAGE,
  });

  useEffect(() => {}, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginY: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Pagination
          sx={{ fontSize: 20 }}
          count={totalNumberOfPages}
          color="primary"
          size="large"
          // onChange={updatePageHandler}
        />
      </Box>
      {/* <Box
        justifyContent="center"
        alignItems="center"
        display={"flex"}
        sx={{ textAlign: "center", display: "inline-block" }}
      >
        <ul className="">
          {pageNumbers.map((num) => (
            <li key={num}>
              <a href="#" onClick={(event) => pageNumberHandler(event, num)}>
                {num}
              </a>
            </li>
          ))}
        </ul>
      </Box> */}
    </Container>
  );
};

export default PaginationComponent;
