import sys

input = sys.stdin.readline

n, k = map(int, input().split())
coins = [int(input()) for _ in range(n)]


def solution(n, k, coins):
	# 2짜리 동전으로 4를 만드는 경우의 수 = 2짜리 동전으로 2를 만드는 경우의 수
	# 1과 2짜리 동전을 사용해서 4를 만드는 경우의 수 = 
	# 1짜리 동전으로 4를 만드는 경우의 수 + 2짜리 동전으로 2를 만드는 경우의 수
	# dp[i][j] = 0~i번째 동전으로 j를 만드는 경우의 수
	# dp[i][j] = dp[i-1][j] + dp[i][j-coin] (j >= coin)
	# dp[i] = 0~n번째 동전으로 i를 만드는 경우의 수 = dp[i] + dp[i-coin] (i >= coin)
	

	dp = [0]*(k+1)
	dp[0] = 1 # coin이 2일 때 dp[2] = 0원에서 2원을 더해 2원을 만듦 -> 경우의 수 = 1

	for coin in coins:
		for i in range(coin, k+1):
			dp[i] += dp[i-coin]

	print(dp[k])
	
solution(n, k, coins)