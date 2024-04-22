import sys
from collections import deque

input = sys.stdin.readline

m, n, h = map(int, input().split())
graphs = [[] for _ in range(h)]

for i in range(h):
	for _ in range(n): 
		graphs[i].append(list(map(int, input().split())))

def solution():
	# 인접한 곳 = 위, 아래, 왼쪽, 오른쪽, 앞, 뒤 여섯 방향에 있는 토마토를 의미한다.
	dy = [-1, 1, 0, 0, 0, 0]
	dx = [0, 0, -1, 1, 0, 0]
	dz = [0, 0, 0, 0, -1, 1]

	answer = 0
	
	# [1] 익은 토마토 찾아서 큐에 담기
	q = deque([])

	for z in range(h):
		for r in range(n):
			for c in range(m):
				if graphs[z][r][c] == 1: q.append((z,r,c))

	# 토마토가 모두 익지는 못하는 상황이면 -1 출력
	if len(q) == 0:
		print(-1)
		exit()
		
	# [2] BFS로 토마토 익히기
	while q:
		z, y, x = q.popleft()

		for dir in range(6):
			nz = z + dz[dir]
			ny = y + dy[dir]
			nx = x + dx[dir]

			if nz < 0 or nz >= h or ny < 0 or ny >= n or nx < 0 or nx >= m: continue
			if graphs[nz][ny][nx] < 0: continue # 빈칸인 경우
			if graphs[nz][ny][nx] > 0: continue # 익은 토마토인 경우

			q.append((nz,ny,nx))

			# 보관 후 하루가 지나면 익은 토마토들의 인접한 곳에 있는 익지 않은 토마토들은 익게 된다.
			graphs[nz][ny][nx] = graphs[z][y][x] + 1
			
			answer = max(answer, graphs[z][y][x])

	# [3] 토마토가 다 익었는지 판단하기
	isRiped = True
	for z in range(h):
		for r in range(n):
			for c in range(m):
				if graphs[z][r][c] == 0: isRiped = False

	if isRiped: print(answer)
	else: print(-1)

solution()