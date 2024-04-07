import sys

input = sys.stdin.readline

n, m = map(int, input().split())
numbers = [0] + list(map(int, input().split()))
	
def solution():
	# i~j번째 수의 합이 m이 되는 경우의 수
	answer = 0

	# 누적합
	sums = [0]*(n+1)
	for i in range(1, n+1):
		sums[i] = sums[i-1] + numbers[i]

	left, right = 1,1

	while right <= n:
		num_sum = sums[right] - sums[left-1]

		if num_sum == m:
			answer += 1
			left += 1
		elif num_sum < m: right += 1
		else: left += 1

	print(answer)
	
solution()