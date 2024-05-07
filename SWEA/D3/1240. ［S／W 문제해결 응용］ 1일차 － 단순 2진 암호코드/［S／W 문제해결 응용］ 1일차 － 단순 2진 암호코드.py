T = int(input())

rules = [
			[0,0,0,1,1,0,1], # 0
			[0,0,1,1,0,0,1], # 1
			[0,0,1,0,0,1,1], # 2
			[0,1,1,1,1,0,1], # 3
			[0,1,0,0,0,1,1], # 4
			[0,1,1,0,0,0,1], # 5
			[0,1,0,1,1,1,1], # 6
			[0,1,1,1,0,1,1], # 7
			[0,1,1,0,1,1,1], # 8
			[0,0,0,1,0,1,1], # 9
		]

def isValid(code):
	odd_sum, even_sum = 0, 0
	code = [0] + code

	for i in range(len(code)):
		if i % 2 == 0: even_sum += code[i]
		else: odd_sum += code[i]

	return True if (odd_sum*3 + even_sum) % 10 == 0 else False

def solution(target_list):
	for i in range(m-55):
		window = target_list[i:i+7] # 시작지점 찾기

		if window in rules:
			start = i
			end = i+56
			rest = target_list[:start] + target_list[end:]

			if 1 in rest: continue

			code = [] # 8자리 암호코드
			cur_index = start
			while cur_index < end:
				cur = target_list[cur_index:cur_index+7]

				for j in range(len(rules)):
					if cur == rules[j]:
						code.append(j)
						break

				cur_index += 7 # 다음 암호코드 탐색

			if len(code) == 8 and isValid(code): return sum(code)

	return 0
			

for test_case in range(1, T+1):
	answer = 0
	n, m = map(int, input().split())
	board = [list(map(int, list(input().rstrip()))) for _ in range(n)]

	target_list = []

	for row in board:
		if 1 in row:
			target_list = row[:]
			break

	answer = solution(target_list)

	print(f'#{test_case} {answer}')