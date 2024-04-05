import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
k = int(input())
apples = set([(y-1, x-1) for y, x in [list(map(int, input().split())) for _ in range(k)]])
l = int(input())
turns = ([(int(x), c) for x, c in [input().split() for _ in range(l)]])[::-1]
	
def solution(n, apples, turns):
	# 사과를 먹으면 뱀의 길이가 늘어난다.
	# 뱀이 이리저리 기어다니다가 벽 또는 자기자신의 몸과 부딪히면 게임이 끝난다.
	# nxn 사과 또는 빈칸
	# 뱀은 0,0 위치에 있고 길이 1 처음에 오른쪽을 향한다.

	# R, D, L, U
	dy = [0, 1, 0, -1]
	dx = [1, 0, -1, 0]
	
	snake = deque([(0,0)])
	direction = 0
	t = 0
	
	# 배은 매 초마다 이동하는데 다음과 같은 규칙을 따른다.
	while (True):
		t += 1
		# 뱀은 몸길이를 늘려 머리를 다음칸에 위치시킨다.
		ny = snake[0][0] + dy[direction]
		nx = snake[0][1] + dx[direction]
		
		# 벽이나 자기자신의 몸과 부딪히면 게임종료
		if ny < 0 or ny >= n or nx < 0 or nx >= n: break
		if (ny,nx) in snake: break

		snake.appendleft((ny,nx))

		if (ny,nx) in apples:
			# 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.
			apples.discard((ny,nx))
		else:
			# 이동한 칸에 사과가 없다면, 몸 길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸길이는 변하지 않는다.
			snake.pop()

		# x초가 끝난 뒤에 방향 회전
		if turns and t == turns[-1][0]:
			_, dir = turns.pop()
	
			if dir == 'L': direction = direction - 1 if direction > 0 else 3
			else: direction = (direction + 1)%4

	# 게임이 몇초에 끝나는지 계산하라
	print(t)	

solution(n, apples, turns)