# Complete the function/method so that it returns the url with anything after the anchor (#) removed.
# Examples

# "www.codewars.com#about" --> "www.codewars.com"
# "www.codewars.com?page=1" -->"www.codewars.com?page=1"

def remove_anchor(url):
    if '#' in url:
        i = url.index('#')
    else: 
        i = len(url)   
    return url[:i]

print(remove_anchor("www.codewars.com#about"))
print(remove_anchor("www.codewars.com?page=1"))

# alternative using split()
def remove_url_anchor(url):
  return url.split('#')[0]

# alternative using find()
def remove_url_anchor_2(url):
    index = url.find('#')
    return url[:index] if index >= 0 else url

# shorter alternative
def remove_url_anchor_3(url):
    return url[:url.index('#')] if '#' in url else url
