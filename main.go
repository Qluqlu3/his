package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strings"
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

func fc2() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	text := scanner.Text()
	length := len(text)

	array := strings.Split(strings.Repeat("+", length), "")
	result := strings.Join(array, "")
	fmt.Println(result)
}
