

export default function getProperIcon(iconCode) {
  switch (iconCode) {
    case '01d':
      return require('../assets/icons/sun.png');
    case '01n':
      return require('../assets/icons/clearsky.png');
    case '02d':
      return require('../assets/icons/02d.png');
    case '02n':
      return require('../assets/icons/fewclouds.png');
    case '03d':
      return require('../assets/icons/03d.png');
    case '03n':
      return require('../assets/icons/03n.png');
    case '04d':
      return require('../assets/icons/04d.png');
    case '04n':
      return require('../assets/icons/brokenclouds.png');
    case '09d':
      return require('../assets/icons/09d.png');
    case '09n':
      return require('../assets/icons/showerrain.png');
    case '10d':
      return require('../assets/icons/lightrain.png');
    case '10n':
      return require('../assets/icons/10n.png');
    case '11d':
      return require('../assets/icons/11.png');
    case '11n':
      return require('../assets/icons/11.png');
    case '13d':
      return require('../assets/icons/snow.png');
    case '13n':
      return require('../assets/icons/snow.png');
    case '50d':
      return require('../assets/icons/50.png');
    case '50n':
      return require('../assets/icons/50.png');
  }
}
