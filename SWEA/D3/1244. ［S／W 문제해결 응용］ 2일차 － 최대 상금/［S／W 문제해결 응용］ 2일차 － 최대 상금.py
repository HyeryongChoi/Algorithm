from collections import defaultdict
from itertools import combinations

T = int(input())

answer = 0

def exchange(cnt, result, n, numbers):
	global answer
	
	if cnt == n:
		answer = max(answer, int(''.join(result)))
		return

	for i in range(len(index_pair_list)):
		# 숫자 2개 서로 위치 교환
		pos1, pos2 = index_pair_list[i]
	
		result[pos1], result[pos2] = result[pos2], result[pos1]
		
		result_num = int(''.join(result))
		if visited[(result_num, cnt+1)]: # (수, 교환횟수) -> 같은 교환횟수일 때, 이미 나온 수라면 다음으로 넘어가기
			result[pos1], result[pos2] = result[pos2], result[pos1] # 원복
			continue
			
		visited[(result_num, cnt+1)] = True # 방문체크
		
		exchange(cnt+1, result, n, numbers)
        
		result[pos1], result[pos2] = result[pos2], result[pos1] # 원복

for test_case in range(1, T+1):
	answer = 0
	numbers, m  = input().split()
	numbers = list(numbers)
	m = int(m)

	# 숫자 2개의 위치 (pos1, pos2)로 이루어진 배열 생성(조합)
	index_pair_list = list(combinations([i for i in range(len(numbers))], 2))

	visited = defaultdict(bool)
	
	exchange(0, numbers[:], m, numbers)
	
	print(f'#{test_case} {answer}')
