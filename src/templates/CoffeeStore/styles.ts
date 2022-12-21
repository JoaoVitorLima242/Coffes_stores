import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.main`
    display: grid;
    padding-top: 1.75rem /* 28px */;
    padding-bottom: 1.75rem /* 28px */;
    padding-left: 1.75rem /* 12px */;
    padding-right: 0.75rem /* 12px */;
`

export const Layout = styled.div`
    height: 100%;
`

export const Col1 = styled.div`
    place-self: center;
`

export const BackToHomeLink = styled.div`
    margin-top: 6rem /* 96px */;
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    margin-bottom: 0.5rem /* 8px */;
    font-weight: 700;
`

export const NameWrapper = styled.div`
    margin-bottom: 1rem /* 16px */;
    margin-top: 1rem /* 16px */;
`

export const Name = styled.h1`
    ${({theme}) => css`
        color: ${theme.colors.text}
        font-size: 2.25rem /* 36px */;
        line-height: 2.5rem /* 40px */;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;    
    `}
`

export const ImageUrlWrapper = styled.div`
    padding-top: 1rem /* 16px */;
    padding-bottom: 1rem /* 16px */;
`

export const ImageUrl = styled(Image)`
    shadow: var(0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 #0000),
    0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 #0000,
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-radius: 0.75rem /* 12px */;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
`

export const Col2 = styled.div`
    
`