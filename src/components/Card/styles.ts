import Link from "next/link";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import Image from "next/image";
import { customMedia } from "../../styles/customMedia";
import { GlassContainer } from "../../styles/GlassContainer";

export const CardLink = styled.a`
    ${() => css`
        margin: auto;
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        box-shadow: 0 0 transparent, 0 0 #0000, 0 0 transparent, 0 0 #0000,
            0 0 transparent;

        border-color: ${theme.colors.textWhite};
        border-radius: 0.75rem /* 12px */;
    `}
`

export const Container = styled(GlassContainer)`
    border-radius: 0.75rem /* 12px */;
    padding-top: 0.25rem /* 4px */;
    padding-bottom: 0.25rem /* 4px */;
    padding-bottom: 1.25rem /* 20px */;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;

    backdrop-filter: blur(10px);
`

export const CardHeaderWrapper = styled.div`
    margin-top: 0.75rem /* 12px */;
    margin-bottom: 0.75rem /* 12px */;
`

export const CardHeaderText = styled.h2`
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 800;
    overflow: hidden;
    width: 16rem /* 256px */;
`

export const CardImageWrapper = styled.div`
    ${({theme}) => css`
        color: ${theme.colors.textWhite};
    `}
`

export const CardImage = styled(Image)`
    border-radius: 0.75rem /* 12px */;
`