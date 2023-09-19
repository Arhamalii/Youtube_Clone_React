import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Video from "./Video";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data?.items)
    );
  }, [searchTerm]);

  return (
    <Box px={2}>
      <Typography
        variant={"h4"}
        fontWeight={"bold"}
        mb={4}
        sx={{
          color: "white",
          fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2.2rem" },
        }}
      >
        Search Result For :
        <span style={{ color: "#f31503" }}> {searchTerm} </span>
      </Typography>
      <Video videos={videos} align={"center"} />
    </Box>
  );
};

export default SearchFeed;
