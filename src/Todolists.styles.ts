import {SxProps} from '@mui/material/styles';

export const filterButtonContainerSx: sxProps = {
    p: 0, display: "flex",
    justifyContent: 'space-between'
}

export const getListItemSx = (isDone: boolean): sxProps => ({
    p: 0,
    justifyContent: 'space-between',
    opacity: isDone ? 0.5 : 1
})