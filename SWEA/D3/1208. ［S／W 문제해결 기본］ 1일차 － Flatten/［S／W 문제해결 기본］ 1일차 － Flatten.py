for test_case in range(1, 11):
	n = int(input())
	heights = sorted(list(map(int, input().split())))

	diff = heights[-1] - heights[0]

	while diff > 1 and n > 0:
		n -= 1
		heights[-1] -= 1
		heights[0] += 1
		
		heights.sort()
		
		diff = heights[-1] - heights[0]

	print(f'#{test_case} {diff}')
