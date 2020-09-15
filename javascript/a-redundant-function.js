function redundant(string) {
  return () => string;
}


// function redundant(string) {
// 	return () => innerFunction(string);
// }

// function innerFunction(string) {
// 	return string;
// }