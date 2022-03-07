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
    padding: `${theme(`spacing[1]`)} ${theme(`spacing[2]`)}`,
    backgroundColor: 'transparent',
    '&:autofill': {
      backgroundColor: 'transparent',
    },
    outline: '2px solid transparent',
    outlineOffset: '2px',
    '&:disabled': {
      opacity: '80%',
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
    borderWidth: theme(`borderWidth[2]`),
    borderRadius: theme(`borderRadius[md]`),
  }

  const inputUnderlineStyles = {
    ...inputBaseStyles,
    borderBottomWidth: theme(`borderWidth[2]`),
  }

  colors.forEach((color) => {
    components[`.input-${color}-outline`] = {
      ...inputOutlineStyles,
      borderColor: theme(`colors.neutral[500]`),
      caretColor: theme(`colors.${color}[600]`),
      '&:disabled': {
        ...inputOutlineStyles['&:disabled'],
        borderColor: theme(`colors.neutral[200]`),
      },
      '&:focus': {
        borderColor: theme(`colors.${color}[700]`),
        boxShadow: `0 0 0 2px ${theme(`colors.${color}[300]`)}`,
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

    components[`.input-${color}-underline`] = {
      ...inputUnderlineStyles,
      borderColor: theme(`colors.neutral[500]`),
      caretColor: theme(`colors.${color}[600]`),
      '&:disabled': {
        ...inputUnderlineStyles['&:disabled'],
        borderColor: theme(`colors.neutral[200]`),
      },
      '&:focus': {
        borderColor: theme(`colors.${color}[700]`),
      },
    }

    components[`.input-${color}-underline-dark`] = {
      ...inputUnderlineStyles,
      borderColor: theme(`colors.neutral[700]`),
      caretColor: theme(`colors.${color}[300]`),
      '&:disabled': {
        ...inputUnderlineStyles['&:disabled'],
        borderColor: theme(`colors.neutral[600]`),
      },
      '&:focus': {
        borderColor: theme(`colors.${color}[500]`),
      },
      '&::-webkit-calendar-picker-indicator': {
        filter: 'invert(1)',
      },
    }
  })

  return components
}
