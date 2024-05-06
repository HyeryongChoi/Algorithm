for test_case in range(1, 11):
	answer = 0
	t = int(input())
	board = [list(map(int, input().split())) for _ in range(100)]
	rotated = list(zip(*board))

	for row in board: answer = max(answer, sum(row))
	for col in rotated: answer = max(answer, sum(col))

	sum1 = 0
	sum2 = 0
	for r in range(len(board)):
		sum1 += board[r][r]
		sum2 += board[r][len(board)-r-1]

	answer = max(answer, sum1)
	answer = max(answer, sum2)

	print(f'#{test_case} {answer}')