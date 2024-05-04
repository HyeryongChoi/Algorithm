T = int(input())

for test_case in range(1, T+1):
	n = int(input())
	snail = [[1]*n for _ in range(n)]
	directions = [(0,1),(1,0),(0,-1),(-1,0)]
	count = n-1

	dir_index = 1
	dir_path = [0] * count

	while count > 0:
		for _ in range(2):
			for _ in range(count): dir_path.append(dir_index)
			dir_index = (dir_index + 1) % 4
		count -= 1

	num = 2
	y, x = 0, 0
	for i in dir_path:
		y, x = y + directions[i][0], x + directions[i][1]

		snail[y][x] = num
		num += 1

	print(f'#{test_case}')
	for row in snail:
		print(*row)
	
