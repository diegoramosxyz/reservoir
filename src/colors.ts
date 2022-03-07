const colorKeys = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
]

// const oldColors = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

function isColor(color: any) {
  if (typeof color !== 'object') return false

  // Find if the color has all the keys in the colorKeys array
  return Object.keys(color).some(
    (key) => colorKeys.includes(key) && typeof color[key] === 'string'
  )
}

export default function getColors(config: Helpers['config']) {
  const configValues = config()
  const TailwindColors = configValues['theme']['colors']

  const colors: { [x: string]: string } = {}

  // Extract color objects from TailwindCSS default colors
  Object.keys(TailwindColors).forEach((key) => {
    if (isColor(TailwindColors[key])) {
      colors[key] = TailwindColors[key]
    }
  })

  // Remove old/legacy colors
  // oldColors.forEach((oldColor) => delete colors[oldColor])

  return Object.keys(colors)
}
