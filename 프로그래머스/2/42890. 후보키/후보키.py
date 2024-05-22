from itertools import combinations
from collections import defaultdict

candidate_keys = defaultdict(bool)

def isSatisfiedMinimum(index_combi):
    global candidate_keys

    # index_combi로 만들 수 있는 조합을 검사해야함
    n = len(index_combi)
    
    for i in range(1,n+1):
        new_combis = combinations(index_combi, i)
        
        for new_combi in new_combis:
            if candidate_keys[new_combi]: return False
    
    return True

def solution(relation):
    answer = 0
    arr = [i for i in range(len(relation[0]))]
    combis = []
    
    for cnt in range(1, len(relation[0])+1):
        combis.extend(list(combinations(arr, cnt)))
    
    for index_combi in combis:
        unique_check = set()
        
        for r in range(len(relation)):
            temp = []
            for index in index_combi:
                temp.append(relation[r][index])
            
            unique_check.add(tuple(temp))
        
        if len(unique_check) == len(relation) and isSatisfiedMinimum(index_combi):
            answer += 1
            candidate_keys[index_combi] = True

    return answer