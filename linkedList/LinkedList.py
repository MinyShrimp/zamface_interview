from typing import TypeVar

T = TypeVar('T')
TNode = TypeVar('TNode', bound='Node')

# Node
class Node:
    def __init__(self, data: T = None, next: TNode = None):
        self.data = data
        self.next = next

# 단일 연결리스트
class LinkedList:
    def __init__(self) -> None:
        self.head = Node()
        self.cur = None
        self.before = None

    # 맨 앞에 저장
    def fInsert(self, data: T) -> None: 
        newNode = Node(data)

        newNode.next = self.head.next
        self.head.next = newNode
    
    # 맨 뒤에 저장
    def sInsert(self, data: T) -> None:
        newNode = Node(data)

        if(self.head.next == None):
            self.head.next = newNode
        else:
            self.cur = self.head.next
            while self.cur.next != None:
                self.cur = self.cur.next
            self.cur.next = newNode

    # 찾는 데이터 중 가장 앞에 있는 데이터 삭제
    def remove(self, data: T) -> T or None:
        if(self.head.next == None):
            return None
        
        self.before = self.head
        self.cur = self.head.next
        while(self.cur.data != data and self.cur.next != None):
            self.before = self.cur
            self.cur = self.cur.next
        
        if self.cur.data == data:
            self.before.next = self.cur.next
            _data = self.cur.data

            return _data
        
        return None

    # 모두 출력
    def __str__(self) -> str:
        self.cur = self.head.next
        _str = ''
        while( self.cur != None ):
            _str += str(self.cur.data) + ' '
            self.cur = self.cur.next
        return _str
        