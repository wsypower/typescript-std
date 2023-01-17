enum Direction {
  UP,
  LEFT,
  RIGHT,
  DOWn
}

enum Direction {
  Up = "UP",
  Down = 1,
  // Ok
  Left,
  // OK
  Right,
}
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}
type LogLevelStrings = keyof typeof LogLevel;

