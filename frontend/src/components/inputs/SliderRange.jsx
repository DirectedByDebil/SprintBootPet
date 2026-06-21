
import { Stack, Slider, Input, Typography } from '@mui/material';

import { useState, useEffect } from "react"

import { useTranslation } from 'react-i18next';

export const SliderRange = ({min=0, max=1000, step=200, minDistance=200, label=''}) => {

  const { t } = useTranslation('elements');

  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  useEffect(() => {
    setMinPrice(min);
    setMaxPrice(max);
  }, [min, max]);

  const clampValue = (isOverClamped, trueVal, falseVal) => {
    return isOverClamped ? trueVal: falseVal;
  }

  const handlePriceChanged = (event, newValue, activeThumb) => {
    let minValue = newValue[0];
    let maxValue = newValue[1];

    if (maxValue - minValue < minDistance) {
      if (activeThumb === 0) {
        maxValue = minValue + minDistance;
      } else {
        minValue = maxValue - minDistance;
      }
    }

    setMinPrice(clampValue(minValue < min, min, minValue));
    setMaxPrice(clampValue(maxValue > max, max, maxValue));
  };

  const onMinPriceInputChanged = (event) => {
    const eventNum = Number(event && event.target && event.target.value);
    const value = isNaN(eventNum) ? Number(event) : eventNum;
    if (isNaN(value)) return;

    const newValue = value < min ? min : value; 

    setMinPrice(newValue);

    if (maxPrice - newValue < minDistance) {
      const newMax = newValue + minDistance;
      setMaxPrice(clampValue(newMax > max, max, newMax));
    }
  }
  
  const onMaxPriceInputChanged = (event) => {
    const eventNum = Number(event && event.target && event.target.value);
    const value = isNaN(eventNum) ? Number(event) : eventNum;
    if (isNaN(value)) return;

    const newValue = value > max ? max : value;
    setMaxPrice(newValue);

    if (newValue - minPrice < minDistance) {
      const newMin = newValue - minDistance;
      setMinPrice(clampValue(newMin < min, min, newMin));
    }
  }

  return (
    <>
      <Stack>

        <Typography variant='subtitle1' align='center'>
          {label}
        </Typography>

        <Stack direction={'row'} spacing={2}>

          <Input placeholder={t('ui.labels.range.from')}
            value={minPrice} onChange={onMinPriceInputChanged}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: 'number',
            }}
            sx={{
              width:100,
              color:'var(--text-slider)',
              '&::before': {
                borderBottom: '1px solid var(--bg-slider)',
              },
              '&::after': {
                borderBottom: '2px solid var(--bg-slider)',
              },
            }}/>

          <Slider marks shiftStep={step} step={step} 
            sx={{color: 'var(--bg-slider)'}}
            min={min} max={max} valueLabelDisplay='auto'
            value={[minPrice, maxPrice]} onChange={handlePriceChanged}
            disableSwap/>
          
          <Input placeholder={t('ui.labels.range.to')}
            value={maxPrice} onChange={onMaxPriceInputChanged}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: 'number',
            }}
            sx={{
              width:100,
              color:'var(--text-slider)',
              '&::before': {
                borderBottom: '1px solid var(--bg-slider)',
              },
              '&::after': {
                borderBottom: '2px solid var(--bg-slider)',
              },
            }}/>

        </Stack>
      </Stack>
    </>
  );
}
