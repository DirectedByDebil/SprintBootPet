
import { Tag } from "../common/Tag";

import { Select, MenuItem, FormControl,
  Box,
  OutlinedInput, InputLabel
} from "@mui/material"

import { useState, useEffect } from "react";

export const MultiSelect = ({
  label='',
  disabled=false,
  items=[],
  defaultValue=[]}) => {

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    slotProps: {
      paper: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 'auto',
          backgroundColor: 'var(--bg-select-popover)'
        },
        sx: {
          '& .MuiList-root': {
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr 1fr',
            },
            gap: 2,
            padding: 2,
          },
        },
      },
    },
  };

  const [selectedItems, setSelectedItems] = useState(defaultValue);
  const [itemsMap, setItemsMap] = useState({});

  useEffect(() => {
    const map = {};

    for (const item of items) {
      const id = item.id || item;
      map[id] = item;
    }

    setItemsMap(map);

  }, [items]);


  const handleChange = (event) => {
    if (!event || !event.target || !event.target.value) return;

    const eventVal = event.target.value;
    const value = typeof eventVal === 'string' ? eventVal.split(',') : eventVal; 

    setSelectedItems(value);
  };

  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="multiple-select-label" sx={{
          color:'var(--bg-select-border)',
          '&.Mui-focused': {
            color: 'var(--bg-select-border)',
          },
        }}>
          {label}
        </InputLabel>
        <Select
          labelId="multiple-select-label"
          id="multiple-select"
          multiple
          disabled={disabled}
          value={selectedItems}
          onChange={handleChange}
          input={<OutlinedInput id="multiple-select-input" label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {
                selected.map((value) => (
                  <Tag key={value} item={itemsMap[value]} />
                ))
              }
            </Box>
          )}
          MenuProps={MenuProps}
          
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--bg-select-border)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--bg-select-border)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--bg-select-border)'
            },
            '& .MuiSelect-icon': {
              color: 'var(--bg-select-border)'
            },
          }}
        >
          {
            items.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id}>
                <Tag key={item.id} item={item} />
              </MenuItem>
            ))       
          }
        </Select>
      </FormControl>
    </>
  );
}
