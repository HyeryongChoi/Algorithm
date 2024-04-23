import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]

def bfs(start, h, visited):
	q = deque([start])

	dy = [-1, 1, 0, 0]
	dx = [0, 0, -1, 1]
	
	while q:
		y, x = q.popleft()

		for dir in range(4):
			ny = y + dy[dir]
			nx = x + dx[dir]

			if ny < 0 or ny >= n or nx <0 or nx >= n: continue
			if visited[ny][nx] > 0: continue
			if board[ny][nx] <= h: continue

			q.append((ny,nx))
			visited[ny][nx] = visited[y][x]


def solution():
	answer = 0

	# 비의 양 범위 찾기
	min_h = 100
	max_h = 0
	for row in board:
		min_h = min(min_h, min(row))
		max_h = max(max_h, max(row))

	for h in range(min_h-1, max_h):
		if h < 0: continue # 비가 오지 않을 수 있음

		count = 0
		visited = [[0]*n for _ in range(n)]

		# bfs로 안전지대 개수 구하기
		for i in range(n):
			for j in range(n):
				if board[i][j] > h and not visited[i][j]:
					count += 1
					visited[i][j] = count
					bfs((i,j), h, visited)

		answer = max(answer, count)

	print(answer)
	
solution()