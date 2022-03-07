import getStyles from './userStyles'

export default function badges(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { badges, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userBadgesBaseStyles = getStyles(theme, badges?.baseStyles)

  const badgeBaseStyles = {
    padding: `${theme(`spacing[1]`)} ${theme(`spacing[2]`)}`,
    borderRadius: theme(`borderRadius[md]`),
    // For badges with icons
    display: 'flex',
    alignItems: 'center',
    gap: theme(`spacing[2]`),
    ...userGlobalStyles,
    ...userBadgesBaseStyles,
  }

  colors.forEach((color) => {
    components[`.badge-${color}-fill`] = {
      ...badgeBaseStyles,
      backgroundColor: theme(`colors.${color}[100]`),
      color: theme(`colors.${color}[900]`),
    }

    components[`.badge-${color}-fill-dark`] = {
      ...badgeBaseStyles,
      backgroundColor: theme(`colors.${color}[900]`),
      color: theme(`colors.${color}[50]`),
    }

    components[`.badge-${color}-outline`] = {
      ...badgeBaseStyles,
      borderWidth: theme(`borderWidth[2]`),
      borderColor: theme(`colors.${color}[200]`),
      color: theme(`colors.${color}[900]`),
    }

    components[`.badge-${color}-outline-dark`] = {
      ...badgeBaseStyles,
      borderWidth: theme(`borderWidth[2]`),
      borderColor: theme(`colors.${color}[900]`),
      color: theme(`colors.${color}[50]`),
    }
  })

  return components
}
