import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
board = [list(input().rstrip()) for _ in range(n)]
count = int(input()) # 막대를 던진 횟수
heights = list(map(int, input().split())) # 막대를 던진 높이

# 높이를 행 인덱스로 변경
row_idxs = [n - height for height in heights]

def pprint(board):
	for row in board:
		print(''.join(row))

def getBottomPos(cluster):
	sorted_cluster = sorted(list(cluster), key = lambda pos: pos[0])
	
	return sorted_cluster[-1]
	
def downCluster(cluster, board):
	max_y, start_x = getBottomPos(cluster)
	max_down_count = 0

	# 클러스터링 제일 하단에 있는 미네랄이 어디까지 내려갈 수 있는지 구하기
	while True:
		ny = max_y + (max_down_count+1)

		# 땅을 만나거나 다른 미네랄을 만나는 경우 멈춤
		if  ny >= len(board) or board[ny][start_x] == 'x': break

		max_down_count += 1
	
	# max_down_count 구하기
	for count in range(1, max_down_count+1):
		found = False
		for y, x in cluster:
			ny = y + count

			# 같은 클러스터링이 아닌 다른 미네랄을 만나는 경우 멈춤
			if (ny,x) not in cluster and board[ny][x] == 'x':
				max_down_count = min(max_down_count, count-1)
				found = True

		if found: break
	
	if max_down_count == 0: return

	# 클러스터링을 max_down_count칸 만큼 내리기
	new_cluster = set()
	for y, x in cluster:
		new_cluster.add((y + max_down_count, x))

	# 기존 클러스터 삭제
	for y, x in cluster:
		board[y][x] = '.'

	# 새로운 클러스터 채우기
	for y, x in new_cluster:
		board[y][x] = 'x'

def solution(n, m, board, row_idxs):
	count = 0
	
	while count < len(row_idxs):				
		# 1. 막대 던지기
		if count % 2 == 0:
			# 1-1. 왼쪽에서 던진다면 -> 해당 행의 가장 왼쪽에 있는 미네랄 파괴
			#print('왼쪽에서 막대 던짐', row_idxs[count])
			for c in range(m):
				if board[row_idxs[count]][c] == 'x':
					board[row_idxs[count]][c] = '.'
					break
		else:
			# 1-2. 오른쪽에서 던진다면 -> 해당 행의 가장 오른쪽에 있는 미네랄 파괴
			#print('오른쪽에서 막대 던짐', row_idxs[count])
			for c in range(m-1, -1, -1):
				if board[row_idxs[count]][c] == 'x':
					board[row_idxs[count]][c] = '.'
					break

		count += 1
		#pprint(board)
	
		# 2.미네랄이 파괴된 이후 클러스터링
		visited = [[False]*m for _ in range(n)]
		clusters = []
					
		for i in range(n):
			for j in range(m):
				if visited[i][j] or board[i][j] == '.': continue

				clusters.append(bfs((i, j), board, visited))

		# 3. 클러스터링 하강(떨어지는 동안 클러스터의 모양은 변하지 않는다)
		for cluster in clusters:
			downCluster(cluster, board)

		#print('클러스터링 하강 후')
		#pprint(board)
		#print('-------------------------------')

	pprint(board)
				
def bfs(start, board, visited):
	q = deque([start])
	visited[start[0]][start[1]] = True
	n, m = len(board), len(board[0])

	cluster = set([start])

	dy = [-1, 1, 0, 0]
	dx = [0, 0, -1, 1]
	
	while q:
		y, x = q.popleft()

		for i in range(4):
			ny = y + dy[i]
			nx = x + dx[i]

			if ny < 0 or ny >= n or nx < 0 or nx >= m: continue
			if visited[ny][nx] or board[ny][nx] == '.': continue

			q.append((ny, nx))
			visited[ny][nx] = True

			cluster.add((ny, nx))

	return cluster

solution(n, m, board, row_idxs)