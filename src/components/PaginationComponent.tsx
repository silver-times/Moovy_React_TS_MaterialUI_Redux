import Pagination from "@mui/material/Pagination";

type PaginationComponentProps = {
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationComponent = ({
  totalPages,
  setPage,
}: PaginationComponentProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Pagination
        count={totalPages}
        color="primary"
        size="large"
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationComponent;
