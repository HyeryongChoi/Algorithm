if __name__ == '__main__':
    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    directions = {'U': 0, 'D': 1, 'L': 2, 'R': 3}

    # 포탄 발사: 벽돌, 강철에 충돌하거나 게임 맵 밖으로 나감, 벽돌벽이라면 평지가 됨
    T = int(input())
    for test_case in range(1, T+1):
        h,w = map(int, input().split())
        board = [list(input()) for _ in range(h)]
        n = int(input())
        operands = list(input())

        y, x, z = 0, 0, 0
        for r in range(h):
            for c in range(w):
                if board[r][c] == '^': y, x, z = r, c, 0
                elif board[r][c] == 'v': y, x, z = r, c, 1
                elif board[r][c] == '<': y, x, z = r, c, 2
                elif board[r][c] == '>': y, x, z = r, c, 3

        # 전차가 현재 있는 위치 평지로 설정
        board[y][x] = '.'

        for operand in operands:
            if operand == 'S':
                # 현재 바라보고 있는 방향으로 포탄발사
                ny, nx = y, x
                while 0<=ny<h and 0<=nx<w and (board[ny][nx] == '.' or board[ny][nx] == '-'):
                    ny += dy[z]
                    nx += dx[z]

                if 0<=ny<h and 0<=nx<w and board[ny][nx] == '*':
                    board[ny][nx] = '.'

                continue

            # 전차 방향 및 위치 이동
            z = directions[operand]
            ny = y + dy[z]
            nx = x + dx[z]

            if 0<=ny<h and 0<=nx<w and board[ny][nx] == '.':
                y, x = ny, nx

        # 전차 위치시키기
        if z == 0: board[y][x] = '^'
        elif z == 1: board[y][x] = 'v'
        elif z == 2: board[y][x] = '<'
        elif z == 3: board[y][x] = '>'

        print(f'#{test_case}', end=' ')
        for row in board:
            print(''.join(row))