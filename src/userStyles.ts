export default function getStyles(
  theme: Helpers['theme'],
  userStyles: UserStyles | undefined
) {
  if (!userStyles) return {}

  if (typeof userStyles === 'function') return userStyles({ theme })

  if (typeof userStyles === 'object') return userStyles
}
