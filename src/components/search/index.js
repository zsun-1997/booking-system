import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const SearchBar = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          flexBasis: "100%",
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          placeholder="Search here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
