import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* Fonts */
    @font-face {
        font-family: 'SUIT';
        font-weight: 300;
        src: local('SUIT') url(/fonts/SUIT-Regular.woff2) format('woff2'), local('SUIT'), url(/fonts/SUIT-Regular.woff2) format('woff2');
        font-display: swap;
    }

    @font-face {
        font-family: 'SUIT';
        font-weight: 400;
        src: local('SUIT') url(/fonts/SUIT-Medium.woff2) format('woff2'), local('SUIT'), url(/fonts/SUIT-Medium.woff2) format('woff2');
        font-display: swap;
    }

    @font-face {
        font-family: 'SUIT';
        font-weight: 450;
        src: local('SUIT') url(/fonts/SUIT-SemiBold.woff2) format('woff2'), local('SUIT'), url(/fonts/SUIT-SemiBold.woff2) format('woff2');
        font-display: swap;
    }

    @font-face {
        font-family: 'SUIT';
        font-weight: 500;
        src: local('SUIT') url(/fonts/SUIT-Bold.woff2) format('woff2'), local('SUIT'), url(/fonts/SUIT-Bold.woff2) format('woff2');
        font-display: swap;
    }

    @font-face {
        font-family: 'SUIT';
        font-weight: 700;
        src: local('SUIT') url(/fonts/SUIT-ExtraBold.woff2) format('woff2'), local('SUIT'), url(/fonts/SUIT-ExtraBold.woff2) format('woff2');
        font-display: swap;
    }

    /* Reset Styles */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* Cross-Browsing 스타일 초기화 */
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    select:focus {
        outline: none;
    }
    /* input 스타일 제거 */
    input,
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        /* -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none; */
    }
    select::-ms-expand,
    input::-ms-clear,
    input[type='password']::-ms-reveal,
    input[type='password']::-ms-clear {
        display: none;
    }
    input::-ms-clear,
    input::-ms-reveal {
        display: none;
    }
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration {
        display: none;
    }

    /* Custom Styles */
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding:0;

    }

    input, button, body, option, select {
        font-family: 'SUIT';
        font-weight: 300;
    }

    div, input, section, p, main, td, tr, th, form {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        box-sizing: border-box;
    }
`

//커스텀 해상도
const customViewports = {
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px',
        },
    },
    kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
            width: '533px',
            height: '801px',
        },
    },
}

export const preview: Preview = {
    parameters: {
        viewport: {
            viewports: {
                ...INITIAL_VIEWPORTS,
                ...MINIMAL_VIEWPORTS,
                ...customViewports,
            },
            defaultViewport: 'iphone14promax',
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

//decorators 적용
export const decorators = [
    withThemeFromJSXProvider({
        GlobalStyles,
    }),
]