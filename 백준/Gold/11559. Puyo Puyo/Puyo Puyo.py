import sys
from collections import deque

input = sys.stdin.readline

board = [[val for val in list(input().rstrip())] for _ in range(12)]
row_size = 12
col_size = 6

def bfs(color, start):
	queue = deque([start])
	
	visited = [[False]*col_size for _ in range(row_size)]
	visited[start[0]][start[1]] = True
	same_color_pos = [start]

	dy = [-1, 1, 0, 0]
	dx = [0, 0, -1, 1]
	
	while queue:
		y, x = queue.popleft()

		for i in range(4):
			ny = y + dy[i]
			nx = x + dx[i]

			if ny < 0 or ny >= row_size or nx < 0 or nx >= col_size: continue
			if visited[ny][nx] or board[ny][nx] != color: continue

			queue.append((ny,nx))
			visited[ny][nx] = True
			same_color_pos.append((ny,nx))

	return same_color_pos
		

exploded_count = 0

while True:
	is_exploded = False
	
	for i in range(row_size):
		for j in range(col_size):
			if board[i][j] == '.': continue
				
			same_color_pos = bfs(board[i][j], (i,j))
			
			# 상하좌우 4개 이상 연결 시 같은 색 뿌요들이 한꺼번에 없어짐 -> 1연쇄
			if len(same_color_pos) >= 4:
				is_exploded = True
				
				for y, x in same_color_pos:
					board[y][x] = '.'


	if not is_exploded: break
		
	exploded_count += 1

	# 뿌요 없어진 후 다른 뿌요가 있다면 차례대로 아래로 떨어짐
	for i in range(row_size-1, -1, -1):
		for j in range(col_size):
			if board[i][j] == '.': continue

			for down in range(row_size-1, i, -1):
				if board[down][j] == '.':
					board[down][j] = board[i][j]
					board[i][j] = '.'

print(exploded_count)