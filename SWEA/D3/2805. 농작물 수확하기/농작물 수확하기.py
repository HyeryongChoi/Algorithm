from collections import deque

def bfs(start, board):
    n = len(board)
    visited = [[0]*n for _ in range(n)]
    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]

    q = deque([start])
    visited[start[0]][start[1]] = 1
    answer = board[start[0]][start[1]]

    while q:
        y, x = q.popleft()

        if visited[y][x] >= (n-1)//2+1: break

        for dir in range(4):
            ny = y + dy[dir]
            nx = x + dx[dir]

            if ny < 0 or ny >= n or nx < 0 or nx >= n: continue
            if visited[ny][nx]: continue

            q.append((ny,nx))
            visited[ny][nx] = visited[y][x] + 1
            answer += board[ny][nx]

    return answer


if __name__ == '__main__':
    T = int(input())
    for test_case in range(1, T+1):
        n = int(input())
        board = [list(map(int, list(input().rstrip()))) for _ in range(n)]

        start = (n//2, n//2)
        answer = bfs(start, board)

        print(f'#{test_case} {answer}')