import sys
from collections import Counter

input = sys.stdin.readline

n = int(input())
mine = list(map(int, input().split()))
m = int(input())
targets = list(map(int, input().split()))

def solution():
	answer = []
	
	mine.sort()

	count_table = Counter(mine)
	
	for target in targets:
		if count_table[target]: answer.append(count_table[target])
		else: answer.append(0)

	print(*answer)
	
solution()