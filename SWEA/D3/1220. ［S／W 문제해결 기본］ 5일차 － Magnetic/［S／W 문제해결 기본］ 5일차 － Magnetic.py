T = 10
for test_case in range(1, T+1):
    answer = 0
    n = int(input())
    board = [list(map(int, input().split())) for _ in range(n)]

    # 1 -> n극, 2 -> s극
    # n,s 쌍 개수를 찾는 문제

    for c in range(n):
        is_n = False # n극 여부
        for r in range(n):
            if is_n and board[r][c] == 2: # n극인데 s극을 만난다면
                answer += 1
                is_n = False
            elif board[r][c] == 1: # n극이라면
                is_n = True

    print(f'#{test_case} {answer}')