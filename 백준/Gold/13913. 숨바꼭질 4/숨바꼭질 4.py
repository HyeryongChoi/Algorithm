import sys
from collections import deque

input = sys.stdin.readline

start, target = map(int, input().split())

def bfs(start, target):
	max_range = 100001
	queue = deque([start])
	visited = [False]*max_range
	prev_path = [-1]*max_range

	visited[start] = 1
		
	while queue:
		now = queue.popleft()

		if now == target:
			visited_path = [target]
			now_index = now
			
			while True:
				prev = prev_path[now_index]

				if prev < 0: 
					return [visited[target]-1, visited_path[::-1]]
					
				visited_path.append(prev)
				now_index = prev
			

		for next in [now-1, now+1, now*2]:
			if next < 0 or next >= max_range: continue
			if visited[next]: continue

			queue.append(next)
			visited[next] = visited[now]+1
			prev_path[next] = now

dist, visited_path = bfs(start, target)

print(dist)
print(*visited_path)

	