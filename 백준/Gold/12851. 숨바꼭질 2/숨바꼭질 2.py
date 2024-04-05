import sys
from collections import deque

input = sys.stdin.readline

start, target = map(int, input().split())

def bfs(start, target):
	queue = deque()
	queue.append([start, 0])

	max_range = 100001
	count = 0
	min_dist = float('inf')

	visited = [False]*max_range
	
	while queue:
		now, dist = queue.popleft()

		visited[now] = True

		if dist > min_dist: break
			
		if now == target and dist <= min_dist:
			count += 1
			min_dist = dist

		for next in [now-1, now+1, now*2]:
			if next < 0 or next >= max_range: continue
			if visited[next]: continue

			queue.append([next, dist+1])

	return [min_dist, count]
		

print(*bfs(start, target), sep='\n')

