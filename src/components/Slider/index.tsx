import * as React from 'react';
import * as S from './styles'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const MAX = 100;
const MIN = 0;
const marks = [
    {
        value: MIN,
        label: '',
    },
    {
        value: MAX,
        label: '',
    },
];

export const SliderSpicy = () => {
    const [val, setVal] = React.useState<number>(MIN);
    const handleChange = (_: Event, newValue: number | number[]) => {
        setVal(newValue as number);
    };

    return (
        <Box >
            <S.Label>Spicy</S.Label>
            <S.SliderRed
                marks={marks}
                step={10}
                value={val}
                valueLabelDisplay="auto"
                min={MIN}
                max={MAX}
                onChange={handleChange}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <S.Indicator1>Mild</S.Indicator1>
                <S.Indicator2>Hot</S.Indicator2>
           
            </Box>
        </Box>
    );
}