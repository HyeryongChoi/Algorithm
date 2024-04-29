from collections import deque

def solution(plans):
    answer = []
    '''
    시작하기로 한 시각이 되면 과제 시작
    기존 진행 중이던 과제가 있다면 멈추고 새로운 과제 시작
    진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있다면, 멈춰둔 과제를 이어서 진행
    만약, 과제를 끝낸 시각에 -> 새로 시작해야 하는 과제 & 멈춰둔 과제 모두 있다면 -> 새로 시작해야 하는 과제부터 진행
    멈춰둔 과제가 여러 개일 경우, 가장 최근에 멈춘 과제부터 시작(큐)
    과제를 끝낸 순서대로 이름을 배열에 담아 반환
    '''
    # plan = [name, start, playtime]
    
    # 시간데이터 가공
    for i in range(len(plans)):
        name, start, playtime = plans[i]
        hh, mm = map(int, start.split(":"))
        plans[i] = [name, hh*60+mm, int(playtime)]
    
    # plans 시간순 정렬
    plans_queue = deque(sorted(plans, key = lambda x: x[1]))

    # 진행중인 작업 저장해두는 큐 [name, playtime]
    waiting_queue = deque([])
    
    while plans_queue:
        name, start, playtime = plans_queue.popleft()
        end = start + playtime
        
        if len(plans_queue) > 0 and end > plans_queue[0][1]:
            _, next_start, _ = plans_queue[0]
            waiting_queue.append([name, playtime - (next_start - start)])
        elif len(plans_queue) > 0 and end != plans_queue[0][1] and len(waiting_queue) > 0:
            answer.append(name)
            
            name, rest_playtime = waiting_queue.pop()
            plans_queue.appendleft([name, end, rest_playtime])
        elif len(plans_queue) == 0 and len(waiting_queue) > 0:
            answer.append(name)
            while waiting_queue:
                answer.append(waiting_queue.pop()[0])
        else:
            answer.append(name)
            
    return answer