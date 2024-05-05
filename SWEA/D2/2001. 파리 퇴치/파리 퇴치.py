def getKillCount(start, m, arr):
	count = 0
	row, col = start
	
	for r in range(row, row+m):
		for c in range(col, col+m):
			count += arr[r][c]
	
	return count

T = int(input())

for test_case in range(1, T+1):
	answer = 0
	n, m = map(int, input().split())
	arr = [list(map(int, input().split())) for _ in range(n)]

	# mxm파리채
	for row in range(n-m+1):
		for col in range(n-m+1):
			answer = max(answer, getKillCount((row,col), m, arr))

	print(f'#{test_case} {answer}')