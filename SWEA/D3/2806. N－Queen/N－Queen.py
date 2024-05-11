from collections import defaultdict

def dfs(row, n, visited, result):
    global answer

    if row == n:
        answer += 1
        return

    for col in range(n):
        if visited[(1, col)]: continue # 세로줄
        if visited[(2, row+col)]: continue # 오른쪽 위 대각선
        if visited[(3, row-col)]: continue # 오른쪽 아래 대각선

        visited[(1, col)] = True
        visited[(2, row+col)] = True
        visited[(3, row-col)] = True

        dfs(row+1, n, visited, result + [(row,col)])

        visited[(1, col)] = False
        visited[(2, row+col)] = False
        visited[(3, row-col)] = False

if __name__ == '__main__':
    T = int(input())
    for test_case in range(1, T+1):
        answer = 0
        n = int(input())

        # nxn 보드에 n개의 퀸을 서로 다른 두 퀸이 공격하지 못하게 놓는 경우의 수?
        # 0 같은 가로 줄 -> 미리 가로줄 선택
        # 1 같은 세로 줄 -> (1, c)
        # 2 같은 오른쪽 위 대각선 -> 행, 열 좌표 합이 같다 (2, sum)
        # 3 같은 오른쪽 아래 대각선 -> 행, 열 좌표 차가 같다 (2, difference)

        visited = defaultdict(bool)

        # row일 때, col 고르기
        dfs(0, n, visited, [])

        print(f'#{test_case} {answer}')