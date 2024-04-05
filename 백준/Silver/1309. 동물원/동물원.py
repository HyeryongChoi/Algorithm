import sys

input = sys.stdin.readline

n = int(input())

def solution(n):
	# dp[i][j] = 2*i길이 우리에 j위치에 사자를 배치하는 방법의 수

	dp = [[0]*3 for _ in range(n)]
	dp[0] = [1]*3

	for i in range(1, n):
		dp[i][0] = sum(dp[i-1]) % 9901
		dp[i][1] = (dp[i-1][0] + dp[i-1][2]) % 9901
		dp[i][2] = (dp[i-1][0] + dp[i-1][1]) % 9901

	print(sum(dp[n-1]) % 9901)
			
solution(n)