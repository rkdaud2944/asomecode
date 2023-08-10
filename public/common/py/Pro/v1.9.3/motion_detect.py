### AsomeCODE.Version: motion_detect.py=2: End.

ready = 0
far_none = 1
far_close = 2
close_none = 3
close_far = 4
wait = 5
far = 6
close = 7

state = ready

def start():
    global state

    state = ready

def get(cm):
    global state
    
    if state in [far_none, far_close, close_none, close_far]:
        state = wait
        return state
    
    if cm < 0: return state
    
    if state == ready:
        if cm > 50:
            pass
        elif cm > 20:
            state = far
        elif cm < 20: 
            state = close
            
    if state == wait:
        if cm > 50:
            state = ready

    if state == far:
        if cm > 50:
            state = far_none
        elif cm < 20:
            state = far_close

    if state == close:
        if cm > 50:
            state = close_none
        elif cm > 20:
            state = close_far
            
    return state