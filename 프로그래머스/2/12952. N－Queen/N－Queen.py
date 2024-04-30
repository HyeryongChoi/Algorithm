from collections import defaultdict

answer = 0

row_visited = defaultdict(bool)
col_visited = defaultdict(bool)
up_right_visited = defaultdict(bool)
down_right_visited = defaultdict(bool)

def solution(n):
    # n개의 퀸이 서로 공격할 수 없도록 배치할 수 있는 방법 수?
    
    search(0, n) # 퀸은 서로 다른 행, 열을 가져야 하므로 y좌표 하나씩 선택
    
    return answer

def canAttack(pos):
    # 퀸은 가로, 세로, 대각선 이동 가능
    
    #우측 위로 가는 대각선은, x,y의 합이 서로 같다. (0,2와 1,1은 같은 대각선에 있다.)
    #우측 아래로 가는 대각선은, x,y의 차가 서로 같다. (1,0과 2,1은 같은 대각선에 있다)
    
    y, x = pos
    if row_visited[y]: return True
    if col_visited[x]: return True
    if up_right_visited[y+x]: return True
    if down_right_visited[y-x]: return True
    
    return False

def search(y, n):
    global answer

    if y >= n:
        answer += 1
        return
    
    for x in range(n):
        if canAttack((y,x)): continue
        
        # 퀸은 가로, 세로, 대각선 이동 가능
        row_visited[y] = True
        col_visited[x] = True
        up_right_visited[y+x] = True
        down_right_visited[y-x] = True
        
        search(y+1, n)
        
        row_visited[y] = False
        col_visited[x] = False
        up_right_visited[y+x] = False
        down_right_visited[y-x] = False