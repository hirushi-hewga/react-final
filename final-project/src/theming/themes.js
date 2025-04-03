import {createTheme} from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        primary: {
          light: '#464f3f',
          main: '#18230F',
          dark: '#10180a'
        },
        secondary: {
          light: '#526049',
          main: '#27391C',
          dark: '#1b2713'
        },
        text: {
          main: '#fff'
        }
    }
})

export const lightTheme = createTheme({
    palette: {
        primary: {
          light: '#4b9775',
          main: '#1F7D53',
          dark: '#15573a'
        },
        secondary: {
          light: '#507f5f',
          main: '#255F38',
          dark: '#194227'
        },
        text: {
          main: '#000'
        }
    }
})