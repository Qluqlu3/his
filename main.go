package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	inputText := scanner.Text()
	text := regexp.MustCompile("(?i)[aiueo]")
	result := text.ReplaceAllString(inputText, "")

	fmt.Println('*')
}
