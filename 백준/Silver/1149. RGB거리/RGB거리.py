import sys

input = sys.stdin.readline

n = int(input())
costs = [list(map(int, input().split())) for _ in range(n)]
min_cost = 1e9

def solution():
	global n, costs, min_cost
	
	# dp[i][0] = i번째 집을 0번색으로 칠할 때 드는 총 최소비용
	#		   = min(dp[i-1][1], dp[i-1][2]) + costs[i][0]

	dp = [[0]*len(costs[0]) for _ in range(n)]
	dp[0] = costs[0][:]

	for i in range(1,n):
		dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + costs[i][0]
		dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + costs[i][1]
		dp[i][2] = min(dp[i-1][0], dp[i-1][1]) + costs[i][2]

	print(min(dp[n-1]))

solution()
	