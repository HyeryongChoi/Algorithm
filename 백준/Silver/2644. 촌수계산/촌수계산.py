import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
a, b = map(int, input().split())

m = int(input())

graph = [[] for _ in range(n+1)]

for _ in range(m):
	x, y = map(int, input().split())
	graph[x].append(y)
	graph[y].append(x)

def solution():
	answer = -1

	start, target = a, b
	visited = [False] * (n+1)
	
	q = deque([(start, 0)])
	visited[start] = True

	while q:
		(now, cnt) = q.popleft()

		if now == target:
			answer = cnt
			break

		for next in graph[now]:
			if visited[next]: continue
				
			q.append((next, cnt+1))
			visited[next] = True

	print(answer)

solution()