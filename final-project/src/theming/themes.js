import {createTheme} from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        primary: {
          light: '#799ba2',
          main: '#58828B',
          dark: '#3d5b61'
        },
        secondary: {
          light: '#7ea89f',
          main: '#5E9387',
          dark: '#41665e'
        },
        text: {
          main: '#fff'
        }
    }
})

export const lightTheme = createTheme({
    palette: {
        primary: {
          light: '#f4f4ad',
          main: '#F2F299',
          dark: '#a9a96b'
        },
        secondary: {
          light: '#d3e7b0',
          main: '#C8E29D',
          dark: '#8c9e6d'
        },
        text: {
          main: '#000'
        }
    }
})