import getStyles from './userStyles'

export default function buttons(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  addBase: Helpers['addBase'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { buttons, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userButtonBaseStyles = getStyles(theme, buttons?.baseStyles)

  const presets = {
    elegant: {
      borderRadius: theme(`borderRadius[none]`),
      fontWeight: theme(`fontWeight[light]`),
      textTransform: 'uppercase',
      borderWidth: '1px',
    },
    playful: {
      borderRadius: theme(`borderRadius[full]`),
      fontWeight: theme(`fontWeight[semibold]`),
      textTransform: 'normal-case',
    },
  }

  let preset = {
    borderRadius: '8px',
    fontWeight: 500,
  }

  if (buttons?.preset && presets[buttons?.preset]) {
    preset = presets[buttons?.preset]
  }

  // BASE BUTTON STYLES
  const buttonBaseStyles: { [x: string]: any } = {
    fontSize: '1rem',
    padding: '8px 24px',
    borderWidth: '1px',
    borderColor: 'transparent',
    userSelect: 'none',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    '&:disabled': {
      cursor: 'not-allowed',
    },
    transitionProperty: theme(`transitionProperty[all]`),
    transitionDuration: theme(`transitionDuration[200]`),
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
    // For button with icons
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    ...preset,
    ...userGlobalStyles,
    ...userButtonBaseStyles,
  }

  if (buttons?.animate) {
    addBase({
      '@keyframes push': {
        from: {
          transform: 'translateY(0%)',
        },

        to: {
          transform: 'translateY(5%)',
        },
      },
    })

    buttonBaseStyles['&:active'] = {
      animation: 'push 0.09s ease-in-out',
    }
  }

  colors.forEach((color) => {
    components[`.btn-${color}-fill`] = {
      ...buttonBaseStyles,
      backgroundColor: theme(`colors.${color}[700]`),
      color: theme(`colors.white`),
      '&:not(:disabled):hover': {
        backgroundColor: theme(`colors.${color}[900]`),
      },
      '&:focus': {
        backgroundColor: theme(`colors.${color}[700]`),
        boxShadow: `0 0 0 4px ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.gray[300]`),
        backgroundColor: theme(`colors.gray[400]`),
      },
    }

    components[`.btn-${color}-outline`] = {
      ...buttonBaseStyles,
      borderColor: theme(`colors.gray[300]`),
      color: theme(`colors.gray[900]`),
      '&:not(:disabled):not(:focus):hover': {
        borderColor: theme(`colors.gray[400]`),
      },
      '&:focus': {
        borderColor: 'transparent',
        boxShadow: `0 0 0 4px ${theme(`colors.${color}[300]`)}`,
      },
      '&:disabled': {
        ...buttonBaseStyles['&:disabled'],
        color: theme(`colors.neutral[600]`),
        borderColor: theme(`colors.neutral[200]`),
      },
    }
  })

  return components
}
