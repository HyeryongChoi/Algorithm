import sys

input = sys.stdin.readline

a, b = map(int, input().split())
arr_a = list(map(int, input().split()))
arr_b = list(map(int, input().split()))

def solution():
	set_a = set(arr_a)
	set_b = set(arr_b)
	
	# a-b 개수
	new_set = set_a - set_b
	print(len(new_set))
	
	# 증가하는 순서로 원소 출력
	if len(new_set) == 0: exit()
		
	new_arr = list(new_set)
	new_arr.sort()
	
	print(*new_arr)
	
solution()