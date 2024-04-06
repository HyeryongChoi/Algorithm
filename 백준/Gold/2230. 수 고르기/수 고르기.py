import sys

input = sys.stdin.readline

n, m = map(int, input().split())
numbers = [int(input()) for _ in range(n)]
	
def solution():
	# 두 수를 골랐을 때, 그 차이가 M 이상이면서 제일 작은 경우의 차이
	numbers.sort() # O(nlogn)
	answer = numbers[-1]  - numbers[0]

	# left번째 수를 골랐을 때 차이가 m이상이 되는 최초지점 right 탐색 -> O(2n)
	right = 0
	for left in range(n):
		while right < n and numbers[right] - numbers[left] < m: right += 1
		if right >= n: break

		answer = min(answer, numbers[right] - numbers[left])

	print(int(answer))
	
solution()