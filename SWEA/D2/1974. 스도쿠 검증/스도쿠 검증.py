def check(board):
	for row in board:
		check = set(row)

		if len(check) < 9: return 0

	rotated = list(zip(*board))

	for col in rotated:
		check = set(col)

		if len(check) < 9: return 0

	row, col = 0, 0
	for _ in range(9):
		check = set()
		for r in range(row, row+3):
			for c in range(col, col+3):
				check.add(board[r][c])

		if len(check) < 9: return 0
		
		col += 3
		if col >= len(board):
			row += 3
			col = 0

	return 1

T = int(input())

for test_case in range(1, T+1):
	board = [list(map(int, input().split())) for _ in range(9)]

	answer = check(board)

	print(f'#{test_case} {answer}')