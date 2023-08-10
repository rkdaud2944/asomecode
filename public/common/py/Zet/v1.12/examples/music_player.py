import music_player

# 1번 핀에 연결된 수동부저를 사용하여 음악은 연주한다.
music_player.open(1)

# 연주할 음표와 길이를 저장한다.
music_player.add("C4", 300)
music_player.add("D4", 300)
music_player.add("E4", 300)

# 저장된 음악을 재생하기 시작한다.
music_player.play()

while True:
    # 시간을 점검하면서 다음에 연주할 음이 있으면 재생한다.
    music_player.update()
    