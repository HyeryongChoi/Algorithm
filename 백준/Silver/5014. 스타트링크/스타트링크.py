import sys
from collections import deque

input = sys.stdin.readline

f, s, g, u, d = map(int, input().split())

def solution():
	answer = 'use the stairs'

	dy = [-d, u]

	q = deque([(s, 0)])
	visited = [False] * (f+1)

	while q:
		now, count = q.popleft()

		if now == g:
			return count

		for dir in range(2):
			next = now + dy[dir]

			if next <= 0 or next > f: continue
			if visited[next]: continue

			q.append((next, count+1))
			visited[next] = True
	
	return answer
	
print(solution())