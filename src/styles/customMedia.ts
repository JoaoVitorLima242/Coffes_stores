import { generateMedia } from 'styled-media-query'

/** 
  Breakpoints:
  ------------
  - xxl: min-width: 1536px; // 2 x extra large device
  - xl: min-width: 1280px; // extra large device
  - lg: min-width: 1024px; // large device
  - md: min-width: 768px; // medium device
  - sm: min-width: 640px; //small device
**/


export const customMedia = generateMedia({
    xxl: '1536px',
    xl: '1280px',
    lg: '1024px',
    md: '768px',
    sm: '640px'
})

