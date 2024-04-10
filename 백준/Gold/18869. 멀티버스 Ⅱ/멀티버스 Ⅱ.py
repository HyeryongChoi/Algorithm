import sys
from collections import defaultdict

input = sys.stdin.readline

m, n = map(int, input().split())
spaces = [list(map(int, input().split())) for _ in range(m)]

def solution():
	answer = 0

	space_counts = defaultdict(int)
	for i in range(m):
		# 중복값 제거(같은 값이면 같은 인덱스가 나오도록) 후 오름차순 정렬
		sorted_space = sorted(set(spaces[i]))

		# 값에 대한 인덱스 저장
		value_to_index = { value: index for index, value in enumerate(sorted_space) }

		# 인덱스 순서 튜플로 저장
		index_tuple = tuple(value_to_index[value] for value in spaces[i])

		# 딕셔너리에 해당 조합 개수 증가
		space_counts[index_tuple] += 1
	
	for count in space_counts.values():
		answer += (count*(count-1))//2 # count개에서 2개를 뽑는 조합 수

	print(answer)
	
solution()