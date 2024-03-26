
export default function getProperBg(iconCode) {
  switch (iconCode) {
    case '01d':
      return ["rgba(255, 221, 51, 1)", "rgba(255, 221, 51, 0.8)"]; // Clear sky day
    case '01n':
      return ["rgba(0, 0, 51, 1)", "rgba(0, 0, 51, 0.8)"]; // Clear sky night
    case '02d':
      return ["rgba(255, 221, 51, 1)", "rgba(255, 221, 51, 0.8)"]; // Few clouds day
    case '02n':
      return ["rgba(26, 26, 26, 1)", "rgba(26, 26, 26, 0.8)"]; // Few clouds night
    case '03d':
      return ["rgba(0, 0, 51, 1)", "rgba(0, 0, 51, 0.8)"]; // Scattered clouds day
    case '03n':
      return ["rgba(26, 26, 26, 1)", "rgba(26, 26, 26, 0.8)"]; // Scattered clouds night
    case '04d':
      return ["rgba(0, 0, 51, 1)", "rgba(0, 0, 51, 0.8)"]; // Broken clouds day
    case '04n':
      return ["rgba(0, 51, 102, 1)", "rgba(0, 51, 102, 0.8)"]; // Broken clouds night
    case '09d':
      return ["rgba(0, 0, 51, 1)", "rgba(0, 0, 51, 0.8)"]; // Shower rain day
    case '09n':
      return ["rgba(44, 62, 80, 1)", "rgba(44, 62, 80, 0.8)"]; // Shower rain night
    case '10d':
      return ["rgba(0, 0, 51, 1)", "rgba(0, 0, 51, 0.8)"]; // Rain day
    case '10n':
      return ["rgba(44, 62, 80, 1)", "rgba(44, 62, 80, 0.8)"]; // Rain night
    case '11d':
      return ["rgba(0, 0, 51, 1)", "rgba(0, 0, 51, 0.8)"]; // Thunderstorm day
    case '11n':
      return ["rgba(44, 62, 80, 1)", "rgba(44, 62, 80, 0.8)"]; // Thunderstorm night
    case '13d':
      return ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)"]; // Snow day
    case '13n':
      return ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)"]; // Snow night
    case '50d':
      return ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)"]; // Mist day
    case '50n':
      return ["rgba(0, 0, 51, 1)", "rgba(0, 0, 51, 0.8)"]; // Mist night
    default:
      return ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)"]; // Default to white background
  }
}
