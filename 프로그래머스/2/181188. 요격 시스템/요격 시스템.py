def solution(targets):
    answer = 1
    
    # 폭격 미사일을 시작 좌표 기준 오름차순 정렬하기
    targets.sort(key = lambda x: (x[0], x[1]))
    
    # 요격 미사일 범위를 좁혀 나가기
    s, e = 0, 1e8
    for start, end in targets:
        if s <= start < e: 
            s = start
            if end < e: e = end
        
        else:
            answer += 1
            s, e = start, end
    
    print(s,e)
    return answer
    