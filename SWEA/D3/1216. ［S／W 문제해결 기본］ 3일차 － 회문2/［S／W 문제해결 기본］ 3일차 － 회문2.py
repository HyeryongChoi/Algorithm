def isPalindrome(arr):
    n = len(arr)

    for i in range(n):
        if arr[i] != arr[n-i-1]: return False

    return True

def searchMaxPalindromeSize(board):
    n = len(board)
    max_palindrome_size = 0

    for r in range(n):
        for left in range(n):
            for right in range(n):
                window = board[r][left:right+1]

                if isPalindrome(window):
                    max_palindrome_size = max(max_palindrome_size, right - left +1)

    return max_palindrome_size

if __name__ == '__main__':
    T = 10

    for test_case in range(1, T+1):
        t = int(input())
        n = 100
        board = [list(input()) for _ in range(n)]
        rotated = [['']*n for _ in range(n)]
        answer = 0

        for r in range(n):
            for c in range(n):
                rotated[c][n-r-1] = board[r][c]

        answer = max(searchMaxPalindromeSize(board), searchMaxPalindromeSize(rotated))

        print(f'#{t} {answer}')