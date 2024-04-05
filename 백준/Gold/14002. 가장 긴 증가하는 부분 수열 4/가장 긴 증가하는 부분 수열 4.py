import sys

input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split()))

def solution(n, numbers):
	# dp[i] = i번째 숫자 추가 시, 가장 긴 증가하는 부분 수열의 길이
	dp = [0] * (n+1)
	numbers = [0] + numbers
	
	for i in range(n+1):
		max_len = 0
		
		for j in range(i):
			if numbers[j] < numbers[i]:
				max_len = max(max_len, dp[j])

		dp[i] = max_len + 1

	max_len = max(dp)
	print(max_len - 1)

	result = []
	for i in range(n, 0, -1):
		if dp[i] == max_len:
			result.append(numbers[i])
			max_len -= 1

	print(*result[::-1])
	
solution(n, numbers)
