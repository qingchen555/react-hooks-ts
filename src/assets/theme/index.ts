const theme = {
  color: {
    primary: '#C20C0C',
    secondary: ''
  },
  size: {},
  mixin: {
    wrapv1: `
      width: 1100px;
      margin: 0 auto;
    `,
    textEplippsis: `
    white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `
  }
}

export default theme
// 可以在index.tsx中使用ThemeProvider
