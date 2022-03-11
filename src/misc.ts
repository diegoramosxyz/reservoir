import getStyles from './userStyles'

export default function misc(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { misc, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userMiscBaseStyles = getStyles(theme, misc?.baseStyles)

  const prefix = userGlobalStyles?.prefix || 'reservoir'

  // BASE MISC STYLES
  const miscBaseStyles: { [x: string]: any } = {
    // borderWidth: '1px',
    // borderColor: 'transparent',
    userSelect: 'none',
    // outline-none
    outline: '2px solid transparent',
    outlineOffset: '2px',

    '&:disabled': {
      cursor: 'not-allowed',
    },
    transitionProperty: theme(`transitionProperty[all]`),
    transitionDuration: theme(`transitionDuration[200]`),
    transitionTimingFunction: theme(`transitionTimingFunction['ease-in-out']`),
    ...userGlobalStyles,
    ...userMiscBaseStyles,
  }

  colors.forEach((color) => {
    components[`.${prefix}-${color}-dropdown-item`] = {
      ...miscBaseStyles,
      padding: '12px 16px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'between',
      gap: '8px',
      backgroundColor: 'transparent',
      '&:not(:disabled):hover': {
        backgroundColor: theme(`colors.${color}[100]`),
      },
      '&:focus': {
        backgroundColor: theme(`colors.${color}[100]`),
      },
      '&:disabled': {
        ...miscBaseStyles['&:disabled'],
        color: theme(`colors.gray[300]`),
        backgroundColor: theme(`colors.gray[400]`),
      },
    }
  })

  return components
}
