f = None

def do_version(filename):
    global f
    try:
        f = open(filename)
        print(f.readline())
        f.close()
    except:
        print("### AsomeCODE.Version: %s=x: End." % filename)
    f = None

def do_open(filename):
    global f
    try:
        f = open(filename + ".temp", "w")
    except Exception as e:
        print("Error - do_open", filename, e)
        f = None
    print("### NextLine")

def do_close(filename):
    global f
    if f == None:
        return
    try:
        f.close()

        if filename != "":
            import os
            os.rename(filename + ".temp", filename)
    except:
        print("Error - do_close")
    f = None
    print("### NextFile")

def do_write(text):
    try:
        if f != None: f.write(text + "\\n")
    except:
        print("Error - do_write")
    print("### NextLine")

def do_reboot():
    do_close("")
    import machine
    machine.reset()

while True:
    line = input()
    cmd = line[:2]
    text = line[2:]

    # print(cmd, text)

    if cmd == "q:": break

    if cmd == "v:": do_version(text)
    elif cmd == "o:": do_open(text)
    elif cmd == "c:": do_close(text)
    elif cmd == "w:": do_write(text)
    elif cmd == "r:": do_reboot()
    elif cmd == "e:": print(text)
