import plugin from 'tailwindcss/plugin'
import buttons from './buttons'
import inputs from './inputs'
import badges from './badges'
import getColors from './colors'

module.exports = plugin.withOptions(
  (options) =>
    ({ addBase, addComponents, theme, config }) => {
      const colors = getColors(config)
      if (typeof options !== 'object') options = {}
      addComponents({
        ...buttons(options, theme, addBase, colors),
        ...inputs(options, theme, colors),
        ...badges(options, theme, colors),
      })
    }
)
