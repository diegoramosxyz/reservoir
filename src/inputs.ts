import getStyles from './userStyles'

export default function inputs(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { inputs, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userInputsBaseStyles = getStyles(theme, inputs?.baseStyles)

  // BASE INPUT STYLES
  const inputBaseStyles = {
    padding: '8px 24px',
    backgroundColor: '#FFF',
    '&:autofill': {
      backgroundColor: '#FFF',
    },
    outline: '2px solid transparent',
    outlineOffset: '2px',
    '&:disabled': {
      cursor: 'not-allowed',
    },
    transitionProperty: theme(`transitionProperty[all]`),
    transitionDuration: theme(`transitionDuration[200]`),
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
    ...userGlobalStyles,
    ...userInputsBaseStyles,
  }

  const inputOutlineStyles = {
    ...inputBaseStyles,
    borderWidth: '1px',
    borderRadius: '8px',
  }

  colors.forEach((color) => {
    components[`.input-${color}-outline`] = {
      ...inputOutlineStyles,
      borderColor: '#D1D5DB',
      // caretColor: theme(`colors.${color}[600]`),
      // '&:disabled': {
      //   ...inputOutlineStyles['&:disabled'],
      //   borderColor: theme(`colors.neutral[200]`),
      // },
      '&:focus': {
        borderColor: 'transparent',
        boxShadow: `0 0 0 4px ${theme(`colors.${color}[300]`)}`,
      },
    }

    components[`.input-${color}-outline-dark`] = {
      ...inputOutlineStyles,
      borderColor: theme(`colors.neutral[700]`),
      caretColor: theme(`colors.${color}[300]`),
      '&:disabled': {
        ...inputOutlineStyles['&:disabled'],
        borderColor: theme(`colors.neutral[600]`),
      },
      '&:focus': {
        borderColor: theme(`colors.${color}[500]`),
        boxShadow: `0 0 0 2px ${theme(`colors.${color}[700]`)}`,
      },
      '&::-webkit-calendar-picker-indicator': {
        filter: 'invert(1)',
      },
    }
  })

  return components
}
