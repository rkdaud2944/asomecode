# thread_queue.py

import _thread
import ucollections


class ThreadQueue:
    def __init__(self, max):
        self.queue = ucollections.deque((), max)
        self.lock = _thread.allocate_lock()

    def push(self, item):
        self.lock.acquire()
        try:
            self.queue.append(item)
        finally:
            self.lock.release()

    def pop(self):
        self.lock.acquire()
        try:
            result = self.queue.popleft()
        except:
            result = None
        finally:
            self.lock.release()
        return result


def create(max):
    return ThreadQueue(max)