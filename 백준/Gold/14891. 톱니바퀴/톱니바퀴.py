import sys

inp1t = sys.stdin.readline


# 12시방향부터 시계방향 순서대로, N극은 0, S극은 1
gears = [[]] + [list(map(int, list(input().rstrip()))) for _ in range(4)]

rotate_num = int(input())
commands = [list(map(int, input().split())) for _ in range(rotate_num)]

# 2번(오른쪽), 6번(왼쪽)
top = 0
left = 6
right = 2

def checkAndRotate(cur, rotated_direction, direction):
	global gears

	# 현재 톱니바퀴 왼쪽 확인
	if direction == 0 and cur > 1 and gears[cur][left] != gears[cur-1][right]:
		# 서로 맞닿은 극이 다르면 -> 반대방향 회전
		checkAndRotate(cur-1, rotated_direction*-1, direction)

	# 현재 톱니바퀴 오른쪽 확인
	if direction == 1 and cur < 4 and gears[cur][right] != gears[cur+1][left]:
		# 서로 맞닿은 극이 다르면 -> 반대방향 회전
		checkAndRotate(cur+1, rotated_direction*-1, direction)

	rotate(cur, rotated_direction)

def rotate(cur, rotated_direction):
	global gears
	
	if rotated_direction == 1:
		# 현재 톱니바퀴 시계방향으로 회전
		gears[cur] = [gears[cur][-1]] + gears[cur][:-1]
	else:
		# 현재 톱니바퀴 반시계방향으로 회전
		gears[cur] = gears[cur][1:] + [gears[cur][0]]


	
def solution():
	answer = 0
	
	# 1 시계방향, -1 반시계방향
	for cur, rotated_direction in commands:
		# 현재 기준 왼쪽으로 가면서 톱니바퀴 회전
		checkAndRotate(cur, rotated_direction, 0)

		# 위 단계에서 현재 톱니바퀴가 1회 회전하게 되므로 다시 원상태로 돌리기
		rotate(cur, rotated_direction*-1)

		# 현재 기준 오른쪽으로 가면서 톱니바퀴 회전
		checkAndRotate(cur, rotated_direction, 1)

	# 최종 톱니바퀴 점수 -> 각 톱니바퀴의 12시 방향 N극이면 0점, S극이면 1,2,4,8
	for cur in range(1,5):
		if gears[cur][top] == 1:
			answer += 2**(cur-1)

	print(answer)
	
	
solution()