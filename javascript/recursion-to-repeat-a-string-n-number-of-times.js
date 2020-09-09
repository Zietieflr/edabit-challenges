function repetition(txt, n) {
	return n ?  txt + repetition(txt, n-1) : ''
}