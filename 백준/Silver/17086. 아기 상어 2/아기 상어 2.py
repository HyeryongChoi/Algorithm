import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
board = []

for _ in range(n):
    board.append(list(map(int, input().split())))

# 거리 = b칸 인덱스 - a칸 인덱스 + 1
max_dist = 0


def bfs(start):
    queue = deque([start])
    visited = [[0] * m for _ in range(n)]

    visited[start[0]][start[1]] = 1

    # 이동방향
    dy = [0, -1, -1, -1, 0, 1, 1, 1]
    dx = [-1, -1, 0, 1, 1, 1, 0, -1]

    while queue:
        y, x = queue.popleft()

        if board[y][x] == 1:
            return visited[y][x] - 1

        for i in range(8):
            ny = y + dy[i]
            nx = x + dx[i]

            if ny < 0 or ny >= n or nx < 0 or nx >= m: continue
            if visited[ny][nx]: continue

            queue.append((ny, nx))
            visited[ny][nx] = visited[y][x] + 1


for i in range(n):
    for j in range(m):
        if board[i][j] == 0:
            dist = bfs((i, j))
            max_dist = max(max_dist, dist)

print(max_dist)
