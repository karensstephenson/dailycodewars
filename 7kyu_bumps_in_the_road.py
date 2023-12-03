# Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

# Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

def bumps(road):
    remaining_bumps = 15
    for x in road:
        if x == "n":
            remaining_bumps -= 1
    if remaining_bumps >= 0:
        return "Woohoo!"
    else:
        return "Car Dead"
    
print(bumps("nnn_n__n_n___nnnnn___n__nnn__"))

# alternative using count()
def bumps2(road):
    return "Woohoo!" if road.count("n") <= 15 else "Car Dead"