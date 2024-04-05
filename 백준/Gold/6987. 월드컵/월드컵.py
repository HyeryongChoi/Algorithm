import sys
from itertools import combinations

input = sys.stdin.readline

def dfs(count):
	global answer
	
	# 마지막 경기에서부터 첫번째 게임 시작 전까지 도달
	if count == -1:
		answer = 1

		# 모든 경기 결과 합이 0이 아니라면 false
		for res in result:
			if res.count(0) < len(res):
				answer = 0
				break

		return
			
				
	
	country1, country2 = games[count]
	
	# 각 경기 3가지 경우의 수 - 승/패, 무/무, 패/승
	for res1, res2 in [(0, 2), (1, 1), (2, 0)]:
		if result[country1][res1] > 0 and result[country2][res2] > 0:
			result[country1][res1] -= 1
			result[country2][res2] -= 1
			dfs(count-1)
			result[country1][res1] += 1
			result[country2][res2] += 1
	

		
# 경기 조합
games = list(combinations(range(6), 2))
answers = []

for _ in range(4):
	arr = list(map(int, input().split()))
	result = [arr[i:i+3] for i in range(0, len(arr), 3)]
	answer = 0
	dfs(14) # 0번 게임~14번 게임 -> 총 15번의 게임
	answers.append(answer)
	
print(*answers)