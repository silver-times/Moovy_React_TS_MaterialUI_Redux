import Pagination from "@mui/material/Pagination";
import { Container, Box } from "@mui/material";

type PaginationComponentProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalNumberOfPages: number;
};

const PaginationComponent = ({
  page,
  setPage,
  totalNumberOfPages,
}: PaginationComponentProps) => {
  const updatePageHandler = () => {
    setPage(page + 1);
  };

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
          onChange={updatePageHandler}
        />
      </Box>
    </Container>
  );
};

export default PaginationComponent;
