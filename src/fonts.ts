import getStyles from './userStyles'

export default function fonts(
  options: NonNullable<PluginOptions>,
  theme: Helpers['theme'],
  colors: string[]
) {
  const components: { [x: string]: {} } = {}
  const { fonts, globalStyles } = options

  const userGlobalStyles = getStyles(theme, globalStyles)
  const userFontBaseStyles = getStyles(theme, fonts?.baseStyles)

  const prefix = userGlobalStyles?.prefix || 'reservoir'

  // BASE FONT STYLES
  const fontBaseStyles: { [x: string]: any } = {
    color: '#1C1C28',
    ...userGlobalStyles,
    ...userFontBaseStyles,
  }

  components[`.${prefix}-h1`] = {
    ...fontBaseStyles,
    fontWeight: 700,
    fontSize: '3rem',
  }
  components[`.${prefix}-h2`] = {
    ...fontBaseStyles,
    fontWeight: 700,
    fontSize: '2.5rem',
  }
  components[`.${prefix}-h3`] = {
    ...fontBaseStyles,
    fontWeight: 700,
    fontSize: '2rem',
  }
  components[`.${prefix}-h4`] = {
    ...fontBaseStyles,
    fontWeight: 700,
    fontSize: '1.5rem',
  }
  components[`.${prefix}-h5`] = {
    ...fontBaseStyles,
    fontWeight: 700,
    fontSize: '1.25rem',
  }
  components[`.${prefix}-h6`] = {
    ...fontBaseStyles,
    fontWeight: 700,
    fontSize: '1rem',
  }
  components[`.${prefix}-subtitle`] = {
    ...fontBaseStyles,
    fontWeight: 600,
    fontSize: '0.875rem',
  }
  components[`.${prefix}-body`] = {
    ...fontBaseStyles,
    fontWeight: 400,
    fontSize: '1rem',
  }
  components[`.${prefix}-body-2`] = {
    ...fontBaseStyles,
    fontWeight: 400,
    fontSize: '0.875rem',
  }
  components[`.${prefix}-capitalized`] = {
    ...fontBaseStyles,
    fontWeight: 500,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
  }
  components[`.${prefix}-capitalized`] = {
    ...fontBaseStyles,
    fontWeight: 400,
    fontSize: '0.75rem',
  }
  components[`.${prefix}-capitalized`] = {
    ...fontBaseStyles,
    fontWeight: 600,
    fontSize: '0.625rem',
  }

  return components
}
