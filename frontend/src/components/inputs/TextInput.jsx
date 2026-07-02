
import { TextField } from "@mui/material";

export const TextInput = ({
  label='',
  id='search-input',
  name='',
  value='',
  disabled=false
}) => {

  return(
    <>
      <TextField fullWidth
        id={id}
        name={name}
        label={label}
        type="search"
        value={value}
        disabled={disabled}

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
