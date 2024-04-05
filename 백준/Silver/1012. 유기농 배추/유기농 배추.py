import sys
from collections import deque

input = sys.stdin.readline

test_case = int(input())

while test_case > 0:
    test_case -= 1
    m, n, k = map(int, input().split())

    board = [[-1] * m for _ in range(n)]
    count = 0

    for i in range(k):
        x, y = map(int, input().split())
        board[y][x] = 0  # 0은 배추가 심어져 있는 땅, -1은 배추가 심어져 있지 않은 땅

    def bfs(start):
        dq = deque()

        dy = [-1, 1, 0, 0]
        dx = [0, 0, -1, 1]

        if board[start[0]][start[1]] == 0:
            global count
            count += 1
        else:
            return

        dq.append(start)
        board[start[0]][start[1]] = count

        while dq:
            y, x = dq.popleft()

            for dir in range(4):
                ny, nx = y + dy[dir], x + dx[dir]

                if ny < 0 or ny >= n or nx < 0 or nx >= m:
                    continue
                if board[ny][nx] != 0:
                    continue

                dq.append((ny, nx))
                board[ny][nx] = count  # 큐에 넣을 때 방문 체크를 해야 중복 방문X

    for i in range(n):
        for j in range(m):
            bfs((i, j))

    print(count)
