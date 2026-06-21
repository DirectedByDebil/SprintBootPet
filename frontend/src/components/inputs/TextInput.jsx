
import { TextField } from "@mui/material";

export const TextInput = ({label=''}) => {

  return(
    <>
      <TextField fullWidth id="search-input" label={label} type="search"
        sx={{
          '& .MuiOutlinedInput-root': {
            color:'var(--text-primary)',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--bg-select-border)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--bg-select-border)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--bg-select-border)',
            },
          },

          '& .MuiInputLabel-root': {
            color: 'var(--bg-select-border)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--bg-select-border)',
          },
        }}
      />
    </>
  );
}
