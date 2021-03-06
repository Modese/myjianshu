import {createGlobalStyle} from 'styled-components'

export const Icons = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1563182315105'); /* IE9 */
    src: url('./iconfont.eot?t=1563182315105#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
         url('./iconfont.woff?t=1563182315105') format('woff'),
         url('./iconfont.ttf?t=1563182315105') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
         url('./iconfont.svg?t=1563182315105#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`
