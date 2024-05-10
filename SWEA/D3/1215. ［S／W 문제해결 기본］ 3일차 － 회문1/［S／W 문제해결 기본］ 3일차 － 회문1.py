def isPalindrome(arr):
    n = len(arr)
    a, b = [], []

    if n % 2 == 0:
        a = arr[:n//2]
        b = arr[n//2:][::-1]
    else:
        a = arr[:n//2]
        b = arr[n//2+1:][::-1]

    if n == 1 or a == b: return True

    return False

def getPalindromeCount(board, n):
    size = len(board)
    count = 0

    for r in range(size):
        for c in range(size - n + 1):
            window = board[r][c:c + n]

            if isPalindrome(window): count += 1

    return count


if __name__ == '__main__':
    T = 10
    for test_case in range(1, T+1):
        n = int(input())
        answer = 0
        board = [list(input().rstrip()) for _ in range(8)]
        rotated = [['']*8 for _ in range(8)]

        # 시계방향 90도 회전
        for r in range(8):
            for c in range(8):
                rotated[c][7-r] = board[r][c]

        # 8x8 글자판에서 길이n 회문 개수?
        answer += getPalindromeCount(board, n) # 가로
        answer += getPalindromeCount(rotated, n) # 세로

        print(f'#{test_case} {answer}')