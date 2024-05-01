bingo = [0] * 8

def solution(board):
    count_f, count_s = 0, 0
    
    # O와 X 개수세기
    for r in range(3):
        for c in range(3):
            if board[r][c] == 'O': count_f += 1
            elif board[r][c] == 'X': count_s += 1
    
    if count_f < count_s: return 0 # X의 개수가 더 많은 경우
    if count_f - count_s > 1: return 0 # 차이가 2이상인 경우

    searchBingo(board)

    # 동시에 한 줄을 만든 경우
    if 1 in bingo and 2 in bingo: return 0
    
    # O가 승리했을 때 O의 개수가 X의 개수 + 1이 아닌 경우
    if 1 in bingo and count_f != count_s + 1: return 0

    # X가 승리했을 때 O의 개수가 X의 개수와 같지 않은 경우
    if 2 in bingo and count_f != count_s: return 0
                
    return 1

def searchBingo(board):
    n = len(board)
    rotated = [list(row) for row in board]
    
    # board 회전
    for r in range(n):
        for c in range(n):
            rotated[r][c] = board[c][n-1-r]
    
    # 가로
    for r in range(n):
        if board[r].count('O') == n: bingo[r] = 1
        elif board[r].count('X') == n: bingo[r] = 2
    
    # 세로
    for c in range(n):
        if rotated[c].count('O') == n: bingo[n+c] = 1
        elif rotated[c].count('X') == n: bingo[n+c] = 2
    
    # 오른쪽 위 대각선
    count_f, count_s = 0, 0
    for i in range(n):
        if board[i][i] == 'O': count_f += 1
        elif board[i][i] == 'X': count_s += 1
    
    if count_f == n: bingo[n*2] = 1
    elif count_s == n: bingo[n*2] = 2
    
    # 오른쪽 아래 대각선
    count_f, count_s = 0, 0
    for i in range(n):
        if board[i][n-i-1] == 'O': count_f += 1
        elif board[i][n-i-1] == 'X': count_s += 1
    
    if count_f == n: bingo[n*2+1] = 1
    elif count_s == n: bingo[n*2+1] = 2
            