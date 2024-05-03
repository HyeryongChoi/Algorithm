def solution(targets):
    answer = 0
    targets.sort(key = lambda x: [x[1], x[0]])
    
    prev_e = 0
    for cur_s, cur_e in targets:
        if cur_s >= prev_e: # 현재 요격 범위를 벗어난 다면 요격 미사일 추가
            answer += 1
            prev_e = cur_e

    return answer