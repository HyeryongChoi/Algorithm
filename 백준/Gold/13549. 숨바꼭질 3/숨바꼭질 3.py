import sys
from collections import deque

input = sys.stdin.readline

start, target = map(int, input().split())

def bfs(start, target):
	queue = deque()
	queue.append(start)

	max_range = 100001

	visited = [0]*max_range
	visited[start] = 1
	
	while queue:
		now = queue.popleft()

		for next in [now-1, now+1, now*2]:
			if next < 0 or next >= max_range: continue
			if visited[next] == 0 or visited[next] and visited[now] < visited[next]:
				queue.append(next)
				visited[next] = visited[now] if next == now*2 else visited[now] + 1

	return visited[target]-1
		

print(bfs(start, target))

