package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
)

func main() {
	fmt.Println("main")
}

// ""
func fc() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	inputText := scanner.Text()
	text := regexp.MustCompile("(?i)[aiueo]")
	result := text.ReplaceAllString(inputText, "")

	fmt.Println(result)
}
