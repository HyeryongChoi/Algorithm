import sys

input = sys.stdin.readline
n = int(input())
numbers = list(map(int, input().split()))

def solution():
	answer = 0
	visited = dict()

	for num in numbers:
		visited[num] = False

	# 연속한 1개 이상의 수를 뽑았을 때 같은 수가 여러 번 등장하지 않는 경우의 수
	left, right = 0, 0

	while left < n and right < n:
		if visited[numbers[right]]:
			# 중복된 숫자라면 가장 왼쪽 숫자 제외
			visited[numbers[left]] = False
			left += 1
		else:
			# 중복되지 않은 숫자라면 오른쪽 숫자 포함
			# left~right까지 수열에서 현재 숫자를 뽑았을 때 만들 수 있는 조합 개수
			# 1개일 때, 2개일 때 ..., right-left+1개일 때
			visited[numbers[right]] = True
			right += 1
			answer += right-left

	print(answer)
	
solution()