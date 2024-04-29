import math

def solution(r1, r2):
    count = 0
    
    for x in range(0, r1):
        y_max = int(math.sqrt(r2**2 - x**2))
        y_min = int(math.sqrt(r1**2 - x**2 - 1))
        
        count += y_max - y_min
        
    for x in range(r1, r2+1):
        y_max = int(math.sqrt(r2**2 - x**2))
        
        count += y_max
            
    return count*4
    
    