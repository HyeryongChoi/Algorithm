T = int(input())

for test_case in range(1, T+1):
	answer = 0
	n = int(input())
	prices = list(map(int, input().split()))
	
	# 뒤에서부터 순회
	max_price = 0
	for i in range(n-1, -1, -1):
		if prices[i] > max_price:
			# max값 보다 크다면 max값 갱신
			max_price = prices[i]
		else:
			# max값 보다 작다면 사서 팔거니까 max값과의 차이를 더해줌
			answer += max_price - prices[i]
			
	print(f'#{test_case} {answer}')
